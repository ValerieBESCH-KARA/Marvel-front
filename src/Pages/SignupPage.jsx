import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import "../styles/signupPage.css";

const SignupPage = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !username || !password || !confirmPassword) {
      return setErrorMessage("Veuillez remplir tous les champs !");
    } else {
      try {
        const response = await axios.post(
          "https://site--marvel-backend--4j598vz4fhlc.code.run/signup",
          {
            email,
            username,
            password,
            confirmPassword,
          }
        );

        console.log("data signup>>>", response.data);

        const token = response.data.token;
        console.log("token signupPage>>>", token);

        Cookies.set("token", data.token);
        setToken(data.token);
        navigate("/");
      } catch (error) {
        console.log("error catch SignupPage>>>", error);
        setErrorMessage("Désolé, une erreur est survenue !");
      }
    }
  };

  return (
    <main className="signup-page">
      <div className="container signup-bloc">
        <h1>Sign up !</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-bloc">
            <label htmlFor="username">Nom : </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(event) => {
                setErrorMessage("");
                setUsername(event.target.value);
              }}
            />
          </div>

          <div className="form-bloc">
            <label htmlFor="email"> Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setErrorMessage("");
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="form-bloc">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setErrorMessage("");
                setPassword(event.target.value);
              }}
            />
          </div>

          <div className="form-bloc">
            <label htmlFor="confirmPassword">Confirm password : </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => {
                setErrorMessage("");
                setConfirmPassword(event.target.value);
              }}
            />
          </div>

          <button>Login</button>

          {errorMessage && <p>{errorMessage}</p>}

          <div>
            <span
              className="connect-here"
              onClick={() => {
                navigate("/login");
              }}
            >
              Already have an account? Click here to login!
            </span>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignupPage;
