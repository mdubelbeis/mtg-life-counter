import { useDispatch } from "react-redux";

import {
  incrementPlayerOneHealth,
  decrementPlayerOneHealth,
} from "../../app/commander/PlayerOneSlice";
import {
  incrementPlayerTwoHealth,
  decrementPlayerTwoHealth,
} from "../../app/commander/PlayerTwoSlice";
import {
  incrementPlayerThreeHealth,
  decrementPlayerThreeHealth,
} from "../../app/commander/PlayerThreeSlice";
import {
  incrementPlayerFourHealth,
  decrementPlayerFourHealth,
} from "../../app/commander/PlayerFourSlice";

interface ScoreboardProps {
  playerStats: {
    name: string;
    lifeTotal: number;
    poisonTotal: number;
    commanderDamage: number;
    commander: string;
  };
}

const Scoreboard: React.FC<ScoreboardProps> = ({ playerStats }) => {
  const dispatch = useDispatch();

  const handleLifeGain = () => {
    switch (playerStats.name) {
      case "PlayerOne":
        dispatch(incrementPlayerOneHealth());
        break;
      case "PlayerTwo":
        dispatch(incrementPlayerTwoHealth());
        break;
      case "PlayerThree":
        dispatch(incrementPlayerThreeHealth());
        break;
      case "PlayerFour":
        dispatch(incrementPlayerFourHealth());
        break;
      default:
        console.log("There is an error...");
    }
  };

  const handleLifeLoss = () => {
    switch (playerStats.name) {
      case "PlayerOne":
        dispatch(decrementPlayerOneHealth());
        break;
      case "PlayerTwo":
        dispatch(decrementPlayerTwoHealth());
        break;
      case "PlayerThree":
        dispatch(decrementPlayerThreeHealth());
        break;
      case "PlayerFour":
        dispatch(decrementPlayerFourHealth());
        break;
      default:
        console.log("There is an error...");
    }
  };
  return (
    <div className="flex flex-col gap-10 w-full justify-center items-center">
      <div className="w-full flex text-center justify-center items-center text-9xl">
        <div
          className={`grid-span-1 h-full py-32 w-full flex justify-center items-center text-4xl rounded active:bg-opacity-50 text-opacity-100`}
          onClick={handleLifeLoss}
        >
          <span>-</span>
        </div>
        <h2>{playerStats.lifeTotal}</h2>
        <div
          className={`grid-span-1 w-full h-full py-32 flex justify-center items-center text-4xl rounded active:bg-opacity-50 text-opacity-100`}
          onClick={handleLifeGain}
        >
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
