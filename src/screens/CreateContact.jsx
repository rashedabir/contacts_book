import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createContactAction,
  updateContactAction,
} from "../actions/createContactAction";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [uid, setId] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((state) => state.contacts.list);
  const currentContact = state.find((contact) => contact.id === id);

  const saveList = (e) => {
    e.preventDefault();
    const contact = {
      name: name,
      email: email,
      number: number,
    };
    if (currentContact) {
      dispatch(updateContactAction(uid, contact));
      setName("");
      setEmail("");
      setNumber("");
      toast.warning("Contact Updated");
    } else {
      dispatch(createContactAction(contact));
      setName("");
      setEmail("");
      setNumber("");
      toast.success("Contact Added");
    }
  };

  useEffect(() => {
    if (currentContact) {
      setId(currentContact.id);
      setName(currentContact.contact.name);
      setEmail(currentContact.contact.email);
      setNumber(currentContact.contact.number);
    }
  }, [currentContact]);

  return (
    <div className="container py-3 create_contact">
      <ToastContainer />
      <h4 className="m-3 text-capitalize">create a contact</h4>
      <form onSubmit={saveList} className="border p-3">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label for="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            value={email}
            placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            value={number}
            placeholder="Number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <label for="floatingInput">Mobile Number</label>
        </div>
        {currentContact ? (
          <button type="submit" className="btn btn-success mt-2">
            <i className="fas fa-save"></i> update
          </button>
        ) : (
          <button type="submit" className="btn btn-success mt-2">
            <i className="fas fa-save"></i> save
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateContact;
