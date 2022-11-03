import { useState } from "react";

interface BgColorFormProps {
  player: string;
  setBgColor: (color: string) => void;
}

// Instead of using a form onSubmit, when a color is selected by the input
// run the handleBgColorChange function, calling handleBgColorApply at the end.

const BgColorForm: React.FC<BgColorFormProps> = ({ player, setBgColor }) => {
  const [inputColor, setInputColor] = useState<string>("#3B82F6");

  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputColor(e.target.value);
    setBgColor(e.target.value);
  };

  return (
    <form className="flex items-center justify-end gap-4 w-full">
      <label>
        <input
          type="color"
          name="bgColor"
          id="bgColor"
          onChange={handleBgColorChange}
          className="border-0 bg-white rounded-full"
        />
      </label>
      {/* <ApplyButton /> */}
    </form>
  );
};

export default BgColorForm;
