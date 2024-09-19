import UserItem from "./UserItem";
import { propTypes } from "prop-types";

const Contacts = (props) => {
  // console.log(props);
  return (
    <div>
      <div className="userList">
        <h1
          style={{
            background: "blue",
            color: "white",
            padding: "15px",
            margin: "5px",
          }}
        >
          Contacts Information
        </h1>
        {props.contacts.map((contact) => {
          return (
            <UserItem
              key={contact.id}
              contactDetails={contact}
              editContact={props.editContact}
              deleteContact={props.deleteContact}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;

// Contacts.propTypes = {
//   contacts: propTypes.shape({
//     contact: propTypes.func.isRequired,
//     map: propTypes.func.isRequired,
//   }).isRequired,
// };
