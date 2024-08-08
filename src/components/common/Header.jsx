import { Link } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <Link to="/" activeStyle={activeStyle} exact>
        Home
      </Link>
      {" | "}
      <Link to="/courses" activeStyle={activeStyle}>
        Courses
      </Link>
      {" | "}
      <Link to="/about" activeStyle={activeStyle}>
        About
      </Link>
    </nav>
  );
};

export default Header;
