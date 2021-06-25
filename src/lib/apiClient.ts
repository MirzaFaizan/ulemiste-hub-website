import axios from 'axios';

// Immediately Invoked Function Expression to create simple singleton class like

const http = (function () {
    const apiPort = process.env.API_PORT;
    const instance = axios.create({
        baseURL:
            process.env.API_PROTOCOL +
            '://' +
            process.env.API_HOST +
            (apiPort ? ':' + apiPort : '') +
            '/' +
            process.env.API_BASE,
        timeout: 10000,
        headers: {},
        transformResponse: [
            function (data) {
                // Do whatever you want to transform the data
                const parsedData = JSON.parse(data);
                // this is to avoid having to do response.data.data layer if the api response is structured that way
                return parsedData?.data ?? parsedData;
            }
        ]
    });

    const token = localStorage?.getItem?.(process.env.TOKEN_NAME);
    if (token) {
        instance.defaults.headers.common['Authorization'] = `Token ${token}`;
    }

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error?.response?.status === 401) {
                delete instance.defaults.headers.common['Authorization'];
                localStorage.removeItem(process.env.TOKEN_NAME);
                // redirect to login without trying to refresh token for now, need to use status 401 instead of 500
                if (window.location.pathname !== '/') {
                    window.location.assign('/');
                }
            }

            throw error;
        }
    );

    return {
        get: instance.get,
        post: instance.post,
        put: instance.put,
        delete: instance.delete,
        // use this function on login, logout and refresh token with an interceptor on 401 request
        setAuthorizationToken: (token?: string) => {
            if (token?.length) {
                instance.defaults.headers.common[
                    'Authorization'
                ] = `Token ${token}`;
            } else {
                delete instance.defaults.headers.common['Authorization'];
            }
        },
        isAuthenticated: () =>
            !!instance?.defaults?.headers?.common?.['Authorization']
    };
})();

export default http;
