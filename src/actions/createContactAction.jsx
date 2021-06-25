import {
  CLEAR_CONTACT,
  CREATE_CONTACT,
  DELETE_CONTACT,
  DELETE_SELECTED_CONTACT,
  SELECT_CONTACT,
  UPDATE_CONTACT,
} from "../context/contactContext";

export const createContactAction = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: {
      id: new Date().getTime().toString(),
      contact: contact,
    },
  };
};

export const updateContactAction = (id, contact) => {
  return {
    type: UPDATE_CONTACT,
    payload: {
      id: id,
      contact: contact,
    },
  };
};

export const deleteContactAction = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const selectAllContact = (id) => {
  return {
    type: SELECT_CONTACT,
    payload: id,
  };
};

export const clearAllContact = () => {
  return {
    type: CLEAR_CONTACT,
  };
};

export const deleteSelectedContacts = () => {
  return {
    type: DELETE_SELECTED_CONTACT,
  };
};
