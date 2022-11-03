import BgColorForm from "./BgColorForm";

interface BackgroundColorMenuProps {
  player: string;
  setBgColor: (color: string) => void;
}

const BackgroundColorMenu: React.FC<BackgroundColorMenuProps> = ({
  player,
  setBgColor,
}) => {
  return (
    <div
      id="section-bg-color"
      className="flex items-center justify-between gap-4 h-min p-2 rounded text-[#2c3142] bg-white w-full"
    >
      <h3 className="font-bold">Playmat: </h3>
      <BgColorForm player={player} setBgColor={setBgColor} />
    </div>
  );
};

export default BackgroundColorMenu;
