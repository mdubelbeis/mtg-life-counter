import { useDispatch } from "react-redux";
import { useState } from "react";
import ApplyButton from "../ui/ApplyButton";
import { updatePlayerThreeTextColor } from "../../app/commander/PlayerThreeSlice";
import { updatePlayerFourTextColor } from "../../app/commander/PlayerFourSlice";
import { updatePlayerTwoTextColor } from "../../app/commander/PlayerTwoSlice";
import { updatePlayerOneTextColor } from "../../app/commander/PlayerOneSlice";

interface TextColorMenuProps {
  player: string;
}

const TextColorMenu: React.FC<TextColorMenuProps> = ({ player }) => {
  const dispatch = useDispatch();
  const [textColor, setTextColor] = useState<string>("#000000");

  const handleTextColorSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (player) {
      case "PlayerOne":
        dispatch(updatePlayerOneTextColor(textColor));
        break;
      case "PlayerTwo":
        dispatch(updatePlayerTwoTextColor(textColor));
        break;
      case "PlayerThree":
        dispatch(updatePlayerThreeTextColor(textColor));
        break;
      case "PlayerFour":
        dispatch(updatePlayerFourTextColor(textColor));
        break;
      default:
        console.log("Error...dummy");
    }
  };

  return (
    <div
      id="section-text-color"
      className="flex items-center justify-between gap-4 h-min p-2 rounded text-[#2c3142] bg-white w-full"
    >
      <h3 className="font-bold">Text: </h3>
      <form className="flex items-center justify-end gap-4 w-full">
        <label>
          <input
            type="color"
            name="textColor"
            id="textColor"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            onBlur={handleTextColorSubmit}
            className="bg-inherit w-20 h-9"
          />
        </label>
      </form>
    </div>
  );
};

export default TextColorMenu;
