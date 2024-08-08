import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Pluralsight Administration</h1>
      <p>React, Redux and React Router for ultra-responsive web apps.</p>
      <Link to="about">Learn more</Link>
    </div>
  );
};

export default HomePage;
