import HeaderShell from "./HeaderShell";

const PlaymatHeader: React.FC = () => {
  // TODO: CANI? Get commander name, query the API, get an img and set game-board background???

  return (
    <HeaderShell>
      <div>
        <form onSubmit={() => {}}>
          <label>
            <input
              type="text"
              placeholder="Enter Commander"
              value={commander}
            />
          </label>
        </form>
      </div>
    </HeaderShell>
  );
};

export default PlaymatHeader;
