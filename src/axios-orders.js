import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reac-my-burger-d149a.firebaseio.com/'
});

export default instance;