import {
  CLEAR_CONTACT,
  CREATE_CONTACT,
  DELETE_CONTACT,
  DELETE_SELECTED_CONTACT,
  SELECT_CONTACT,
  UPDATE_CONTACT,
} from "../context/contactContext";

const initialState = {
  list: [],
  selectedContacts: [],
};

export const createContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      const { id, contact } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            contact: contact,
          },
        ],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        list: state.list.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        list: state.list.filter((contact) => contact.id !== action.payload),
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload,
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
