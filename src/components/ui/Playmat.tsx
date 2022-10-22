import { useDispatch } from "react-redux";
import {
  increasePlayerOneHealth,
  decreasePlayerOneHealth,
} from "../../app/commander/PlayerOneSlice";
import {
  increasePlayerTwoHealth,
  decreasePlayerTwoHealth,
} from "../../app/commander/PlayerTwoSlice";
import {
  increasePlayerThreeHealth,
  decreasePlayerThreeHealth,
} from "../../app/commander/PlayerThreeSlice";
import {
  increasePlayerFourHealth,
  decreasePlayerFourHealth,
} from "../../app/commander/PlayerFourSlice";
import PlaymatHeader from "./PlaymatHeader";

interface PlaymatProps {
  playerStats: {
    name: string;
    lifeTotal: number;
    poisonTotal: number;
    commanderDamage: number;
    commander: string;
  };
}

const Playmat: React.FC<PlaymatProps> = ({ playerStats }) => {
  const dispatch = useDispatch();

  const handleLifeGain = () => {
    switch (playerStats.name) {
      case "PlayerOne":
        dispatch(increasePlayerOneHealth());
        break;
      case "PlayerTwo":
        dispatch(increasePlayerTwoHealth());
        break;
      case "PlayerThree":
        dispatch(increasePlayerThreeHealth());
        break;
      case "PlayerFour":
        dispatch(increasePlayerFourHealth());
        break;
      default:
        console.log("There is an error...");
    }
  };

  const handleLifeLoss = () => {
    switch (playerStats.name) {
      case "PlayerOne":
        dispatch(decreasePlayerOneHealth());
        break;
      case "PlayerTwo":
        dispatch(decreasePlayerTwoHealth());
        break;
      case "PlayerThree":
        dispatch(decreasePlayerThreeHealth());
        break;
      case "PlayerFour":
        dispatch(decreasePlayerFourHealth());
        break;
      default:
        console.log("There is an error...");
    }
  };

  return (
    <div className="h-full relative">
      <PlaymatHeader player={playerStats.name} />
      <div className="grid place-content-center h-full">
        <span onClick={handleLifeLoss}>-</span>
        <span>{playerStats.lifeTotal}</span>
        <span onClick={handleLifeGain}>+</span>
      </div>
    </div>
  );
};

export default Playmat;
