import { useContext } from "react";
import { UserContext } from "C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/alx-react-app-props/src/components/UserContext";

function UserDetails() {
const userData = useContext(UserContext);
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;