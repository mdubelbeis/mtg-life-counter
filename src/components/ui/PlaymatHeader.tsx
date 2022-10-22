import MobileMenu from "../MobileMenu";

interface PlaymatHeaderProps {
  player: string;
  opacity: string;
}

const PlaymatHeader: React.FC<PlaymatHeaderProps> = ({ player, opacity }) => {
  // TODO: CANI? Get commander name, query the API, get an img and set game-board background???

  const getPlayer = () => {
    switch (player) {
      case "PlayerOne":
        return "PLAYER 1";
      case "PlayerTwo":
        return "PLAYER 2";
      case "PlayerThree":
        return "PLAYER 3";
      case "PlayerFour":
        return "PLAYER 4";
    }
  };

  return (
    // HAMBURGER MENU
    <header
      className={`absolute opacity-${opacity} top-0 left-0 bg-black w-full text-white p-4`}
    >
      <div className={`opacity-${opacity} flex justify-between gap-4`}>
        <div className="tracking-wider">{getPlayer()}</div>
        <form onSubmit={() => {}}>
          <label>
            <input
              type="text"
              placeholder="Commander"
              className="p-[2px] border-0 rounded-md"
            />
          </label>
        </form>
      </div>
    </header>
  );
};

export default PlaymatHeader;
