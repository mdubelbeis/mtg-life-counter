import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoRefresh } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { resetPlayerOne } from "../../app/commander/PlayerOneSlice";
import { resetPlayerTwo } from "../../app/commander/PlayerTwoSlice";
import { resetPlayerThree } from "../../app/commander/PlayerThreeSlice";
import { resetPlayerFour } from "../../app/commander/PlayerFourSlice";

interface PlaymatHeaderNavProps {
  player: string;
}

const PlaymatHeaderNav: React.FC<PlaymatHeaderNavProps> = ({ player }) => {
  const dispatch = useDispatch();

  const handleRefreshGame = () => {
    switch (player) {
      case "PlayerOne":
        dispatch(resetPlayerOne());
        break;
      case "PlayerTwo":
        dispatch(resetPlayerTwo());
        break;
      case "PlayerThree":
        dispatch(resetPlayerThree());
        break;
      case "PlayerFour":
        dispatch(resetPlayerFour());
        break;
      default:
        console.log("There is an error...");
    }
  };

  return (
    <nav>
      <div className="absolute top-4 left-10" onClick={handleRefreshGame}>
        <IoRefresh className="w-10 h-10 hover:cursor-pointer" />
      </div>
      <div className="absolute top-4 right-10">
        <Link to="/">
          <BiHome className="w-10 h-10" />
        </Link>
      </div>
    </nav>
  );
};

export default PlaymatHeaderNav;
