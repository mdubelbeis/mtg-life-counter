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
    bgColor: string;
    textColor: string;
  };
  opacity: string;
}

const Playmat: React.FC<PlaymatProps> = ({ playerStats, opacity }) => {
  const text = playerStats.bgColor === "bg-black" ? "text-white" : "text-black";
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
    <div
      className={`h-full flex w-full relative ${playerStats.bgColor} p-2 border-[0.25px]`}
    >
      <PlaymatHeader player={playerStats.name} opacity={opacity} />
      <div className="flex flex-col gap-10 w-full justify-center items-center">
        <div className="w-full text-center text-8xl">
          {playerStats.lifeTotal}
        </div>
        <div className="flex">
          <div
            className={`grid-span-1 py-10 px-8 h-full w-full flex justify-center items-center text-4xl active:bg-${playerStats.bgColor}-600 rounded active:bg-opacity-50 text-opacity-100`}
            onClick={handleLifeLoss}
          >
            <span className="">-</span>
          </div>
          <div
            className={`grid-span-1 py-10 px-8 w-full h-full flex justify-center items-center text-4xl active:bg-${playerStats.bgColor}-600 rounded active:bg-opacity-50 text-opacity-100`}
            onClick={handleLifeGain}
          >
            <span className="">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playmat;
