import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const RESET = "RESET";

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterFavorites = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderFavorites = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const resetFavorites = () => {
  return {
    type: RESET,
  };
};
