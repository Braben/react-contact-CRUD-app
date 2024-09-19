import { useState } from "react";
import { propTypes } from "prop-types";
import { v4 as uuid } from "uuid"; //add uuid packages - yarn add uuid

function ContactsForm(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setlocation] = useState("");

  //this is for the handle email input funtion
  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleLocation = (e) => {
    setlocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.length > 0 && email.length > 0) {
      let newContact = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        location: location,
        id: uuid(),
      };

      props.addContact(newContact);
      //THIS CLEARS THE INPUT ON SUBMIT
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setlocation("");
    }
  };
  return (
    <div>
      <div className="form">
        <h1
          style={{
            background: "blue",
            color: "white",
            padding: "15px",
            margin: "5px",
          }}
        >
          Enter Information
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              value={fullName}
              onChange={handleFullName}
              className="fname"
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              value={phoneNumber}
              onChange={handlePhone}
              className="fname"
              type="number"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <input
              value={email}
              onChange={handleEmail}
              className="mail"
              type="email"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              type="text"
              className="mail"
              value={location}
              onChange={handleLocation}
              placeholder="Location"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default ContactsForm;

// ContactsForm.propTypes = {
//   addcontact: propTypes.shape({
//     contacts: propTypes.string.isRequired,
//   }).isRequired,
// };
