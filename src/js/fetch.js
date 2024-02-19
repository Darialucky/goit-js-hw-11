export function fetchImg (input) {
        const API_KEY = '42449656-b144528722562b12d5a1b87bf';
        const BASE_URL = 'https://pixabay.com/api/';
        const PARAMS = `?q=$(input)&image_type=photo&orientation=horizontal&safesearch=true`;
        const url = API_KEY + BASE_URL + PARAMS;
    
      
        return fetch(url).then(res =>{
            if (!res.ok) {
            throw new Error(response.status);
        } 
        return res.json();
      });
};