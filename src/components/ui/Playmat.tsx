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
  opacity: string;
}

const Playmat: React.FC<PlaymatProps> = ({ playerStats, opacity }) => {
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
    <div className="h-full w-full relative bg-blue-500">
      <PlaymatHeader player={playerStats.name} opacity={opacity} />
      <div className="grid grid-cols-3 h-full">
        <div
          className="grid-span-1 p-10 h-full w-full flex justify-center items-center"
          onClick={handleLifeLoss}
        >
          -
        </div>
        <div className="grid-span-1 w-full flex justify-center items-center text-6xl">
          {playerStats.lifeTotal}
        </div>
        <div
          className="grid-span-1 w-full h-full p-10 flex justify-center items-center"
          onClick={handleLifeGain}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Playmat;
