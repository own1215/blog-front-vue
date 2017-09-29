const axios = require('axios')

export const HTTP = axios.create({
  baseURL: 'http://localhost:3000/api/'
})
