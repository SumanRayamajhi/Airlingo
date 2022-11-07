import { GoogleLogout } from "react-google-login";

const clientId =
  "105326754209-e02pui1mlhb6u0ud4v0g3itvr5iip624.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = (res) => {
    console.log("Logout Success!");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
