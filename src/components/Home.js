// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import Login from "./Login";

// import "./Home.css";

// // const passwordRegex = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$";

// const Home = () => {
//   const userRef = useRef();
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   return (
//     <section>
//       <h1>Welcome</h1>
//       <form className="form">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="text"
//           name="email"
//           ref={userRef}
//           autoComplete="off"
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <label htmlFor="username">Password:</label>
//         <input
//           type="text"
//           id="password"
//           ref={userRef}
//           autoComplete="off"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button> Sign In</button>
//         <p>or connect with</p>
//         <Login />
//       </form>
//       <div>
//         <p>New to Airlingo?</p>
//         <Link to="/register" style={{ textDecoration: "none" }}>
//           Register here!
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Home;

import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Home = () => {
  const userRef = useRef();
  const history = useNavigate();

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const getData = (e) => {
    const { value, name } = e.target;
    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    const getUserData = localStorage.getItem("user");

    e.preventDefault();
    const { email, password } = inputValue;
    if (email === "") {
      alert("Email field is empty!");
    } else if (password === "") {
      alert("Password field is empty!");
    } else if (password.length < 5) {
      alert("Password length is less then 5!");
    } else {
      if (getUserData && getUserData.length) {
        const userData = JSON.parse(getUserData);
        const userLogin = userData.filter((e) => {
          return e.email === email && e.password === password;
        });
        if (userLogin.length === 0) {
          alert("jjjj");
        } else {
          console.log(userLogin);
          history("/UserProfile");
        }
      }
    }
  };

  return (
    <section>
      <h1>Register:</h1>
      <form className="register">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          ref={userRef}
          autoComplete="off"
          onChange={getData}
          required
        />
        <label htmlFor="username">Password:</label>
        <input
          type="text"
          name="password"
          ref={userRef}
          autoComplete="off"
          onChange={getData}
          required
        />
        <button onClick={addData}>
          <span>login</span>
        </button>
      </form>
      <p>New to Airlingo?</p>
      <Link to="/register" style={{ textDecoration: "none" }}>
        Register here!
      </Link>
    </section>
  );
};

export default Home;
