import { useSelector, useDispatch } from "react-redux";
import ApplyButton from "../ui/ApplyButton";

import { updatePlayerOneBgColor } from "../../app/commander/PlayerOneSlice";
import { updatePlayerTwoBgColor } from "../../app/commander/PlayerTwoSlice";
import { updatePlayerThreeBgColor } from "../../app/commander/PlayerThreeSlice";
import { updatePlayerFourBgColor } from "../../app/commander/PlayerFourSlice";
import { RootState } from "../../app/store";

interface BgColorFormProps {
  player: string;
}

const BgColorForm: React.FC<BgColorFormProps> = ({ player }) => {
  const dispatch = useDispatch();
  const colorsArray = useSelector((state: RootState) => state.colors.colors);

  const handleBgColorApply = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (player) {
      case "PlayerOne":
        dispatch(updatePlayerOneBgColor(e.currentTarget.bgColor.value));
        break;
      case "PlayerTwo":
        dispatch(updatePlayerTwoBgColor(e.currentTarget.bgColor.value));
        break;
      case "PlayerThree":
        dispatch(updatePlayerThreeBgColor(e.currentTarget.bgColor.value));
        break;
      case "PlayerFour":
        dispatch(updatePlayerFourBgColor(e.currentTarget.bgColor.value));
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
