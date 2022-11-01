import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import ApplyButton from "../ui/ApplyButton";

import { updatePlayerOneBgColor } from "../../app/commander/PlayerOneSlice";
import { updatePlayerTwoBgColor } from "../../app/commander/PlayerTwoSlice";
import { updatePlayerThreeBgColor } from "../../app/commander/PlayerThreeSlice";
import { updatePlayerFourBgColor } from "../../app/commander/PlayerFourSlice";
import { useEffect, useState } from "react";
import { CgFormatJustify } from "react-icons/cg";

interface BgColorFormProps {
  player: string;
}

const BgColorForm: React.FC<BgColorFormProps> = ({ player }) => {
  const dispatch = useDispatch();
  const [inputColor, setInputColor] = useState<string>("#3B82F6");

  const handleBgColorApply = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (player) {
      case "PlayerOne":
        dispatch(updatePlayerOneBgColor(inputColor));
        break;
      case "PlayerTwo":
        dispatch(updatePlayerTwoBgColor(inputColor));
        break;
      case "PlayerThree":
        dispatch(updatePlayerThreeBgColor(inputColor));
        break;
      case "PlayerFour":
        dispatch(updatePlayerFourBgColor(inputColor));
        break;
      default:
        console.log("There is an error...");
    }
  };

  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputColor(e.target.value);
  };

  return (
    <form
      onSubmit={handleBgColorApply}
      className="flex items-center justify-between gap-4 w-full"
    >
      <label>
        <input
          type="color"
          name="bgColor"
          id="bgColor"
          value={inputColor}
          onChange={handleBgColorChange}
        />
      </label>
      <ApplyButton />
    </form>
  );
};

export default BgColorForm;
