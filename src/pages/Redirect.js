import React, { useEffect, useState } from 'react';
import { redirect, useParams } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner';
import { getOriginalURL } from '../services/api';
import EmptyState from '../molecules/EmptyState';

const Redirect = () => {

    const { urlHash } = useParams();
    const [isInvalidURL, setInvalidURL] = useState(false);

    // TODO: better the side effects put away from component
    const getURL = async (shortURL) => {
        const response = await getOriginalURL(shortURL);
        const url = response?.data?.url;
        if (url) {
            window.location.replace(url);
        } else {
            setInvalidURL(true)
        }
    }

    useEffect(() => {
        if (!urlHash) {
            redirect('/')
        }
        getURL(urlHash);
    }, []);

    return (
        <div className="d-flex vh-100 w-100 justify-content-center align-items-center">
            {isInvalidURL ? (
                <EmptyState message="Invalid URL"/>
            ) : (
                <TailSpin
                    height="100"
                    width="100"
                    color="#777777"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    visible={true}
                />
            )}
        </div>
    );
};

export default Redirect;
