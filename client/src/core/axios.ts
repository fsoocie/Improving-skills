import axios from 'axios'

axios.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${window.localStorage.getItem('Authorization')}`
  return config
})

export {axios}
