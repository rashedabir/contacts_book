import { CREATE_CONTACT } from "../context/contactContext";

const initialState = {
  list: [],
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

    default:
      return state;
  }
};
