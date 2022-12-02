import axios from 'axios';

const baseUri: string = process.env.REACT_APP_SERVER_URL as string;

export const getUser = (address: string): Promise<User> =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUri}/user`, {
        params: {
          address,
        },
      });
      if (!res.data.id) {
        return reject('no user');
      }
      const fields: string[] = ['bio', 'email', 'name', 'image', 'title'];
      fields.forEach((element) => {
        if (res.data[element] === null) {
          res.data[element] = '';
        }
      });
      res.data.address = address;
      const user: User = res.data;
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });

export const postUser = (
  signature: string,
  address: string,
  file: File,
  newAccount: User,
): Promise<User> =>
  new Promise(async (resolve, reject) => {
    try {
      const data = new FormData();
      data.append('address', address);
      data.append('signature', signature);
      data.append('email', newAccount.email);
      data.append('bio', newAccount.bio);
      data.append('name', newAccount.name);
      data.append('title', newAccount.title);
      // data.append("file", file)

      const res = await axios.post(`${baseUri}/user`, data);
      resolve(res.data as User);
    } catch (error) {
      reject(error);
    }
  });
