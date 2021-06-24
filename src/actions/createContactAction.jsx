import { CREATE_CONTACT } from "../context/contactContext";

export const createContactAction = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: {
      id: new Date().getTime().toString(),
      contact: contact,
    },
  };
};
