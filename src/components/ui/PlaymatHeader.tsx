const PlaymatHeader: React.FC = () => {
  // TODO: CANI? Get commander name, query the API, get an img and set game-board background???

  return (
    <header>
      <div>
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
