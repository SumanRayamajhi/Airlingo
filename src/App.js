import { useEffect } from "react";
import { gapi } from "gapi-script";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home Login={Login} />}></Route>
          <Route exact path="/userProfile" element={<UserProfile />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
