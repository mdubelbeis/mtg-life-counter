import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoRefresh } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import ApplyButton from "./ApplyButton";
import DamageCounters from "../PlaymatHeader/DamageCounters";

import {
  updatePlayerOneBgColor,
  updatePlayerOneTextColor,
} from "../../app/commander/PlayerOneSlice";
import {
  updatePlayerTwoBgColor,
  updatePlayerTwoTextColor,
} from "../../app/commander/PlayerTwoSlice";
import {
  updatePlayerThreeBgColor,
  updatePlayerThreeTextColor,
} from "../../app/commander/PlayerThreeSlice";
import {
  updatePlayerFourBgColor,
  updatePlayerFourTextColor,
} from "../../app/commander/PlayerFourSlice";

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
  const [newBgColor, setNewBgColor] = useState<string>("");
  const [newTextColor, setNewTextColor] = useState<string>("");
  const dispatch = useDispatch();

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

  const handleBgColorApply = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (player) {
      case "PlayerOne":
        dispatch(updatePlayerOneBgColor(newBgColor));
        break;
      case "PlayerTwo":
        dispatch(updatePlayerTwoBgColor(newBgColor));
        break;
      case "PlayerThree":
        dispatch(updatePlayerThreeBgColor(newBgColor));
        break;
      case "PlayerFour":
        dispatch(updatePlayerFourBgColor(newBgColor));
        break;
      default:
        console.log("There is an error...");
    }
  };

  const handleTextColorApply = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (player) {
      case "PlayerOne":
        dispatch(updatePlayerOneTextColor(newTextColor));
        break;
      case "PlayerTwo":
        dispatch(updatePlayerTwoTextColor(newTextColor));
        break;
      case "PlayerThree":
        dispatch(updatePlayerThreeTextColor(newTextColor));
        break;
      case "PlayerFour":
        dispatch(updatePlayerFourTextColor(newTextColor));
        break;
      default:
        console.log("There is an error...");
    }
  };

  const handleCommanderSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleCommanderDamageApply = (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  };

  return (
    // HAMBURGER MENU
    <header
      className={`absolute ${
        opacity === "0" ? "hidden" : ""
      } top-0 left-0 bg-[#2c3142] w-full text-white p-4 h-full flex flex-col items-center gap-6 max-w-lg`}
    >
      <div className="absolute top-4 left-6">
        <IoRefresh className="w-10 h-10" />
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
        {/* CHANGE BG COLOR */}
        <div
          id="section-bg-color"
          className="flex items-center justify-between gap-4 h-min p-2 rounded text-[#2c3142] bg-white w-full"
        >
          <h3 className="font-bold">Playmat: </h3>
          <form
            onSubmit={handleBgColorApply}
            className="flex items-center justify-between gap-4 w-full"
          >
            <label>
              <select
                name="bg-color"
                id="bg-color"
                className="py-2 px-4 rounded bg-slate-50"
                onChange={(e) => setNewBgColor(e.target.value)}
              >
                <option value="bg-red-500">Red</option>
                <option value="bg-blue-500" selected>
                  Blue
                </option>
                <option value="bg-green-500">Green</option>
                <option value="bg-black">Black</option>
                <option value="bg-slate-100">Colorless</option>
              </select>
            </label>
            <ApplyButton />
          </form>
        </div>

        {/* CHANGE TEXT COLOR */}
        <div
          id="section-text-color"
          className="flex items-center justify-between gap-4 h-min p-2 rounded text-[#2c3142] bg-white w-full"
        >
          <h3 className="font-bold">Text</h3>
          <form
            onSubmit={handleTextColorApply}
            className="flex items-center justify-between gap-4 w-full"
          >
            <label>
              <select
                name="text-color"
                id="text-color"
                className="py-2 px-4 rounded bg-slate-50"
                onChange={(e) => setNewTextColor(e.target.value)}
              >
                <option value="bg-yellow-500">Yellow</option>
                <option value="bg-blue-800">Dark Blue</option>
                <option value="bg-green-800">Dark Green</option>
                <option value="bg-black" selected>
                  Black
                </option>
                <option value="bg-slate-500">Colorless</option>
                <option value="bg-white">White</option>
              </select>
            </label>
            <ApplyButton />
          </form>
        </div>

        {/* CHANGE COMMANDER DAMAGE */}
        <DamageCounters
          title="Commander Damage"
          player={player}
          counter={commanderDamage}
        />

        {/* CHANGE POISON DAMAGE */}
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
