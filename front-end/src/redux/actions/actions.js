import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const post = (url, data, type, params, redirect = true) => {
  const headers = params
    ? {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
      }
    : {};
  return (dispatch) => {
    return axios
      .post(
        (url.startsWith("http") ? "" : process.env.REACT_APP_BASE_URL) + url,
        data,
        {
          headers: {
            ...headers,
            token: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
      .then(({ data }) => {
        dispatch({
          type: type,
          response: data,
          redirect: redirect,
        });
      })
      .catch((error) => {
        error.response
          ? toast.error(error.response.data.message)
          : toast.error(error.message);
      });
  };
};
