import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  const logoutAction = () => {};

  return (
    <nav className="header-background">
      <h1 className="heading">Finanacepeer</h1>
      <Link className="link-style" to="/display">
        {" "}
        <p>Display</p>{" "}
      </Link>
      <button onClick={logoutAction} type="button" className="logout-btn">
        Logout
      </button>
    </nav>
  );
};

export default Header;
