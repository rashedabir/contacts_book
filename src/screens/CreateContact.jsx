import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createContactAction } from "../actions/createContactAction";
import { useHistory } from "react-router-dom";

function CreateContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const saveList = (e) => {
    e.preventDefault();
    const contact = {
      name: name,
      email: email,
      number: number,
    };
    dispatch(createContactAction(contact));
    setName("");
    setEmail("");
    setNumber("");
    history.push("/");
  };

  return (
    <div className="container py-3 create_contact">
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
        <button type="submit" className="btn btn-success mt-2">
          <i className="fas fa-save"></i> save
        </button>
      </form>
    </div>
  );
}

export default CreateContact;
