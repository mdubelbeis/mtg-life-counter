import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import Playmat from "../../components/ui/Playmat";
import { useState } from "react";
import MobileMenu from "../../components/PlaymatHeader/MobileMenu";

const TwoPlayers: React.FC = () => {
  let playerOneStats = useSelector((state: RootState) => state.PlayerOne);
  let playerTwoStats = useSelector((state: RootState) => state.PlayerTwo);
  const [mobileMenuOpacity, setMobileMenuOpacity] = useState<string>("0");
  const [menuBackground, setMenuBackground] = useState(
    "text-white bg-black p-4 rounded-full"
  );
  const [bgColor, setBgColor] = useState<string>("");
  const [altColor, setAltColor] = useState<string>("bg-[#3B82F6]");

  const handleNewBgColor = (color: string) => {
    setBgColor(`bg-[${color}]`); //
  };

  const handleMenuClick = () => {
    if (mobileMenuOpacity === "0") {
      setMobileMenuOpacity("100");
      setMenuBackground("text-white bg-black p-4 rounded-full");
    } else {
      setMobileMenuOpacity("0");
      setMenuBackground("text-black bg-white p-4 rounded-full");
    }
  };

  return (
    <div className={`relative w-screen h-screen`}>
      {/* Mobile Menu */}
      <MobileMenu onClick={handleMenuClick} menuBackground={menuBackground} />
      {/* Player 1 */}
      <div className="w-full h-1/2 rotate-180">
        <Playmat
          bgColor={bgColor}
          altColor={altColor}
          playerStats={playerOneStats}
          opacity={mobileMenuOpacity}
          handleNewBgColor={handleNewBgColor}
        />
      </div>
      {/* Player 2 */}
      <div className="w-full h-1/2">
        <Playmat
          bgColor={bgColor}
          altColor={altColor}
          playerStats={playerTwoStats}
          opacity={mobileMenuOpacity}
          handleNewBgColor={handleNewBgColor}
        />
      </div>
    </div>
  );
};

export default TwoPlayers;
