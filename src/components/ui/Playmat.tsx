import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import PlaymatHeader from "./PlaymatHeader";
import Scoreboard from "./Scoreboard";

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
  const playerOneBoardColor = useSelector(
    (state: RootState) => state.PlayerOne.boardColor
  );
  const playerTwoBoardColor = useSelector(
    (state: RootState) => state.PlayerTwo.boardColor
  );
  const playerThreeBoardColor = useSelector(
    (state: RootState) => state.PlayerThree.boardColor
  );
  const playerFourBoardColor = useSelector(
    (state: RootState) => state.PlayerFour.boardColor
  );

  const playerOneTextColor = useSelector(
    (state: RootState) => state.PlayerOne.textColor
  );
  const playerTwoTextColor = useSelector(
    (state: RootState) => state.PlayerTwo.textColor
  );
  const playerThreeTextColor = useSelector(
    (state: RootState) => state.PlayerThree.textColor
  );
  const playerFourTextColor = useSelector(
    (state: RootState) => state.PlayerFour.textColor
  );

  const playerOneCommander = useSelector(
    (state: RootState) => state.PlayerOne.commander
  );
  const playerTwoCommander = useSelector(
    (state: RootState) => state.PlayerTwo.commander
  );
  const playerThreeCommander = useSelector(
    (state: RootState) => state.PlayerThree.commander
  );
  const playerFourCommander = useSelector(
    (state: RootState) => state.PlayerFour.commander
  );

  const filterBoardColor = () => {
    switch (playerStats.name) {
      case "PlayerOne":
        return playerOneBoardColor;
      case "PlayerTwo":
        return playerTwoBoardColor;
      case "PlayerThree":
        return playerThreeBoardColor;
      case "PlayerFour":
        return playerFourBoardColor;
      default:
        return "#000000 text-white";
    }
  };

  const filterTextColor = () => {
    switch (playerStats.name) {
      case "PlayerOne":
        return playerOneTextColor;
      case "PlayerTwo":
        return playerTwoTextColor;
      case "PlayerThree":
        return playerThreeTextColor;
      case "PlayerFour":
        return playerFourTextColor;
      default:
        return "#000000 text-white";
    }
  };

  const filterCommander = () => {
    switch (playerStats.name) {
      case "PlayerOne":
        return playerOneCommander;
      case "PlayerTwo":
        return playerTwoCommander;
      case "PlayerThree":
        return playerThreeCommander;
      case "PlayerFour":
        return playerFourCommander;
      default:
        return "#000000 text-white";
    }
  };

  let isPlayerOneAndFour = ``;

  return (
    <div
      className={`h-full flex w-full relative z-50 p-2 border-[0.25px]`}
      style={{ backgroundColor: filterBoardColor(), color: filterTextColor() }}
    >
      <div
        className={`max-w-[90%] flex flex-col absolute bottom-2 left-[50%] -translate-x-[50%] uppercase tracking-wider truncate`}
      >
        <small>{filterCommander()}</small>
      </div>
      <PlaymatHeader
        poisonDamage={playerStats.poisonTotal}
        commanderDamage={playerStats.commanderDamage}
        player={playerStats.name}
        opacity={opacity}
      />
      <Scoreboard playerStats={playerStats} />
    </div>
  );
};

export default Playmat;
