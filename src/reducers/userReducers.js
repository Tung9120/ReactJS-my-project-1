import { LOGIN, ADD_ADMIN } from "../constants/ActionsType";

const initialStateUser = {
  isLoggedIn: false,
  name: "",
  admins: [],
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
        admins: [...state.admins, action.newAdmin]
      };

    default:
      return state;
  }
}

export default userReducer;
