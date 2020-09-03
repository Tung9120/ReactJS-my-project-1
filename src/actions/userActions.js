import apis from "../apis";
import {
  LOGIN,
  ADD_ADMIN,
  ADD_PRODUCT,
  ADD_CAROUSEL,
} from "../constants/ActionsType";
import jwtDecode from "jwt-decode";

export const login = (data) => (dispatch) => {
  return apis.login(data).then((res) => {
    if (res.data.token !== "") {
      const userData = jwtDecode(res.data.token);
      dispatch({ type: LOGIN, payload: { name: userData.username } });
      localStorage.setItem("token", res.data.token);
    }
    return res;
  });
};

export const addAdmin = (data) => (dispatch) => {
  dispatch({ type: ADD_ADMIN, newAdmin: data });
};

export const addProduct = (data) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT, newProduct: data });
};

export const addCarousel = (data) => (dispatch) => {
  dispatch({ type: ADD_CAROUSEL, newElement: data });
};
