import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

// const passwordRegex = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$";

const Register = () => {
  const userRef = useRef();

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
    e.preventDefault();
    const { name, email, password } = inputValue;
    if (name === "") {
      alert("Username field is empty!");
    } else if (email === "") {
      alert("Email field is empty!");
    } else if (password === "") {
      alert("Password field is empty!");
    } else if (password.length < 5) {
      alert("Password length is less then 5!");
    } else {
      alert("Registered successfully!");
      localStorage.setItem("user", JSON.stringify([inputValue]));
    }
  };

  return (
    <section>
      <h1>Register:</h1>
      <form className="register">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="name"
          onChange={getData}
          ref={userRef}
          autoComplete="off"
          required
        />
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
        <button onClick={addData}> Register</button>
      </form>
      <p>
        Already have account?{" "}
        <span>
          <Link to="/">Login</Link>
        </span>
      </p>
    </section>
  );
};

export default Register;
