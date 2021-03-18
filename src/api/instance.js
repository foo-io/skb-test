import axios from 'axios';

const API_URL = 'https://api.datamuse.com/'

export default axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        accept: 'application/json'
    }
})
