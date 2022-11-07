import { useEffect } from "react";
import { gapi } from "gapi-script";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import "./App.css";

const clientId =
  "105326754209-e02pui1mlhb6u0ud4v0g3itvr5iip624.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
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
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/userProfile" element={<UserProfile />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
