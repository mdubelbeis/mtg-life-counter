import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";

import Playmat from "../../components/ui/Playmat";

const TwoPlayers: React.FC = () => {
  const playerOneStats = useSelector((state: RootState) => state.PlayerOne);
  const playerTwoStats = useSelector((state: RootState) => state.PlayerTwo);
  return (
    <div className="w-screen h-screen text-black">
      <div className="w-full h-1/2 rotate-180 bg-slate-500">
        <Playmat playerStats={playerOneStats} />
      </div>
      <div className="w-full h-1/2">
        <Playmat playerStats={playerTwoStats} />
      </div>
    </div>
  );
};

export default TwoPlayers;
