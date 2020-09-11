import {
  LOGIN,
  ADD_ADMIN,
  ADD_PRODUCT,
  ADD_CAROUSEL,
  ADD_TOP_CARDS,
  ADD_TOP_SELLING,
  ADD_TOP_NEW,
  UPATE_PRODUCT,
  DELETE_PRODUCT
} from "../constants/ActionsType";

const initialStateUser = {
  isLoggedIn: false,
  name: "",
  admins: [],
  products: [],
  newProducts: [],
  carousel: [],
  topCards: [],
  topSelling: [],
  topNew: [],
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
      };

    case ADD_TOP_SELLING:
      return {
        ...state,
        topSelling: [...action.newTopSelling],
      };

    case ADD_TOP_NEW: {
      return {
        ...state,
        topNew: [...action.topNewProducts],
      };
    }

    case UPATE_PRODUCT: {
      const { productUpdated } = action;
      const {products} = state;

      let index;

      for(let i = 0; i < products.length; i++){
        if(products[i].key === productUpdated.key){
          index = i;
          break;
        }
      }

      return {
        ...state,
        products: [
          ...state.products.slice(0, index),
          productUpdated,
          ...state.products.slice(index + 1),
        ],
      };
    }

    case DELETE_PRODUCT: {
      const { productDeleted } = action;
      const {products} = state;

      let index;

      for(let i = 0; i < products.length; i++){
        if(products[i].key === productDeleted.key){
          index = i;
          break;
        }
      }

      return {
        ...state,
        products: [
          ...state.products.slice(0, index),
          ...state.products.slice(index + 1),
        ],
      };
    }

    default:
      return state;
  }
}

export default userReducer;
