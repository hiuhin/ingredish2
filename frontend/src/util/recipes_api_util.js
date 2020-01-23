import axios from "axios";

export const fetchRecipes = (search) => {
    // debugger;
    // return axios.get(`/api/recipes/?search=${search}`);
    return axios.get(`/api/recipes/`,{params: {search:search} });
};


