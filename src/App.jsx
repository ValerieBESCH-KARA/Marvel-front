import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

import "./styles/App.css";

import HomePage from "./Pages/HomePage";
import CharactersPage from "./Pages/CharactersPage";
import ComicsPage from "./Pages/ComicsPage";
import CharactersCommicsPage from "./Pages/CharactersComicsPage";
import FavorisPage from "./Pages/FavorisPage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || "");

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/characterComics" element={<CharactersCommicsPage />} />
        <Route path="/favoris" element={<FavorisPage />} />
        <Route
          path="/signup"
          element={<SignupPage token={token} setToken={setToken} />}
        />
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
