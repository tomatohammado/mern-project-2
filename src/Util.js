import axios from 'axios'
import API_URL from './constants.js'

export const getAll = axios
  .get(API_URL)
  .catch(err => console.log(err))
