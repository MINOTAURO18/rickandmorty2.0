import { ADD_FAV, REMOVE_FAV } from "./actions";

let initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      let removeFavorite = state.myFavorites.filter(
        (remove) => remove.id !== payload
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
