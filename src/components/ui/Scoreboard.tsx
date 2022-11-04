import { useDispatch } from "react-redux";

import {
  incrementPlayerOneHealth,
  decrementPlayerOneHealth,
  setPlayerOneLifeTotal,
} from "../../app/commander/PlayerOneSlice";
import {
  incrementPlayerTwoHealth,
  decrementPlayerTwoHealth,
  setPlayerTwoLifeTotal,
} from "../../app/commander/PlayerTwoSlice";
import {
  incrementPlayerThreeHealth,
  decrementPlayerThreeHealth,
  setPlayerThreeLifeTotal,
} from "../../app/commander/PlayerThreeSlice";
import {
  incrementPlayerFourHealth,
  decrementPlayerFourHealth,
  setPlayerFourLifeTotal,
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
  const [showInput, setShowInput] = useState(false);
  const [lifeTotal, setLifeTotal] = useState<string>(playerStats.lifeTotal);
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

  const handleShowInput = () => {
    setShowInput(!showInput);
    setLifeTotal("0");
  };

  const handleHealthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLifeTotal(e.target.value);
  };

  const handleHealthSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    handleShowInput();

    switch (playerStats.name) {
      case "PlayerOne":
        dispatch(setPlayerOneLifeTotal(Number(lifeTotal)));
        break;
      case "PlayerTwo":
        dispatch(setPlayerTwoLifeTotal(Number(lifeTotal)));
        break;
      case "PlayerThree":
        dispatch(setPlayerThreeLifeTotal(Number(lifeTotal)));
        break;
      case "PlayerFour":
        dispatch(setPlayerFourLifeTotal(Number(lifeTotal)));
        break;
      default:
        console.log("There is an error...");
    }
  };

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
      {!showInput ? (
        <h2 onClick={handleShowInput}>{playerStats.lifeTotal}</h2>
      ) : (
        <form>
          <input
            type="number"
            value={lifeTotal}
            onChange={handleHealthChange}
            onBlur={handleHealthSubmit}
            className="w-6/12"
          />
        </form>
      )}
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
