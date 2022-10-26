import { useDispatch } from "react-redux";
import ApplyButton from "../ui/ApplyButton";

import { updatePlayerOneTextColor } from "../../app/commander/PlayerOneSlice";
import { updatePlayerTwoTextColor } from "../../app/commander/PlayerTwoSlice";
import { updatePlayerThreeTextColor } from "../../app/commander/PlayerThreeSlice";
import { updatePlayerFourTextColor } from "../../app/commander/PlayerFourSlice";

interface TextColorMenuProps {
  player: string;
}

const TextColorMenu: React.FC<TextColorMenuProps> = ({ player }) => {
  const dispatch = useDispatch();

  const handleTextColorApply = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.textColor.value);

    switch (player) {
      case "PlayerOne":
        dispatch(updatePlayerOneTextColor(e.currentTarget.textColor.value));
        break;
      case "PlayerTwo":
        dispatch(updatePlayerTwoTextColor(e.currentTarget.textColor.value));
        break;
      case "PlayerThree":
        dispatch(updatePlayerThreeTextColor(e.currentTarget.textColor.value));
        break;
      case "PlayerFour":
        dispatch(updatePlayerFourTextColor(e.currentTarget.textColor.value));
        break;
      default:
        console.log("There is an error...");
    }
  };
  return (
    <div
      id="section-text-color"
      className="flex items-center justify-between gap-4 h-min p-2 rounded text-[#2c3142] bg-white w-full"
    >
      <h3 className="font-bold">Text: </h3>
      <form
        onSubmit={handleTextColorApply}
        className="flex items-center justify-between gap-4 w-full"
      >
        <label>
          <select
            name="textColor"
            id="textColor"
            className="py-2 px-4 rounded bg-white shadow-md"
            defaultValue={"bg-blue-500"}
          >
            <option value="text-yellow-500">Yellow</option>
            <option value="text-blue-800">Dark Blue</option>
            <option value="text-green-800">Dark Green</option>
            <option value="text-black">Black</option>
            <option value="text-slate-500">Colorless</option>
            <option value="text-white">White</option>
          </select>
        </label>
        <ApplyButton />
      </form>
    </div>
  );
};

export default TextColorMenu;
