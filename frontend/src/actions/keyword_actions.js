// src/actions/session_actions.js

import * as APIUtil from "../util/keyword_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_ALL_KEYWORDS = "RECEIVE_ALL_KEYWORDS";
export const RECEIVE_KEYWORD = "RECEIVE_KEYWORD";

export const receiveKeywords = keywords => {
  // console.log("action",recipes);
  return {
    type: RECEIVE_ALL_KEYWORDS,
    keywords
  };
};

export const receiveKeyword = keyword => {
  // debugger;
  return {
    type: RECEIVE_KEYWORD,
    keyword
  };
};

export const createKeyword = keyword => dispatch => {
  // debugger;
    return APIUtil.createKeyword(keyword);
        // .then(res => console.log("key", res)
    // dispatch(receiveRecipes(res))
//   );
};

export async function fetchKeyword(keyword) {
    // debugger;
    let result = await APIUtil.fetchKeyword(keyword);
  // console.log("res", result);
  return result;
    
        // .then((res) => console.log("keyact", res.data));  
};
