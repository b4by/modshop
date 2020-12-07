import axios from 'axios';
import Cookie from 'js-cookie';
import config from '../config';

export const STRAPI_API_URL = config.strapi.api_url;

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    axios
    .get(`${STRAPI_API_URL}/categories`)
    .then(res => {
      resolve(res)
    })
    .catch(error => {
      reject(error)
    })
  })
}

export const registerUser = (username, email, phone, password) => {
  return new Promise((resolve, reject) => {
    axios
    .post(`${STRAPI_API_URL}/auth/local/register`, { username, email, phone, password })
    .then((res) => {
      Cookie.set("token", res.data.jwt);
      resolve(res);
    })
    .catch((error) => {
      reject(error.response)
    })
  })
}