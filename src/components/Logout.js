import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { AIRLINGO_ACCESS_TOKEN } from "../constants/contants";

const Logout = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    localStorage.removeItem(AIRLINGO_ACCESS_TOKEN);
    navigate("/");
  };

  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
