import { instance } from './axios'

export const register = async ({ user }) => {
  const { data } = await instance.post('/auth/register', { user })

  return data
}
