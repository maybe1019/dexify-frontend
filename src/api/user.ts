import axios from "axios";

const baseUri: string = process.env.REACT_APP_SERVER_URL as string;

export const getUser = (signature: string, address: string): Promise<User> =>
  new Promise(async (resolve, reject) => {
    try {
      let res = await axios.post(`${baseUri}/user`, {
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
