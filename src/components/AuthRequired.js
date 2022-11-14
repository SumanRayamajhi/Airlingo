import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API_URL } from "../constants/contants";
import { useAuthContextProvider } from "../context/AuthContext";

const AuthRequired = ({ children }) => {
  let auth = useAuthContextProvider();
  let location = useLocation();
  //const [airlingoValues, setAirlingoValues] = useState([]);

  const fetchAirlingoValues = async () => {
    const response = await fetch(API_URL);
    const airlingoDatas = await response.json();
    console.log(airlingoDatas);
  };

  useEffect(() => {
    fetchAirlingoValues();
  }, []);

  if (!auth.user) {
    return <navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default AuthRequired;
