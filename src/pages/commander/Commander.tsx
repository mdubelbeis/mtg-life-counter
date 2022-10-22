import { Link } from "react-router-dom";

const Commander: React.FC = () => {
  return (
    <>
      <div>COMMANDER</div>
      CHOOSE YOUR OPTION{" "}
      <ul>
        <Link to="two-players">
          <li>Two Players</li>
        </Link>
        <Link to="three-players">
          <li>Three Players</li>
        </Link>
        <Link to="four-players">
          <li>Four Players</li>
        </Link>
      </ul>
    </>
  );
};

export default Commander;
