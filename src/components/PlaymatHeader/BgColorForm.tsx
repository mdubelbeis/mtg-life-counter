import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePlayerOneBoardColor } from "../../app/commander/PlayerOneSlice";
import { updatePlayerTwoBoardColor } from "../../app/commander/PlayerTwoSlice";
import ApplyButton from "../ui/ApplyButton";

// Instead of using a form onSubmit, when a color is selected by the input
// run the handleBgColorChange function, calling handleBgColorApply at the end.

interface BgColorFormProps {
  player: string;
}

const BgColorForm: React.FC<BgColorFormProps> = ({ player }) => {
  const [inputColor, setInputColor] = useState<string>("#3B82F6");
  const dispatch = useDispatch();

  const handleBgColorSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // dispatch color to store
    switch (player) {
      case "PlayerOne":
        dispatch(updatePlayerOneBoardColor(inputColor));
        break;
      default:
        dispatch(updatePlayerTwoBoardColor(inputColor));
        break;
    }
  };

  return (
    <form
      onSubmit={handleBgColorSubmit}
      className="flex items-center justify-end gap-4 w-full"
    >
      <label>
        <input
          type="color"
          name="bgColor"
          id="bgColor"
          value={inputColor}
          onChange={(e) => setInputColor(e.target.value)}
          className="border-0 bg-white rounded-full"
        />
      </label>
      <ApplyButton />
    </form>
  );
};

export default BgColorForm;
