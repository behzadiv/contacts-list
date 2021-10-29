import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./AddContactForm.css";
const AddContact = ({ addContact, history }) => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [contact, setContact] = useState({ name: "", email: "" });
  const nameChangeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
    //console.log(e.target.value);
    setInputName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
    setInputEmail(e.target.value);
  };
  const addContactHandler = (e) => {
    e.preventDefault();
    addContact(contact);
    history.push("/");
  };

  return (
    <div className="form">
      <form onSubmit={addContactHandler}>
        <h2>Add Contact</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            placeholder="Name..."
            name="name"
            value={inputName}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            onChange={emailChangeHandler}
            placeholder="Email..."
            name="email"
            value={inputEmail}
          />
        </div>
        <div className="myButtons">
          <button type="submit">Add</button>
          <Link to="/">
            <button className="backBtn">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
