import { useState } from "react";
import ApplyButton from "../ui/ApplyButton";

interface BgColorFormProps {
  player: string;
  setBgColor: (color: string) => void;
}

// Instead of using a form onSubmit, when a color is selected by the input
// run the handleBgColorChange function, calling handleBgColorApply at the end.

const BgColorForm: React.FC<BgColorFormProps> = ({ player, setBgColor }) => {
  const [inputColor, setInputColor] = useState<string>("#3B82F6");

  const handleBgColorSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setBgColor(inputColor);
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
