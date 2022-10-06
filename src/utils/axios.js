import axios from 'axios'
import Config from 'react-native-config'

import Storage from './storage'

export const instance = axios.create({
  baseURL: Config.API,
  timeout: 60 * 1000
})

instance.interceptors.request.use(async (options) => {
  const accessToken = await Storage.getItem('accessToken')

  const newOptions = { ...options, headers: { ...options?.headers } }

  if (accessToken) {
    newOptions.headers.Authorization = accessToken
  }

  return newOptions
})
