import { GoogleLogin } from "react-google-login";

const clientId =
  "105326754209-e02pui1mlhb6u0ud4v0g3itvr5iip624.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (res) => {
    console.log("Login Success! Current user: ", res.profileObj);
  };

  const onFailure = () => {
    console.log("Login Failed!");
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
