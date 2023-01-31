export const BACKEND_BASE_URL= 'http://localhost:8001/api/'

export const CREATE_SHORT_URL_V1_API = 'v1/short';
export const getOriginalUrlV1Api = (shortURL) => `v1/url/${shortURL}`;