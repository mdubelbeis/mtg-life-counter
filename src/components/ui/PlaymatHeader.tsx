interface PlaymatHeaderProps {
  player: string;
}

const PlaymatHeader: React.FC<PlaymatHeaderProps> = ({ player }) => {
  // TODO: CANI? Get commander name, query the API, get an img and set game-board background???

  const getPlayer = () => {
    switch (player) {
      case "PlayerOne":
        return "Player 1";
      case "PlayerTwo":
        return "Player 2";
      case "PlayerThree":
        return "Player 3";
      case "PlayerFour":
        return "Player 4";
    }
  };

  return (
    <header className="absolute top-0 left-0">
      <div>
        <div>{getPlayer()}</div>
        <form onSubmit={() => {}}>
          <label>
            <input type="text" placeholder="Enter Commander" />
          </label>
        </form>
      </div>
    </header>
  );
};

export default PlaymatHeader;
