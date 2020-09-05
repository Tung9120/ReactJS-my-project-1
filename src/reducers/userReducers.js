import {
  LOGIN,
  ADD_ADMIN,
  ADD_PRODUCT,
  ADD_CAROUSEL,
  ADD_TOP_CARDS,
} from "../constants/ActionsType";

const initialStateUser = {
  isLoggedIn: false,
  name: "",
  admins: [],
  products: [],
  newProducts: [],
  carousel: [],
  topCards: [],
};

function userReducer(state = initialStateUser, action = { payload: {} }) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        name: action.payload.name,
      };

    case ADD_ADMIN:
      return {
        ...state,
        admins: [...state.admins, action.newAdmin],
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.newProduct],
      };

    case ADD_CAROUSEL:
      return {
        ...state,
        carousel: [...action.newElement],
      };

    case ADD_TOP_CARDS:
      return {
        ...state,
        topCards: [...action.newCard],
      }

    default:
      return state;
  }
}

export default userReducer;
