import TwoPlayers from "../commander/TwoPlayers";
import { useDispatch } from "react-redux";
import { setPlayerOneLifeTotal } from "../../app/commander/PlayerOneSlice";
import { setPlayerTwoLifeTotal } from "../../app/commander/PlayerTwoSlice";
import { setPlayerThreeLifeTotal } from "../../app/commander/PlayerThreeSlice";
import { setPlayerFourLifeTotal } from "../../app/commander/PlayerFourSlice";
import { useEffect } from "react";

const Standard: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPlayerOneLifeTotal(20));
    dispatch(setPlayerTwoLifeTotal(20));
    dispatch(setPlayerThreeLifeTotal(20));
    dispatch(setPlayerFourLifeTotal(20));
  }, []);

  return (
    <div>
      <TwoPlayers />
    </div>
  );
};

export default Standard;
