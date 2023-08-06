import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
import Cookies from "js-cookie";

import "../styles/signupPage.css";

const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  console.log("location login =>", location.state?.from);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("Veuillez remplir tous les champs !");
    } else {
      try {
        const { data } = await axios.post(
          "https://site--marvel-backend--4j598vz4fhlc.code.run/login",
          {
            email,
            password,
          }
        );

        // console.log(data.token);
        Cookies.set("token", data.token);
        setToken(data.token);
        // console.log("token loginPage>>>", data.token);
        if (location.state) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log("error catch LoginPage>>", error);
      }
    }
  };

  return (
    <main className="signup-page">
      <div className="container signup-bloc">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-bloc">
            <label htmlFor="email">Email : </label>
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
            <label htmlFor="password">Password : </label>
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

          <button>Se connecter</button>

          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
