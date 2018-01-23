import axios from 'axios'
import { API_URL } from './constants.js'

export const getAll = axios
  .get(API_URL)
  .then(res => { return res })
  .catch(err => console.log(err))
