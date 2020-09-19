import {
  LOGIN,
  ADD_ADMIN,
  ADD_PRODUCT,
  ADD_CAROUSEL,
  ADD_TOP_CARDS,
  ADD_TOP_SELLING,
  ADD_TOP_NEW,
  UPATE_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCT,
  ADD_TO_CART,
  CHANGE_QUANTITY,
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
  productsSelect: [],
  searchProductText: null,
  cart: [],
  orders: [],
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
      const { products } = state;

      let index;

      for (let i = 0; i < products.length; i++) {
        if (products[i].key === productUpdated.key) {
          index = i;
          break;
        }
      }

      return {
        ...state,
        products: [
          ...state.products.slice(0, index),
          { ...productUpdated },
          ...state.products.slice(index + 1),
        ],
      };
    }

    case DELETE_PRODUCT: {
      const { productDeleted } = action;
      const { products } = state;

      let index;

      for (let i = 0; i < products.length; i++) {
        if (products[i].key === productDeleted.key) {
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

    case SEARCH_PRODUCT: {
      const { products } = state;
      state.searchProductText = action.searchProductText;
      let matchedProducts;
      if (products.length === 0 && state.searchProductText === "") return;
      if (products.length > 0 && state.searchProductText === "") {
        return {
          ...state,
        };
      }
      matchedProducts = products.filter((item) => {
        return (
          item.name
            .toLowerCase()
            .indexOf(state.searchProductText.toLowerCase()) !== -1
        );
      });
      if (matchedProducts.length === 0) {
        return {
          ...state,
          productsSelect: [],
        };
      } else {
        return {
          ...state,
          productsSelect: [...matchedProducts],
        };
      }
    }

    case ADD_TO_CART: {
      const { cart } = state;
      const { productInCart } = action;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.key === productInCart.product.key) {
          return {
            ...state,
            cart: [
              ...cart.slice(0, i),
              { ...cart[i], quantity: cart[i].quantity + 1 },
              ...cart.slice(i + 1),
            ],
          };
        }
      }

      return {
        ...state,
        cart: [...cart, productInCart],
      };
    }

    case CHANGE_QUANTITY: {
      const { cart } = state;
      const { newProductInCart } = action;
      let index;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].key === newProductInCart.key) {
          index = i;
          break;
        }
      }

      if (newProductInCart.quantity === 0) {
        return {
          ...state,
          cart: [...cart.slice(0, index), ...cart.slice(index + 1)],
        };
      }

      return {
        ...state,
        cart: [
          ...cart.slice(0, index),
          { ...newProductInCart },
          ...cart.slice(index + 1),
        ],
      };
    }

    default:
      return state;
  }
}

export default userReducer;
