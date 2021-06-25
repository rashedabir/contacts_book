import React from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContactAction } from "../actions/createContactAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactList({ contact, selectAll }) {
  const dispatch = useDispatch();
  const deleteContact = () => {
    if (window.confirm("want to delete this contact")) {
      dispatch(deleteContactAction(contact.id));
      toast.error("Deleted");
    }
  };

  return (
    <>
      <ToastContainer />
      <tr>
        <th scope="row">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            checked={selectAll}
          />
        </th>
        <td>
          <Avatar name={contact.contact.name} size="40" round={true} />{" "}
          {contact.contact.name}
        </td>
        <td className="list_detail">{contact.contact.email}</td>
        <td className="list_detail">{contact.contact.number}</td>
        <td className="action list_detail" style={{ textAlign: "right" }}>
          <Link to={`/edit/${contact.id}`}>
            <i className="fas fa-edit px-2"></i>
          </Link>
        </td>
        <td className="action list_detail">
          <i
            onClick={deleteContact}
            className="fas fa-trash-alt px-2 text-danger"
          ></i>
        </td>
      </tr>
    </>
  );
}

export default ContactList;
