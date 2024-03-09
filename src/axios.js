import axios from 'axios';


export const HTTP = axios.create({
  baseURL: 'http://localhost:8000/',
  // baseURL: 'https://kl-femflare.fly.dev/',
  headers: {
    Authorization: localStorage.getItem('token')
  }
})