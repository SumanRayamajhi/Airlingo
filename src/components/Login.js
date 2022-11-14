import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { AIRLINGO_ACCESS_TOKEN } from "../constants/contants";

const Login = () => {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    localStorage.setItem(
      AIRLINGO_ACCESS_TOKEN,
      res.getAuthResponse().access_token
    );
    navigate("/userProfile");
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
