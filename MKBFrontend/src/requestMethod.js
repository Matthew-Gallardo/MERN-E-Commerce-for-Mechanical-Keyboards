import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzNiMGE1OTcwMmQzMGVjMWI4OGIwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzAwNzg2MywiZXhwIjoxNjg4NTY1NDYzfQ.9olrwUxaL_ddL6pL3ZIz8ANUk7r5Q_wDYpLCGiUJfpo";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});