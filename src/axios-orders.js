import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-fdea3.firebaseio.com/'
});

export default instance;