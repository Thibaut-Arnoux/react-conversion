import axios from 'axios';

export const httpClient = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json'
    }
});

// @see https://www.thedutchlab.com/insights/using-axios-interceptors-for-refreshing-your-api-token
httpClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

httpClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        // const originalRequest = error.config;
        // if (error.response.status === 403 && !originalRequest._retry) {
        //     originalRequest._retry = true;
        //     const access_token = await refreshAccessToken();
        //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        //     return axiosApiInstance(originalRequest);
        // }
        return Promise.reject(error);
    }
);
