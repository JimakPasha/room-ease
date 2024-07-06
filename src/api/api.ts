import axios from "axios";

export const api = axios.create({
  baseURL: "https://dcontent.inviacdn.net/shared/dev/test-api",
  headers: {
    "Content-Type": "application/json",
  },
});
