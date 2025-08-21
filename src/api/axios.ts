import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000', // NestJS backend
  timeout: 10000,
})

export default api
