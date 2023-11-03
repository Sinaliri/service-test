// https://654433295a0b4b04436c2244.mockapi.io/api/service/:e
import axios from "axios";
import { useEffect, useState } from "react";

export const url = "https://654433295a0b4b04436c2244.mockapi.io/api/service/";
export const base_url = url;

let defaultApi = axios.create({
  baseURL: base_url,
});

if (typeof window !== "undefined") {
  var token = localStorage.getItem("accessToken");
}
export const getUsers = () => {
  return defaultApi({
    method: "get",
    url: `${base_url}/users/`,
  })
    .then((res) => res)
    .catch((err) => err);
};
export const login = (data) => {
  return defaultApi({
    method: "post",
    url: `${base_url}/register/`,
    data,
  })
    .then((res) => res)
    .catch((err) => err);
};
export const signup = (data) => {
  return defaultApi({
    method: "post",
    url: `${base_url}/register/`,
    data,
  })
    .then((res) => res)
    .catch((err) => err);
};
export const editData = (id, data) => {
  return defaultApi({
    method: "put",
    url: `${base_url}/register/` + id,
    data,
  })
    .then((res) => res)
    .catch((err) => err);
};
export const getUserData = (id) => {
  return defaultApi({
    method: "get",
    url: `${base_url}/register/` + id,
  })
    .then((res) => res)
    .catch((err) => err);
};
