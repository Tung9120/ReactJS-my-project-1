import {
  LOGIN,
  ADD_ADMIN,
  ADD_PRODUCT,
  ADD_CAROUSEL,
} from "../constants/ActionsType";

const initialStateUser = {
  isLoggedIn: false,
  name: "",
  admins: [],
  products: [],
  newProducts: [],
  carousel: [],
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
        carousel: [...state.carousel, ...action.newProduct],
      };

    default:
      return state;
  }
}

export default userReducer;
