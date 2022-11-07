import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    navigate("/userProfile");

    localStorage.setItem(
      "airlingo_access_token",
      res.getAuthResponse().access_token
    );
  };

  const onFailure = (res) => {
    console.log("Login Failed!");
    console.log(JSON.stringify(res));
  };
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
