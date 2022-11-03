import { useDispatch } from "react-redux";
import { useState } from "react";

interface TextColorMenuProps {
  player: string;
}

const TextColorMenu: React.FC<TextColorMenuProps> = ({ player }) => {
  const dispatch = useDispatch();
  const [textColor, setTextColor] = useState<string>("#000000");

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (player) {
      case "PlayerOne":
        break;
      case "PlayerTwo":
        break;
      case "PlayerThree":
        break;
      case "PlayerFour":
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
      <form className="flex items-center justify-end gap-4 w-full">
        <label>
          <input
            type="color"
            name="textColor"
            id="textColor"
            value={textColor}
            onChange={handleTextColorChange}
            className="border-0 bg-white rounded-full"
          />
          {/* <select
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
          </select> */}
        </label>
        {/* <ApplyButton /> */}
      </form>
    </div>
  );
};

export default TextColorMenu;
