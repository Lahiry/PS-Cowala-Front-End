import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://ip-fast.com/api/ip/',
})