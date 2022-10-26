import { useDispatch } from "react-redux";
import {
  takeCommanderDamagePlayerOne,
  takePoisonDamagePlayerOne,
  gainCommanderDamagePlayerOne,
  gainPoisonDamagePlayerOne,
} from "../../app/commander/PlayerOneSlice";
import {
  takeCommanderDamagePlayerTwo,
  takePoisonDamagePlayerTwo,
  gainCommanderDamagePlayerTwo,
  gainPoisonDamagePlayerTwo,
} from "../../app/commander/PlayerTwoSlice";
import {
  takeCommanderDamagePlayerThree,
  takePoisonDamagePlayerThree,
  gainCommanderDamagePlayerThree,
  gainPoisonDamagePlayerThree,
} from "../../app/commander/PlayerThreeSlice";
import {
  takeCommanderDamagePlayerFour,
  takePoisonDamagePlayerFour,
  gainCommanderDamagePlayerFour,
  gainPoisonDamagePlayerFour,
} from "../../app/commander/PlayerFourSlice";

interface DamageCounterProps {
  title: string;
  counter: number;
  player: string;
}

const DamageCounters: React.FC<DamageCounterProps> = ({
  title,
  counter,
  player,
}) => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    switch (title) {
      case "Commander Damage":
        switch (player) {
          case "PlayerOne":
            dispatch(gainCommanderDamagePlayerOne());
            break;
          case "PlayerTwo":
            dispatch(gainCommanderDamagePlayerTwo());
            break;
          case "PlayerThree":
            dispatch(gainCommanderDamagePlayerThree());
            break;
          case "PlayerFour":
            dispatch(gainCommanderDamagePlayerFour());
            break;
          default:
            console.log("Error: No such Action Creator");
        }
        break;
      case "Poison Damage":
        switch (player) {
          case "PlayerOne":
            dispatch(gainPoisonDamagePlayerOne());
            break;
          case "PlayerTwo":
            dispatch(gainPoisonDamagePlayerTwo());
            break;
          case "PlayerThree":
            dispatch(gainPoisonDamagePlayerThree());
            break;
          case "PlayerFour":
            dispatch(gainPoisonDamagePlayerFour());
            break;
          default:
            console.log("Error: No such Action Creator");
        }
        break;
    }
  };

  const handleIncrement = () => {
    switch (title) {
      case "Commander Damage":
        switch (player) {
          case "PlayerOne":
            dispatch(takeCommanderDamagePlayerOne());
            break;
          case "PlayerTwo":
            dispatch(takeCommanderDamagePlayerTwo());
            break;
          case "PlayerThree":
            dispatch(takeCommanderDamagePlayerThree());
            break;
          case "PlayerFour":
            dispatch(takeCommanderDamagePlayerFour());
            break;
          default:
            console.log("Error: No such Action Creator");
        }
        break;
      case "Poison Damage":
        switch (player) {
          case "PlayerOne":
            dispatch(takePoisonDamagePlayerOne());
            break;
          case "PlayerTwo":
            dispatch(takePoisonDamagePlayerTwo());
            break;
          case "PlayerThree":
            dispatch(takePoisonDamagePlayerThree());
            break;
          case "PlayerFour":
            dispatch(takePoisonDamagePlayerFour());
            break;
          default:
            console.log("Error: No such Action Creator");
        }
        break;
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 h-min p-2 rounded text-[#2c3142] bg-white w-full">
      <h3 className="font-bold">{title}:</h3>
      <span>{counter}</span>
      <div className="flex gap-6 text-xl mr-2 items-center">
        <span onClick={handleDecrement} className="hover:cursor-pointer">
          -
        </span>
        <span onClick={handleIncrement} className="hover:cursor-pointer">
          +
        </span>
      </div>
    </div>
  );
};

export default DamageCounters;
