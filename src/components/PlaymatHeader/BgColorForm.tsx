import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePlayerOneBoardColor } from "../../app/commander/PlayerOneSlice";
import { updatePlayerTwoBoardColor } from "../../app/commander/PlayerTwoSlice";
import { RootState } from "../../app/store";
import ApplyButton from "../ui/ApplyButton";

// Instead of using a form onSubmit, when a color is selected by the input
// run the handleBgColorChange function, calling handleBgColorApply at the end.

interface BgColorFormProps {
  player: string;
}

const BgColorForm: React.FC<BgColorFormProps> = ({ player }) => {
  const [boardColor, setBoardColor] = useState<string>("#000000");
  const dispatch = useDispatch();
  const playerOneBoardColor = useSelector(
    (state: RootState) => state.PlayerOne.boardColor
  );
  const playerTwoBoardColor = useSelector(
    (state: RootState) => state.PlayerTwo.boardColor
  );
  const playerThreeBoardColor = useSelector(
    (state: RootState) => state.PlayerThree.boardColor
  );
  const playerFourBoardColor = useSelector(
    (state: RootState) => state.PlayerFour.boardColor
  );

  useEffect(() => {
    switch (player) {
      case "PlayerOne":
        setBoardColor(playerOneBoardColor);
        break;
      case "PlayerTwo":
        setBoardColor(playerTwoBoardColor);
        break;
      case "PlayerThree":
        setBoardColor(playerThreeBoardColor);
        break;
      case "PlayerFour":
        setBoardColor(playerFourBoardColor);
        break;
      default:
        // Maybe Add more players???
        setBoardColor("#ffffff");
    }
  });

  const handleBgColorSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    setBoardColor(e.target.value);
    // dispatch color to store
    switch (player) {
      case "PlayerOne":
        dispatch(updatePlayerOneBoardColor(e.target.value.toUpperCase()));
        break;
      case "PlayerTwo":
        dispatch(updatePlayerTwoBoardColor(e.target.value.toUpperCase()));
        break;
      default:
        console.log("Error...dummy");
    }
    console.log(boardColor);
  };

  return (
    <form
      // onSubmit={handleBgColorSubmit}
      className="flex items-center justify-end gap-4 w-full"
    >
      <label>
        <input
          type="color"
          name="bgColor"
          id="bgColor"
          value={boardColor}
          onChange={handleBgColorSubmit}
          className="border-0 bg-white rounded-full"
        />
      </label>
      <ApplyButton />
    </form>
  );
};

export default BgColorForm;
