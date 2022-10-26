import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoRefresh } from "react-icons/io5";

const handleRefreshGame = () => {
  console.log("Refresh game");
};

const PlaymatHeaderNav: React.FC = () => {
  return (
    <nav>
      <div className="absolute top-4 left-6" onClick={handleRefreshGame}>
        <IoRefresh className="w-10 h-10 hover:cursor-pointer" />
      </div>
      <div className="absolute top-4 right-6">
        <Link to="/">
          <BiHome className="w-10 h-10" />
        </Link>
      </div>
    </nav>
  );
};

export default PlaymatHeaderNav;
