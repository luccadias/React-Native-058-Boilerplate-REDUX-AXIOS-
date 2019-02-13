import axiosProvider from './config/axios';

export function getExample(parameter) {
    return axiosProvider.get(`/x/${parameter}`);
}

export function postExample(object) {
    return axiosProvider.post('/z', object);
}