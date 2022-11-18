import axios from "axios";

const baseUri: string = process.env.REACT_APP_SERVER_URL as string

export const getUser = (signature: string, address: string): Promise<User> =>
  new Promise(async (resolve, reject) => {
    try {
      let res = await axios.post(`${baseUri}/user`, {
        address,
        signature
      })
      let user: User = res.data
      resolve(user)
    } catch (error) {
      reject(error)
    }
  });
