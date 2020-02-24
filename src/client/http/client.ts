import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
  timeout: 5000,
  headers: {
    Authorization: window.APP.TOKEN,
    'Content-Type': 'application/json',
  },
})
