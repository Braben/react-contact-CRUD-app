//import React from "react";
import { propTypes } from "prop-types";
import { useState } from "react";

function UserItem(props, editUser) {
  const [fullName, setFullName] = useState(props.contactDetails.fullName);
  const [email, setEmail] = useState(props.contactDetails.email);
  const [phoneNumber, setPhoneNumber] = useState(
    props.contactDetails.phoneNumber
  );
  const [location, setlocation] = useState(props.contactDetails.location);

  //console.log(props);
  // if (!show) return null; // Return null if modal is not supposed to be shown

  const [showModal, setShowModal] = useState(false);

  const handleModalState = () => {
    setShowModal(!showModal);
  };

  //console.log(showModal);
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

  // const handleUpdatebutton = () => {
  // e.preventDefault();
  //   let updatedDetails = {
  //     fullName: fullName,
  //     email: email,
  //   };
  //   props.editContact(props.contactDetails.id, updatedDetails);
  // };

  const handleUpdateButton = (e) => {
    e.preventDefault();

    let newEditedDetails = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      location: location,
    };
    //This newcontactdetails variable merges the old and new contact details
    let updatedContactDetails = {
      ...props.contactDetails,
      ...newEditedDetails,
    };

    props.editContact(props.contactDetails.id, updatedContactDetails);
    handleModalState();
  };

  return (
    <div className="userItem">
      <h1>Name: {props.contactDetails.fullName}</h1>
      <h1>Email: {props.contactDetails.email}</h1>
      <h1>Phone: {props.contactDetails.phoneNumber}</h1>
      <h1>Location: {props.contactDetails.location}</h1>

      <button onClick={handleModalState}>edit</button>
      <button onClick={() => props.deleteContact(props.contactDetails.id)}>
        delete
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalState}>
              &times;
            </span>
            <h2>Update Contact Details</h2>

            <form>
              <div>
                <input
                  value={fullName}
                  onChange={handleFullName}
                  className="fname"
                  type="text"
                  placeholder="FullName"
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

              <button onClick={handleUpdateButton}>Save Chnages</button>
              <button onClick={handleModalState}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserItem;
// UserItem.propTypes = {
//   contactDetails: propTypes.shape({
//     fullName: propTypes.string.isRequired,
//     email: propTypes.string.isRequired,
//     phoneNumber: propTypes.string.isRequired,
//     location: propTypes.string.isRequired,
//   }).isRequired,
// };
