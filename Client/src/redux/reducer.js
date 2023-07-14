import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET} from "./actions";

let initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function rootReducer(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      let removeFavorite = state.myFavorites.filter(
        (remove) => remove.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: removeFavorite,
      };

    case ORDER:
      let ordenados;
      if (payload === "Ascendente") {
        ordenados = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        ordenados = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1));
      }
      return {
        ...state,
        myFavorites : [...ordenados],
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (Character) => Character.gender === payload
        ),
      };

    case RESET:
      return{
        ...state,
        myFavorites: state.allCharacters
      }

    default:
      return {
        ...state,
      };
  }
}
