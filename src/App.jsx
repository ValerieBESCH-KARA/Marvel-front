import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import HomePage from "./Pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
