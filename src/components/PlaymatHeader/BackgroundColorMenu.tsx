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
      className="flex items-center justify-center sm:justify-between sm:gap-4 p-2 rounded text-[#2c3142] bg-white w-full"
    >
      <h3 className="font-bold hidden sm:block">PLAYMAT:</h3>
      <h3 className="font-bold sm:hidden">MAT:</h3>
      <BgColorForm player={player} />
    </div>
  );
};

export default BackgroundColorMenu;
