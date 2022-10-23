import { useState } from "react";
import { useDispatch } from "react-redux";

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
import { Link } from "react-router-dom";

interface PlaymatHeaderProps {
  player: string;
  opacity: string;
}

const PlaymatHeader: React.FC<PlaymatHeaderProps> = ({ player, opacity }) => {
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

  return (
    // HAMBURGER MENU
    <header
      className={`absolute ${
        opacity === "0" ? "hidden" : ""
      } top-0 left-0 bg-black w-full text-white p-4 h-full flex flex-col items-center gap-6`}
    >
      <div className="absolute top-4 right-6">
        <Link to="/">Home</Link>
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
            Find
          </button>
        </form>
      </div>
      {/* CHANGE BG COLOR */}
      <div className="flex flex-col gap-2">
        <form onSubmit={handleBgColorApply}>
          <label>
            {" "}
            Background:{" "}
            <select
              name=""
              id=""
              className="flex text-black"
              onChange={(e) => setNewBgColor(e.target.value)}
            >
              <option value="bg-red-500">Red</option>
              <option value="bg-blue-500">Blue</option>
              <option value="bg-green-500">Green</option>
              <option value="bg-black">Black</option>
              <option value="bg-slate-100">Colorless</option>
            </select>
          </label>
          <button className="text-yellow-600">Apply</button>
        </form>
      </div>

      {/* CHANGE TEXT COLOR */}
      <div className="flex flex-col gap-2">
        <form onSubmit={handleTextColorApply}>
          <label>
            {" "}
            Text Color:{" "}
            <select
              name="text-color"
              id="text-color"
              className="flex text-black"
              onChange={(e) => setNewTextColor(e.target.value)}
            >
              <option value="bg-yellow-500">Yellow</option>
              <option value="bg-blue-800">Dark Blue</option>
              <option value="bg-green-800">Dark Green</option>
              <option value="bg-black">Black</option>
              <option value="bg-slate-500">Colorless</option>
            </select>
          </label>
          <button>Apply</button>
        </form>
      </div>
    </header>
  );
};

export default PlaymatHeader;
