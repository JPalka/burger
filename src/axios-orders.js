import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-7479f.firebaseio.com/'
});

export default instance;