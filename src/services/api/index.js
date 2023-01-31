import { CREATE_SHORT_URL_V1_API, getOriginalUrlV1Api } from "../../constants/http";
import axios from "./axios"

export const generateShortURL = (data) => {
    return axios.post(CREATE_SHORT_URL_V1_API, data);
}

export const getOriginalURL = (shortURL) => {
    return axios.get(getOriginalUrlV1Api(shortURL));
}