import "./index.css";

const Header = () => {
  const logoutAction = () => {};

  return (
    <nav className="header-background">
      <h1 className="heading">Finanacepeer</h1>

      <button onClick={logoutAction} type="button" className="logout-btn">
        Logout
      </button>
    </nav>
  );
};

export default Header;
