import { useState } from "react";
import { useDispatch } from "react-redux";

import { updatePlayerOneBgColor } from "../../app/commander/PlayerOneSlice";
import { updatePlayerTwoBgColor } from "../../app/commander/PlayerTwoSlice";
import { updatePlayerThreeBgColor } from "../../app/commander/PlayerThreeSlice";
import { updatePlayerFourBgColor } from "../../app/commander/PlayerFourSlice";

interface PlaymatHeaderProps {
  player: string;
  opacity: string;
}

const PlaymatHeader: React.FC<PlaymatHeaderProps> = ({ player, opacity }) => {
  const [newBgColor, setNewBgColor] = useState<string>("");
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

  // const handleApplyBgColorChange = (e: React.ChangeEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   handleBgColorApply(newBgColor);
  // };

  const handleBgColorInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewBgColor(e.target.value);
  };

  return (
    // HAMBURGER MENU
    <header
      className={`absolute ${
        opacity === "0" ? "hidden" : ""
      } top-0 left-0 bg-black w-full text-white p-4 h-full flex flex-col items-center gap-6 max-w-xl`}
    >
      <div
        className={`opacity-${opacity} flex flex-col justify-center w-full items-center gap-4`}
      >
        <div className="tracking-wider ">{getPlayer()}</div>
        <form onSubmit={() => {}} className="w-full">
          <label>
            <input
              type="text"
              placeholder="Commander"
              className="p-[2px] border-0 rounded-md w-full text-black px-2"
            />
          </label>
        </form>
      </div>

      <div className="flex flex-col gap-2">
        <form onSubmit={handleBgColorApply}>
          <label>
            {" "}
            Background:{" "}
            <select
              name=""
              id=""
              className="flex text-black"
              onChange={handleBgColorInput}
            >
              <option value="bg-red-300">Red</option>
              <option value="bg-blue-300">Blue</option>
              <option value="bg-green-300">Green</option>
              <option value="bg-black">Black</option>
              <option value="bg-slate-100">Colorless</option>
            </select>
          </label>
          <button>Apply</button>
        </form>
      </div>
    </header>
  );
};

export default PlaymatHeader;
