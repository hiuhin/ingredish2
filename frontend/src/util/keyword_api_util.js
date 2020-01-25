import axios from "axios";

export const createKeyword = (keyword) => {
  // debugger;
  // console.log("searchapi", search);
  return axios.post(`/api/keywords`, keyword);
  // return axios.get(`/api/recipes/`,{params: {search:search} });
};

export const fetchKeyword = (name) => {
    return axios.get(`/api/keywords/?search=${name}`);
};
