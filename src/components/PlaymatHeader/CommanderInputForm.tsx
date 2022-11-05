import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePlayerFourCommander } from "../../app/commander/PlayerFourSlice";
import { updatePlayerOneCommander } from "../../app/commander/PlayerOneSlice";
import { updatePlayerThreeCommander } from "../../app/commander/PlayerThreeSlice";
import { updatePlayerTwoCommander } from "../../app/commander/PlayerTwoSlice";

interface CommanderInputFormProps {
  player: string;
}
const CommanderInputForm: React.FC<CommanderInputFormProps> = ({ player }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [commander, setCommander] = useState("");
  const dispatch = useDispatch();

  const handleCommanderSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (commander.length > 0) {
      setErrorMessage("");
      switch (player) {
        case "PlayerOne":
          dispatch(updatePlayerOneCommander(commander));
          break;
        case "PlayerTwo":
          dispatch(updatePlayerTwoCommander(commander));
          break;
        case "PlayerThree":
          dispatch(updatePlayerThreeCommander(commander));
          break;
        case "PlayerFour":
          dispatch(updatePlayerFourCommander(commander));
          break;
      }
    } else {
      setErrorMessage("Please enter a longer name");
    }

    setCommander("");
  };

  return (
    <form className="w-full relative max-w-lg">
      <label>
        <input
          type="text"
          id="commander"
          placeholder="Commander"
          className="border-0 rounded-md w-full text-black px-2 py-2"
          value={commander}
          onChange={(e) => setCommander(e.target.value)}
          onBlur={handleCommanderSubmit}
        />
      </label>
      <p className="text-red-500 py-2">{errorMessage}</p>
    </form>
  );
};

export default CommanderInputForm;
