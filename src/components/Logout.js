import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const onSuccess = (res) => {
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
