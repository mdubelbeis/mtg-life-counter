import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

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
import { useEffect, useState } from "react";

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

  console.log(location);
  return (
    <div
      className={`w-full flex flex-col-reverse gap-4 sm:flex-row text-center justify-center items-center text-7xl lg:text-9xl`}
    >
      <div
        className={`py-4 md:py-18 w-full flex justify-center items-center text-4xl rounded active:bg-opacity-50 text-opacity-100`}
        onClick={handleLifeLoss}
      >
        <span>-</span>
      </div>
      <h2>{playerStats.lifeTotal}</h2>
      <div
        className={`w-full py-4 md:py-18 flex justify-center items-center text-4xl rounded active:bg-opacity-50 text-opacity-100`}
        onClick={handleLifeGain}
      >
        <span>+</span>
      </div>
    </div>
  );
};

export default Scoreboard;
