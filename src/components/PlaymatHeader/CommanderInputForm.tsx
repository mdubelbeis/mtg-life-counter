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
  const dispatch = useDispatch();

  const handleCommanderSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.commander.value.length > 0) {
      setErrorMessage("");
      switch (player) {
        case "PlayerOne":
          dispatch(updatePlayerOneCommander(e.currentTarget.commander.value));
          break;
        case "PlayerTwo":
          dispatch(updatePlayerTwoCommander(e.currentTarget.commander.value));
          break;
        case "PlayerThree":
          dispatch(updatePlayerThreeCommander(e.currentTarget.commander.value));
          break;
        case "PlayerFour":
          dispatch(updatePlayerFourCommander(e.currentTarget.commander.value));
          break;
      }
    } else {
      setErrorMessage("Please enter a longer name");
    }

    e.currentTarget.commander.value = "";
  };

  return (
    <form onSubmit={handleCommanderSubmit} className="w-full relative max-w-lg">
      <label>
        <input
          type="text"
          id="commander"
          placeholder="Commander"
          className="border-0 rounded-md w-full text-black px-2 py-2"
        />
      </label>
      <button
        className={`absolute top-[4px] right-2 bg-blue-500 rounded py-1 px-3 tracking-wider hover:bg-blue-700 active:bg-blue-700`}
        onChange={() => console.log("Clicked")}
      >
        Set
      </button>
      <p className="text-red-500 py-2">{errorMessage}</p>
    </form>
  );
};

export default CommanderInputForm;
