import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
