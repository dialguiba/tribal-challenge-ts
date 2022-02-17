import Axios from "axios";

export const apiInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY as string,
  },
});
