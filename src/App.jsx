import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import HomePage from "./Pages/HomePage";
import CharactersPage from "./Pages/CharactersPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComicsPage from "./Pages/ComicsPage";
import CharactersCommicsPage from "./Pages/CharactersComicsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/characterComics" element={<CharactersCommicsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
