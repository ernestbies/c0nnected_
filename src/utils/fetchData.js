const BACKEND_URL = 'https://ernestbies-backend.onrender.com';

export const fetchPosts = (signal) => {
    return fetch(`${BACKEND_URL}/api/posts`, { signal }).then((response) =>
        response.json()
    );
};

export const sendPost = (data) => {
    return fetch(`${BACKEND_URL}/api/posts`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
    });
};
