import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import ApplyButton from "../ui/ApplyButton";

import { updatePlayerOneBgColor } from "../../app/commander/PlayerOneSlice";
import { updatePlayerTwoBgColor } from "../../app/commander/PlayerTwoSlice";
import { updatePlayerThreeBgColor } from "../../app/commander/PlayerThreeSlice";
import { updatePlayerFourBgColor } from "../../app/commander/PlayerFourSlice";
import { useEffect, useState } from "react";

interface BgColorFormProps {
  player: string;
}

// Instead of using a form onSubmit, when a color is selected by the input
// run the handleBgColorChange function, calling handleBgColorApply at the end.

const BgColorForm: React.FC<BgColorFormProps> = ({ player }) => {
  const dispatch = useDispatch();
  const [inputColor, setInputColor] = useState<string>("#000000");

  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputColor(e.target.value);
    switch (player) {
      case "PlayerOne":
        dispatch(updatePlayerOneBgColor(e.target.value));
        break;
      case "PlayerTwo":
        dispatch(updatePlayerTwoBgColor(e.target.value));
        break;
      case "PlayerThree":
        dispatch(updatePlayerThreeBgColor(e.target.value));
        break;
      case "PlayerFour":
        dispatch(updatePlayerFourBgColor(e.target.value));
        break;
      default:
        console.log("There is an error...");
    }
  };

  return (
    <form className="flex items-center justify-end gap-4 w-full">
      <label>
        <input
          type="color"
          name="bgColor"
          id="bgColor"
          value={inputColor}
          onChange={handleBgColorChange}
          className="border-0 bg-white rounded-full"
        />
      </label>
      {/* <ApplyButton /> */}
    </form>
  );
};

export default BgColorForm;
