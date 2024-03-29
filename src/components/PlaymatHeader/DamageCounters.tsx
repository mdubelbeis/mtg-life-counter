import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  incrementCommanderDamagePlayerOne,
  incrementPoisonDamagePlayerOne,
  decrementCommanderDamagePlayerOne,
  decrementPoisonDamagePlayerOne,
} from "../../app/commander/PlayerOneSlice";
import {
  incrementCommanderDamagePlayerTwo,
  incrementPoisonDamagePlayerTwo,
  decrementCommanderDamagePlayerTwo,
  decrementPoisonDamagePlayerTwo,
} from "../../app/commander/PlayerTwoSlice";
import {
  incrementCommanderDamagePlayerThree,
  incrementPoisonDamagePlayerThree,
  decrementCommanderDamagePlayerThree,
  decrementPoisonDamagePlayerThree,
} from "../../app/commander/PlayerThreeSlice";
import {
  incrementCommanderDamagePlayerFour,
  incrementPoisonDamagePlayerFour,
  decrementCommanderDamagePlayerFour,
  decrementPoisonDamagePlayerFour,
} from "../../app/commander/PlayerFourSlice";
import { useEffect } from "react";

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

  let p1CommanderDamage = useSelector(
    (state: RootState) => state.PlayerOne.commanderDamage
  );
  let p2CommanderDamage = useSelector(
    (state: RootState) => state.PlayerTwo.commanderDamage
  );
  let p3CommanderDamage = useSelector(
    (state: RootState) => state.PlayerThree.commanderDamage
  );
  let p4CommanderDamage = useSelector(
    (state: RootState) => state.PlayerFour.commanderDamage
  );

  let p1PoisonDamage = useSelector(
    (state: RootState) => state.PlayerOne.poisonTotal
  );
  let p2PoisonDamage = useSelector(
    (state: RootState) => state.PlayerTwo.poisonTotal
  );
  let p3PoisonDamage = useSelector(
    (state: RootState) => state.PlayerThree.poisonTotal
  );
  let p4PoisonDamage = useSelector(
    (state: RootState) => state.PlayerFour.poisonTotal
  );

  const handleDecrement = () => {
    switch (title) {
      case "COMMANDER DMG":
        switch (player) {
          case "PlayerOne":
            if (p1CommanderDamage === 0) break;
            dispatch(decrementCommanderDamagePlayerOne());
            break;
          case "PlayerTwo":
            if (p2CommanderDamage === 0) break;
            dispatch(decrementCommanderDamagePlayerTwo());
            break;
          case "PlayerThree":
            if (p3CommanderDamage === 0) break;
            dispatch(decrementCommanderDamagePlayerThree());
            break;
          case "PlayerFour":
            if (p4CommanderDamage === 0) break;
            dispatch(decrementCommanderDamagePlayerFour());
            break;
          default:
            console.log("Error: No such Action Creator");
        }
        break;
      case "POISON DMG":
        switch (player) {
          case "PlayerOne":
            if (p1PoisonDamage === 0) break;
            dispatch(decrementPoisonDamagePlayerOne());
            break;
          case "PlayerTwo":
            if (p2PoisonDamage === 0) break;
            dispatch(decrementPoisonDamagePlayerTwo());
            break;
          case "PlayerThree":
            if (p3PoisonDamage === 0) break;
            dispatch(decrementPoisonDamagePlayerThree());
            break;
          case "PlayerFour":
            if (p4PoisonDamage === 0) break;
            dispatch(decrementPoisonDamagePlayerFour());
            break;
          default:
            console.log("Error: No such Action Creator");
        }
        break;
    }
  };

  const handleIncrement = () => {
    switch (title) {
      case "COMMANDER DMG":
        switch (player) {
          case "PlayerOne":
            if (p1CommanderDamage === 21) break;
            dispatch(incrementCommanderDamagePlayerOne());
            break;
          case "PlayerTwo":
            if (p2CommanderDamage === 21) break;
            dispatch(incrementCommanderDamagePlayerTwo());
            break;
          case "PlayerThree":
            if (p3CommanderDamage === 21) break;
            dispatch(incrementCommanderDamagePlayerThree());
            break;
          case "PlayerFour":
            if (p4CommanderDamage === 21) break;
            dispatch(incrementCommanderDamagePlayerFour());
            break;
          default:
            console.log("Error: No such Action Creator");
        }
        break;
      case "POISON DMG":
        switch (player) {
          case "PlayerOne":
            if (p1PoisonDamage === 10) break;
            dispatch(incrementPoisonDamagePlayerOne());
            break;
          case "PlayerTwo":
            if (p2PoisonDamage === 10) break;
            dispatch(incrementPoisonDamagePlayerTwo());
            break;
          case "PlayerThree":
            if (p3PoisonDamage === 10) break;
            dispatch(incrementPoisonDamagePlayerThree());
            break;
          case "PlayerFour":
            if (p4PoisonDamage === 10) break;
            dispatch(incrementPoisonDamagePlayerFour());
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
        <div onClick={handleDecrement} className="hover:cursor-pointer p-2">
          -
        </div>
        <div onClick={handleIncrement} className="hover:cursor-pointer">
          +
        </div>
      </div>
    </div>
  );
};

export default DamageCounters;
