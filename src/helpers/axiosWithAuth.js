import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

export const axiosWithAuth = () => {
  return axios.create({
    baseUrl: "http://localhost5000/api",
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};
