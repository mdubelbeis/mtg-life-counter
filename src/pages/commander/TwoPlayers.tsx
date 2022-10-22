import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import Playmat from "../../components/ui/Playmat";
import { useState } from "react";
import MobileMenu from "../../components/MobileMenu";

const TwoPlayers: React.FC = () => {
  const playerOneStats = useSelector((state: RootState) => state.PlayerOne);
  const playerTwoStats = useSelector((state: RootState) => state.PlayerTwo);
  const [mobileMenuOpacity, setMobileMenuOpacity] = useState<string>("0");
  const [menuBackground, setMenuBackground] = useState(
    "text-white bg-black p-4 rounded-full"
  );

  const handleMenuClick = () => {
    if (mobileMenuOpacity === "0") {
      setMobileMenuOpacity("100");
      setMenuBackground("text-black bg-white p-4 rounded-full");
    } else {
      setMobileMenuOpacity("0");
      setMenuBackground("text-white bg-black p-4 rounded-full");
    }
  };

  return (
    <div className="relative w-screen h-screen text-black">
      <MobileMenu onClick={handleMenuClick} menuBackground={menuBackground} />
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
