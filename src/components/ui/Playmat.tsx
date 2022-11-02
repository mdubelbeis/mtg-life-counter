import { useSelector, useDispatch } from "react-redux";
import PlaymatHeader from "./PlaymatHeader";

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
import { useState } from "react";

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
  const dispatch = useDispatch();
  const [bgColor, setBgColor] = useState<string>(playerStats.bgColor);

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
  console.log(`bg-[${playerStats.bgColor}]`); // THE COLOR CHANGE CAN BE SEEN HERE. Background color should reflect the input color option.
  console.log(`bg-[${bgColor}]`); // THE COLOR CHANGE CAN BE SEEN HERE. Background color should reflect the input color option.
  return (
    <div
      className={`h-full flex w-full relative bg-[${bgColor}] p-2 border-[0.25px]`}
    >
      <PlaymatHeader
        poisonDamage={playerStats.poisonTotal}
        commanderDamage={playerStats.commanderDamage}
        player={playerStats.name}
        opacity={opacity}
      />
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
    </div>
  );
};

export default Playmat;
