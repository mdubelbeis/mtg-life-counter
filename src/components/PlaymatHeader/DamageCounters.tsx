import { useDispatch } from "react-redux";
import { takeCommanderDamagePlayerOne } from "../../app/commander/PlayerOneSlice";
import { takeCommanderDamagePlayerTwo } from "../../app/commander/PlayerTwoSlice";
import { takeCommanderDamagePlayerThree } from "../../app/commander/PlayerThreeSlice";
import { takeCommanderDamagePlayerFour } from "../../app/commander/PlayerFourSlice";

interface DamageCounterProps {
  title: string;
  counter: number;
}

const DamageCounters: React.FC<DamageCounterProps> = ({ title, counter }) => {
  const handleDecrement = () => {
    switch (title) {
      case "Commander Damage":
        // dispatch() -- need to solve a way to find which player to dispatch
        break;
      case "Poison Damage":
        // dispatch() -- need to solve a way to find which player to dispatch
        break;
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 h-min p-2 rounded text-[#2c3142] bg-white w-full">
      <h3 className="font-bold">{title}:</h3>
      <span>{counter}</span>
      <div className="flex gap-6 text-xl mr-2 items-center">
        <span onClick={handleDecrement}>-</span>
        <span>+</span>
      </div>
    </div>
  );
};

export default DamageCounters;
