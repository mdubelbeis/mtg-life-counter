import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  // * SELECTION FOR EITHER COMMANDER OR STANDARD
  return (
    <>
      <div>LOGO</div>
      <div>
        CHOOSE YOUR OPTION{" "}
        <ul>
          <Link to="commander">
            <li>Commander</li>
          </Link>
          <Link to="standard">
            <li>Standard</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
