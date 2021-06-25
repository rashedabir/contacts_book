import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSelectedContacts } from "../actions/createContactAction";
import ContactTable from "../components/ContactTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactList() {
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.contacts.list);
  const selectedContacts = useSelector(
    (state) => state.contacts.selectedContacts
  );

  const allSelect = () => {
    setSelectAll(!selectAll);
  };

  const deleteAll = () => {
    if (window.confirm("Do you want Delete all contacts?")) {
      dispatch(deleteSelectedContacts());
      toast.error("Deleted All Contacts");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container list py-5">
        <div className="heading mb-4">
          <h3>contact list</h3>
          {selectedContacts.length > 0 ? (
            <button onClick={deleteAll} className="btn btn-danger">
              delete all
            </button>
          ) : null}
        </div>
        <ContactTable
          selectAll={selectAll}
          allSelect={allSelect}
          state={state}
        />
      </div>
    </>
  );
}

export default ContactList;
