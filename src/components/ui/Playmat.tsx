import { useState } from "react";

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
  const [bgColor, setBgColor] = useState("#00ff00");

  const handleNewBgColor = (color: string) => {
    setBgColor(color);
  };

  return (
    <div
      className={`h-full flex w-full relative bg-[${bgColor}] p-2 border-[0.25px]`}
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
