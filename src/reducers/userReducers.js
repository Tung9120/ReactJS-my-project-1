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
  REMOVE_PRODUCT,
  ORDER,
  UPDATEBILL,
  REJECTBILL,
} from "../constants/ActionsType";

const initialStateUser = {
  isLoggedIn: false,
  name: "",
  admins: [],
  products: localStorage.getItem("products"),
  carousel: localStorage.getItem("carousel"),
  topCards: localStorage.getItem("topCards"),
  topSelling: localStorage.getItem("topSelling"),
  topNew: localStorage.getItem("topNew"),
  productsSelect: [],
  searchProductText: null,
  cart: [],
  bills: localStorage.getItem("bills"),
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

    case ADD_PRODUCT: {
      let { products } = state;
      const { newProduct } = action;
      if (products === null) {
        products = [];
        products.push(newProduct);
        localStorage.setItem("products", JSON.stringify(products));
      } else {
        products = JSON.parse(localStorage.getItem("products"));
        products = [newProduct, ...products];
        localStorage.setItem("products", JSON.stringify(products));
      }
      return {
        ...state,
        products: localStorage.getItem("products"),
      };
    }

    case ADD_CAROUSEL: {
      let { carousel } = state;
      const { newElement } = action;
      let keysInCarousel = newElement.reverse();

      if (carousel === null) {
        carousel = [];
        carousel = [...keysInCarousel];
        localStorage.setItem("carousel", JSON.stringify(carousel));
      } else {
        carousel = JSON.parse(localStorage.getItem("carousel"));
        carousel = [...keysInCarousel];
        localStorage.setItem("carousel", JSON.stringify(carousel));
      }

      return {
        ...state,
        carousel: localStorage.getItem("carousel"),
      };
    }

    case ADD_TOP_CARDS: {
      let { topCards } = state;
      const { newCard } = action;

      if (topCards === null) {
        topCards = [];
        topCards = [...newCard];
        localStorage.setItem("topCards", JSON.stringify(topCards));
      } else {
        topCards = JSON.parse(localStorage.getItem("topCards"));
        topCards = [...newCard];
        localStorage.setItem("topCards", JSON.stringify(topCards));
      }

      return {
        ...state,
        topCards: localStorage.getItem("topCards"),
      };
    }

    case ADD_TOP_SELLING: {
      let { topSelling } = state;
      const { newTopSelling } = action;

      if (topSelling === null) {
        topSelling = [];
        topSelling = [...newTopSelling];
        localStorage.setItem("topSelling", JSON.stringify(topSelling));
      } else {
        topSelling = JSON.parse(localStorage.getItem("topSelling"));
        topSelling = [...newTopSelling];
        localStorage.setItem("topSelling", JSON.stringify(topSelling));
      }

      return {
        ...state,
        topSelling: localStorage.getItem("topSelling"),
      };
    }

    case ADD_TOP_NEW: {
      let { topNew } = state;
      const { topNewProducts } = action;
      if (topNew === null) {
        topNew = [];
        topNew = [...topNewProducts];
        localStorage.setItem("topNew", JSON.stringify(topNew));
      } else {
        topNew = JSON.parse(localStorage.getItem("topNew"));
        topNew = [...topNewProducts];
        localStorage.setItem("topNew", JSON.stringify(topNew));
      }
      return {
        ...state,
        topNew: localStorage.getItem("topNew"),
      };
    }

    case UPATE_PRODUCT: {
      const { productUpdated } = action;
      const { products } = state;
      if (products === null) {
        return {
          ...state,
        };
      } else {
        let productData = JSON.parse(products);
        let index;

        for (let i = 0; i < productData.length; i++) {
          if (productData[i].key === productUpdated.key) {
            index = i;
            break;
          }
        }

        productData = [
          ...productData.slice(0, index),
          { ...productUpdated },
          ...productData.slice(index + 1),
        ];

        localStorage.setItem("products", JSON.stringify(productData));

        return {
          ...state,
          products: localStorage.getItem("products"),
        };
      }
    }

    case DELETE_PRODUCT: {
      const { productDeleted } = action;
      const { products } = state;

      if (products === null) {
        return {
          ...state,
        };
      } else {
        let productData = JSON.parse(products);
        let index;

        for (let i = 0; i < productData.length; i++) {
          if (productData[i].key === productDeleted.key) {
            index = i;
            break;
          }
        }

        productData = [
          ...productData.slice(0, index),
          ...productData.slice(index + 1),
        ];

        localStorage.setItem("products", JSON.stringify(productData));

        return {
          ...state,
          products: localStorage.getItem("products"),
        };
      }
    }

    case SEARCH_PRODUCT: {
      const { products } = state;
      const productData = JSON.parse(products);
      state.searchProductText = action.searchProductText;
      let matchedProducts;

      if (products.length === 0 && state.searchProductText === "") {
        return { ...state };
      }

      if (
        productData.length > 0 &&
        (state.searchProductText === "" || state.searchProductText === null)
      ) {
        return {
          ...state,
          productsSelect: [],
        };
      }

      matchedProducts = productData.filter((item) => {
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

    case REMOVE_PRODUCT: {
      const { cart } = state;
      const { productRemove } = action;
      let index;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].key === productRemove.key) {
          index = i;
          break;
        }
      }

      return {
        ...state,
        cart: [...cart.slice(0, index), ...cart.slice(index + 1)],
      };
    }

    case ORDER: {
      let { bills } = state;
      const { bill } = action;

      if (bills === null) {
        bills = [];
        bills.push(bill);
        localStorage.setItem("bills", JSON.stringify(bills));
      } else {
        bills = JSON.parse(localStorage.getItem("bills"));
        bills = [bill, ...bills];
        localStorage.setItem("bills", JSON.stringify(bills));
      }

      return {
        ...state,
        bills: localStorage.getItem("bills"),
        cart: [],
      };
    }

    case UPDATEBILL: {
      let { bills } = state;
      const { billUpdate } = action;

      if (bills === null) {
        return {
          ...state,
        };
      } else {
        let billData = JSON.parse(bills);
        let index;

        for (let i = 0; i < billData.length; i++) {
          if (billData[i].key === billUpdate.key) {
            index = i;
            break;
          }
        }

        billData = [
          ...billData.slice(0, index),
          { ...billUpdate, status: ["success"] },
          ...billData.slice(index + 1),
        ];

        localStorage.setItem("bills", JSON.stringify(billData));

        return {
          ...state,
          bills: localStorage.getItem("bills"),
        };
      }
    }

    default:
      return state;
  }
}

export default userReducer;
