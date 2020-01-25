import axios from "axios";

export const fetchRecipes = (search) => {
    return axios.get(`/api/recipes/?search=${search}`);
};

export const fetchRecipe = (id) => {
    return axios.get(`/api/recipes/${id}`);
};
