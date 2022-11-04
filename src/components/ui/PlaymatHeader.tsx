import DamageCounters from "../PlaymatHeader/DamageCounters";
import BackgroundColorMenu from "../PlaymatHeader/BackgroundColorMenu";
import TextColorForm from "../PlaymatHeader/TextColorForm";
import CommanderInputForm from "../PlaymatHeader/CommanderInputForm";
import PlaymatHeaderNav from "../PlaymatHeader/PlaymatHeaderNav";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

interface PlaymatHeaderProps {
  commanderDamage: number;
  poisonDamage: number;
  player: string;
  opacity: string;
}

const PlaymatHeader: React.FC<PlaymatHeaderProps> = ({
  player,
  opacity,
  poisonDamage,
  commanderDamage,
}) => {
  let commanderName;

  const getPlayer = () => {
    switch (player) {
      case "PlayerOne":
        commanderName = useSelector(
          (state: RootState) => state.PlayerOne.commander
        );
        return "PLAYER 1";
      case "PlayerTwo":
        commanderName = useSelector(
          (state: RootState) => state.PlayerTwo.commander
        );
        return "PLAYER 2";
      case "PlayerThree":
        commanderName = useSelector(
          (state: RootState) => state.PlayerThree.commander
        );
        return "PLAYER 3";
      case "PlayerFour":
        commanderName = useSelector(
          (state: RootState) => state.PlayerFour.commander
        );
        return "PLAYER 4";
    }
  };

  return (
    <header
      className={`absolute ${
        opacity === "0" ? "hidden" : ""
      } top-0 left-0 bg-[#2c3142] w-full text-white p-4 h-full flex flex-col items-center gap-2 overflow-scroll`}
    >
      <PlaymatHeaderNav player={player} />
      <div
        className={`opacity-${opacity} flex flex-col justify-center w-full items-center gap-4 mt-10`}
      >
        <div className="tracking-wider ">{getPlayer()}</div>
        <CommanderInputForm player={player} />
      </div>

      <section
        id="settings-wrapper"
        className="grid grid-cols-1 gap-2 p-4 w-full"
      >
        <BackgroundColorMenu player={player} />
        <TextColorForm player={player} />
        <DamageCounters
          title="Commander Damage"
          player={player}
          counter={commanderDamage}
        />
        <DamageCounters
          title="Poison Damage"
          player={player}
          counter={poisonDamage}
        />
      </section>
    </header>
  );
};

export default PlaymatHeader;
