import { LOGIN } from "../constants/ActionsType";

const initialStateUser = {
  isLoggedIn: false,
  name: "",
};

function userReducer(state = initialStateUser, action = { payload: {} }) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        name: action.payload.name,
      };

    default:
      return state;
  }
}

export default userReducer;
