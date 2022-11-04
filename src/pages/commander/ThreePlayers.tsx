import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import Playmat from "../../components/ui/Playmat";
import { useState } from "react";
import MobileMenu from "../../components/PlaymatHeader/MobileMenu";
import PlaySide from "../../components/ui/PlaySide";

const ThreePlayers: React.FC = () => {
  const playerOneStats = useSelector((state: RootState) => state.PlayerOne);
  const playerTwoStats = useSelector((state: RootState) => state.PlayerTwo);
  const playerThreeStats = useSelector((state: RootState) => state.PlayerThree);
  const playerFourStats = useSelector((state: RootState) => state.PlayerFour);

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
    <div className="relative w-screen h-screen text-black grid grid-cols-2 grid-rows-2">
      <MobileMenu onClick={handleMenuClick} menuBackground={menuBackground} />
      <PlaySide>
        <div className="w-full h-full rotate-180">
          <Playmat playerStats={playerOneStats} opacity={mobileMenuOpacity} />
        </div>
        <div className="w-full h-full">
          <Playmat playerStats={playerTwoStats} opacity={mobileMenuOpacity} />
        </div>
      </PlaySide>
      <PlaySide>
        <div className="w-full h-full rotate-180">
          <Playmat playerStats={playerThreeStats} opacity={mobileMenuOpacity} />
        </div>
        <div className="w-full h-full bg-black text-white grid place-content-center">
          {/* <Playmat playerStats={playerFourStats} opacity={mobileMenuOpacity} /> */}
          Advert?
        </div>
      </PlaySide>
    </div>
  );
};

export default ThreePlayers;
