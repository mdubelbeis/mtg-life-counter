import { useSelector, useDispatch } from "react-redux";
import { CgMenuGridR } from "react-icons/cg";
import { RootState } from "../../app/store";

import Playmat from "../../components/ui/Playmat";
import { useState } from "react";

const TwoPlayers: React.FC = () => {
  const playerOneStats = useSelector((state: RootState) => state.PlayerOne);
  const playerTwoStats = useSelector((state: RootState) => state.PlayerTwo);
  const [mobileMenuOpacity, setMobileMenuOpacity] = useState<"0" | "100">("0");

  const handleMenuClick = () => {
    if (mobileMenuOpacity === "0") {
      setMobileMenuOpacity("100");
    } else {
      setMobileMenuOpacity("0");
    }
  };
  return (
    <div className="relative w-screen h-screen text-black">
      <div
        onClick={handleMenuClick}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white"
      >
        <CgMenuGridR className="h-10 w-10" />
      </div>
      <div className="w-full h-1/2 rotate-180 bg-slate-500">
        <Playmat playerStats={playerOneStats} opacity={mobileMenuOpacity} />
      </div>
      <div className="w-full h-1/2">
        <Playmat playerStats={playerTwoStats} opacity={mobileMenuOpacity} />
      </div>
    </div>
  );
};

export default TwoPlayers;
