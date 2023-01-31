import axios from "axios";
import axiosRetry from 'axios-retry';
import { toast } from "react-hot-toast";
import { BACKEND_BASE_URL } from "../../constants/http";

const axiosClient = axios.create({
    baseURL: BACKEND_BASE_URL,
    timeout: 4000,
    headers: {
        'Content-Type': 'application/json'
    }
});

const responseHandler = (response) => {
    const config = response?.config
    if (config.raw) {
        return response
    }
    if (response.status === 200 || response.status === 201) {
        const data = response?.data
        if (data) {
            return data
        }
        return data
    }
}

const httpErrorHandler = (error) => {
    if (error === null) toast.error("Something went wrong! try again");
    const response = error?.response
    if (error.code === 'ERR_NETWORK') {
        toast.error("'connection problems..'");
    } else if (error.code === 'ERR_CANCELED') {
        toast.error('connection canceled..');
    }
    if (response) {
        toast.error("Something went wrong! try again");
    }
}

const responseErrorHandler = (response) => {
    const config = response?.config
    if (config.raw) {
        return response
    }
    // the code of this function was written in above section.
    return httpErrorHandler(response)
}

//register interceptor to handle http errors and responses
axiosClient.interceptors.response.use(responseHandler, responseErrorHandler);

// retry failed API's 3 times
axiosRetry(axiosClient, { retries: 3 });

export default axiosClient;
