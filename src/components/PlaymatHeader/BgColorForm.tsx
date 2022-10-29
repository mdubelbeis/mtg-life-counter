import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import ApplyButton from "../ui/ApplyButton";

import { updatePlayerOneBgColor } from "../../app/commander/PlayerOneSlice";
import { updatePlayerTwoBgColor } from "../../app/commander/PlayerTwoSlice";
import { updatePlayerThreeBgColor } from "../../app/commander/PlayerThreeSlice";
import { updatePlayerFourBgColor } from "../../app/commander/PlayerFourSlice";
import { useState } from "react";

interface BgColorFormProps {
  player: string;
}

const BgColorForm: React.FC<BgColorFormProps> = ({ player }) => {
  const dispatch = useDispatch();
  const colorsArray = useSelector((state: RootState) => state.colors.colors);
  const [inputColor, setInputColor] = useState("");

  const handleBgColorApply = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (player) {
      case "PlayerOne":
        dispatch(updatePlayerOneBgColor(inputColor));
        break;
      case "PlayerTwo":
        dispatch(updatePlayerTwoBgColor(inputColor));
        // console.log(inputColor);
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

  return (
    <form
      onSubmit={handleBgColorApply}
      className="flex items-center justify-between gap-4 w-full"
    >
      <label>
        <select
          name="bgColor"
          id="bgColor"
          className="py-2 px-4 w-full rounded bg-white shadow-md"
          onChange={(e) => setInputColor(e.target.value)}
        >
          {colorsArray.map((color) => {
            return (
              <option key={color.id} value={color.value}>
                {color.name}
              </option>
            );
          })}
        </select>
      </label>
      <ApplyButton />
    </form>
  );
};

export default BgColorForm;
