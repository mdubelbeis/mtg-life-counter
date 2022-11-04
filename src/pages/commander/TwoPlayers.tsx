import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import Playmat from "../../components/ui/Playmat";
import MobileMenu from "../../components/PlaymatHeader/MobileMenu";

const TwoPlayers: React.FC = () => {
  let playerOneStats = useSelector((state: RootState) => state.PlayerOne);
  let playerTwoStats = useSelector((state: RootState) => state.PlayerTwo);
  const [mobileMenuOpacity, setMobileMenuOpacity] = useState<string>("0");
  const [closeMenuIconBackground, setCloseMenuIconBackground] = useState(
    "text-white bg-black p-4 rounded-full"
  );

  const handleMenuClick = () => {
    if (mobileMenuOpacity === "0") {
      setMobileMenuOpacity("100");
      setCloseMenuIconBackground("text-black bg-white p-4 rounded-full");
    } else {
      setMobileMenuOpacity("0");
      setCloseMenuIconBackground("text-white bg-black p-4 rounded-full");
    }
  };

  return (
    <div className={`relative w-screen h-screen overflow-scroll`}>
      {/* Mobile Menu */}
      <MobileMenu
        onClick={handleMenuClick}
        menuBackground={closeMenuIconBackground}
      />
      {/* Player 1 */}
      <div className="w-full h-1/2 rotate-180">
        <Playmat playerStats={playerOneStats} opacity={mobileMenuOpacity} />
      </div>
      {/* Player 2 */}
      <div className="w-full h-1/2">
        <Playmat playerStats={playerTwoStats} opacity={mobileMenuOpacity} />
      </div>
    </div>
  );
};

export default TwoPlayers;
