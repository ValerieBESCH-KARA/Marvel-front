import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const SignupPage = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !username || !password) {
      setErrorMessage("Veuillez remplir tous les champs !");
    } else {
      try {
        const { data } = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            email,
            username,
            password,
            newsletter,
          }
        );
        console.log("data signup>>>", data);

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
    <main>
      <div className="container signup-bloc">
        <h1>S'inscrire</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="form-bloc"
            type="text"
            name="username"
            id="username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(event) => {
              setErrorMessage("");
              setUsername(event.target.value);
            }}
          />

          <input
            className="form-bloc"
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

          <input
            className="form-bloc"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setErrorMessage("");
              setPassword(event.target.value);
            }}
          />

          <button>S'inscrire</button>

          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
    </main>
  );
};

export default SignupPage;
