import React from 'react';
import { faUpRightFromSquare, faCopy, faClose } from '@fortawesome/free-solid-svg-icons';
import ModalHoc from '../../atoms/ModalHOC';
import './viewShortUrlModal.css';
import IconButton from '../../atoms/IconButton';
import toast from 'react-hot-toast';

const ViewURLModal = (props) => {
    const { onClickBack, url, shortUrl } = props;

    const copyURL = (url) => {
        navigator.clipboard.writeText(url);
        toast.success('url copied!')
    }

    const openLink = (url) => {
        window.open(url, '_blank');
    }
    return (
        <div className="view-short-url-modal">
            <div
                className="d-flex justify-content-end"
            >
                <IconButton
                    icon={faClose}
                    onClick={onClickBack}
                    color="#88898b"
                />
            </div>
            <h5 style={{ color: '#ff621f' }}>There you go!</h5>
            <div className="modal-content d-flex flex-column gap-3 align-items-start">
                <div
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: '400px', color: '#8db1d0' }}
                    title={url}>
                    {url}
                </div>
                <span style={{ color: '#8db1d0' }}> {shortUrl} </span>
                <div className="d-flex justify-content-end gap-2 w-100 px-1">
                    <IconButton
                        color='#009cff'
                        icon={faCopy}
                        className="m-1"
                        onClick={() => copyURL(shortUrl)}
                    />
                    <IconButton
                        color='#ff621f'
                        icon={faUpRightFromSquare}
                        className="m-1"
                        onClick={() => openLink(shortUrl)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalHoc(ViewURLModal);
