import axios from 'axios';

const baseUri: string = process.env.REACT_APP_SERVER_URL as string;
const baseUri: string = process.env.REACT_APP_SERVER_URL as string;

export const getUser = (signature: string, address: string): Promise<User> =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(`${baseUri}/user`, {
        address,
        signature,
      });
      let fields: string[] = ["bio", "email", "name", "image", "title"];
      fields.forEach((element) => {
        if (res.data[element] === null) {
          res.data[element] = "";
        }
      });
      res.data.address = address;
      let user: User = res.data;
      console.log(user);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });

export const patchUser = (
  signature: string,
  address: string,
  file: File,
  newAccount: User
): Promise<string> =>
  new Promise(async (resolve, reject) => {
    try {
      const data = new FormData();
      data.append("address", address);
      data.append("signature", signature);
      data.append("email", newAccount.email)
      data.append("bio", newAccount.bio)
      data.append("name", newAccount.name)
      data.append("title", newAccount.title)
      // data.append("file", file)

      let res = await axios.patch(`${baseUri}/user`, data)
      resolve(res.data as string)
    } catch (error) {
      reject(error);
    }
  });
