import { useDispatch } from "react-redux";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoRefresh } from "react-icons/io5";
import DamageCounters from "../PlaymatHeader/DamageCounters";
import BackgroundColorMenu from "../PlaymatHeader/BackgroundColorMenu";
import TextColorMenu from "../PlaymatHeader/TextColorMenu";

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
  const dispatch = useDispatch();
  // const [newTextColor, setNewTextColor] = useState<string>("");

  // TODO: CANI? Get commander name, query the API, get an img and set game-board background???
  const getPlayer = () => {
    switch (player) {
      case "PlayerOne":
        return "PLAYER 1";
      case "PlayerTwo":
        return "PLAYER 2";
      case "PlayerThree":
        return "PLAYER 3";
      case "PlayerFour":
        return "PLAYER 4";
    }
  };

  const handleCommanderSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleRefreshGame = () => {
    // Dispatch to each player, resetting lifeTotal, commander damage, poison damage
  };

  return (
    // HAMBURGER MENU
    <header
      className={`absolute ${
        opacity === "0" ? "hidden" : ""
      } top-0 left-0 bg-[#2c3142] w-full text-white p-4 h-full flex flex-col items-center gap-6 max-w-lg`}
    >
      {/* LINKS */}
      <div className="absolute top-4 left-6" onClick={handleRefreshGame}>
        <IoRefresh className="w-10 h-10 hover:cursor-pointer" />
      </div>
      <div className="absolute top-4 right-6">
        <Link to="/">
          <BiHome className="w-10 h-10" />
        </Link>
      </div>
      <div
        className={`opacity-${opacity} flex flex-col justify-center w-full items-center gap-4 mt-10`}
      >
        <div className="tracking-wider ">{getPlayer()}</div>
        <form
          onSubmit={handleCommanderSubmit}
          className="w-full relative max-w-lg"
        >
          <label>
            <input
              type="text"
              placeholder="Commander"
              className="border-0 rounded-md w-full text-black px-2 py-2"
            />
          </label>
          <button
            className={`absolute top-[4px] right-2 bg-blue-500 rounded py-1 px-3 tracking-wider`}
          >
            Set
          </button>
        </form>
      </div>

      <section
        id="settings-wrapper"
        className="grid grid-cols-1 gap-2 p-4 w-full"
      >
        <BackgroundColorMenu player={player} />
        <TextColorMenu player={player} />
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
