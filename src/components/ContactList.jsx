import React from "react";
import Avatar from "react-avatar";

function ContactList({ contact }) {
  return (
    <tr>
      <th scope="row">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
      </th>
      <td>
        <Avatar name={contact.contact.name} size="45" round={true} />{" "}
        {contact.contact.name}
      </td>
      <td className="list_detail">{contact.contact.email}</td>
      <td className="list_detail">{contact.contact.number}</td>
      <td className="action list_detail">
        <i className="fas fa-edit px-2"></i>
        <i className="fas fa-trash-alt px-2 text-danger"></i>
      </td>
    </tr>
  );
}

export default ContactList;
