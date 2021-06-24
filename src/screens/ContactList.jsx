import React from "react";
import { useSelector } from "react-redux";
import ContactTable from "../components/ContactTable"

function ContactList() {
  const state = useSelector((state) => state.contacts.list);

  return (
    <div className="container list py-5">
      <ContactTable state={state} />
    </div>
  );
}

export default ContactList;
