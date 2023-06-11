import baseAxios from './baseAxios'

interface UserData {
  username: string
  email: string
  password: string
}

const userSignUp = (data: UserData) => {
  baseAxios.post('/signup', data)
}

export default userSignUp
