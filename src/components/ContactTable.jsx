import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllContact, selectAllContact } from "../actions/createContactAction";
import ContactList from "./ContactList";

function ContactTable({ state, allSelect, selectAll }) {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.list);

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    }else{
      dispatch(clearAllContact())
    }
  }, [selectAll, dispatch, contacts]);

  return (
    <div className="table-responsive">
      <table className="table shadow bg-light">
        <thead>
          <tr>
            <th scope="col">
              <input
                className="form-check-input"
                type="checkbox"
                value={selectAll}
                onClick={() => {
                  allSelect();
                }}
                id="flexCheckDefault"
              />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(state).length === 0
            ? null
            : state.map((contact) => (
                <ContactList selectAll={selectAll} contact={contact} />
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
