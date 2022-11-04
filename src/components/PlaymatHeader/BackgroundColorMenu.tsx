import BgColorForm from "./BgColorForm";

interface BackgroundColorMenuProps {
  player: string;
}

const BackgroundColorMenu: React.FC<BackgroundColorMenuProps> = ({
  player,
}) => {
  return (
    <div
      id="section-bg-color"
      className="flex items-center justify-between gap-4 h-min p-2 rounded text-[#2c3142] bg-white w-full"
    >
      <h3 className="font-bold">Playmat: </h3>
      <BgColorForm player={player} />
    </div>
  );
};

export default BackgroundColorMenu;
