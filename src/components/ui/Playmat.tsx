import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import PlaymatHeader from "./PlaymatHeader";

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
import { useEffect } from "react";

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

  // function handleBgColor() {
  //   let playerOneBgColor = useSelector((state: RootState) => {
  //     state.PlayerOne.bgColor;
  //   });
  //   let playerTwoBgColor = useSelector((state: RootState) => {
  //     state.PlayerTwo.bgColor;
  //   });
  //   let playerThreeBgColor = useSelector((state: RootState) => {
  //     state.PlayerThree.bgColor;
  //   });
  //   let playerFourBgColor = useSelector((state: RootState) => {
  //     state.PlayerFour.bgColor;
  //   });

  //   switch (playerStats.name) {
  //     case "PlayerOne":
  //       console.log(playerOneBgColor);
  //       return playerOneBgColor;
  //     case "PlayerTwo":
  //       console.log(playerTwoBgColor);
  //       return playerTwoBgColor;
  //     case "PlayerThree":
  //       console.log(playerThreeBgColor);
  //       return playerThreeBgColor;
  //     case "PlayerFour":
  //       console.log(playerFourBgColor);
  //       return playerFourBgColor;
  //   }
  // }

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
      <PlaymatHeader
        poisonDamage={playerStats.poisonTotal}
        commanderDamage={playerStats.commanderDamage}
        player={playerStats.name}
        opacity={opacity}
      />
      <div className="flex flex-col gap-10 w-full justify-center items-center">
        <div className="w-full flex text-center text-9xl">
          <div
            className={`grid-span-1 h-full w-full flex justify-center items-center text-4xl active:bg-${playerStats.bgColor}-700 rounded active:bg-opacity-50 text-opacity-100`}
            onClick={handleLifeLoss}
          >
            <span>-</span>
          </div>
          <h2>{playerStats.lifeTotal}</h2>
          <div
            className={`grid-span-1 w-full h-full flex justify-center items-center text-4xl active:bg-${playerStats.bgColor}-700 rounded active:bg-opacity-50 text-opacity-100`}
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
