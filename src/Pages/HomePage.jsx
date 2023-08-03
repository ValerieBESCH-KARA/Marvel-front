import Comics from "../assets/Logo.png";
import "../styles/homePage.css";

const HomePage = () => {
  return (
    <main>
      <div className="homePage">
        <img src={Comics} alt="super-heros marvel" />
      </div>
    </main>
  );
};

export default HomePage;
