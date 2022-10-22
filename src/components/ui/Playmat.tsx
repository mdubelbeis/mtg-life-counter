import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
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
    playerStats.name === "PlayerOne"
      ? dispatch(decreasePlayerOneHealth())
      : dispatch(decreasePlayerTwoHealth());
  };

  return (
    <div>
      <div></div>
      <span onClick={handleLifeLoss}>-</span>
      <span>{playerStats.lifeTotal}</span>
      <span onClick={handleLifeGain}>+</span>
    </div>
  );
};

export default Playmat;
