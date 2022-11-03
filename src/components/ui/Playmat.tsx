import { useEffect, useState } from "react";

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
  bgColor: string;
  altColor: string;
  handleNewBgColor: (color: string) => void;
}

const Playmat: React.FC<PlaymatProps> = ({
  playerStats,
  opacity,
  bgColor,
  altColor,
  handleNewBgColor,
}) => {
  return (
    <div
      className={`h-full flex w-full relative ${
        bgColor || altColor
      } p-2 border-[0.25px]`}
    >
      <PlaymatHeader
        poisonDamage={playerStats.poisonTotal}
        commanderDamage={playerStats.commanderDamage}
        player={playerStats.name}
        opacity={opacity}
        setBgColor={handleNewBgColor}
      />
      <Scoreboard playerStats={playerStats} />
    </div>
  );
};

export default Playmat;
