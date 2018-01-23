import axios from 'axios'
import { API_URL } from './constants.js'

export const getMiniatures = axios
  .get(API_URL)
  .then(res => { return res })
  .catch(err => console.log(err))

export const postMiniature = body => {
  axios
    .post(API_URL, body)
    .then(res => { return res })
    .catch(err => console.log(err))
}
