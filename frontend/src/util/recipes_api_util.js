import axios from "axios";

export const fetchRecipes = (search) => {
    // debugger;
    console.log("searchapi", search);
    return axios.get(`/api/recipes/?search=${search}`);
    // return axios.get(`/api/recipes/`,{params: {search:search} });
};


