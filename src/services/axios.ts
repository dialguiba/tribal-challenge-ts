import Axios from "axios";

export const apiInstance = Axios.create({
  baseURL: "/prod",
  timeout: 5000,
  headers: {
    "x-api-key": "e9p4msN8O08nORtkLoL9C7GmRJGMjphQ6wXXFCiI",
  },
});
