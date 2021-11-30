import axios from 'axios';

export const rapidApi = axios.create({
    baseURL: 'https://movies-tvshows-data-imdb.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
        'x-rapidapi-key': '01030c9c4amsh6d2327c0f3233bbp12494cjsna970496d436e'
    }
});