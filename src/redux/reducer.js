import { ADD_FAV, REMOVE_FAV } from "./actions";

let initialState = {
  myFavorites: [],
};

export default function rootReducer (state = initialState, actions){
  const { type, payload } = actions;
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      let removeFavorite = state.myFavorites.filter(
        (remove) => remove.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: removeFavorite,
      };

    default:
      return {
        ...state,
      };
  }
};
