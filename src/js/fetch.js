export function fetchImg(input) {
    const API_KEY = '42449656-b144528722562b12d5a1b87bf';
    const BASE_URL = 'https://pixabay.com/api/';
    const PARAMS = `?q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;
    const url = `${BASE_URL}${PARAMS}&key=${API_KEY}`;

    return fetch(url).then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    });
};
