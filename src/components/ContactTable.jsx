import React from "react";
import ContactList from "./ContactList";

function ContactTable({ state }) {
  return (
    <div className="table-responsive">
      <table className="table shadow bg-light">
        <thead>
          <tr>
            <th scope="col">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
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
            : state.map((contact) => <ContactList contact={contact} />)}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
