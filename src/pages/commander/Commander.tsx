import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlayerOneLifeTotal } from "../../app/commander/PlayerOneSlice";
import { setPlayerTwoLifeTotal } from "../../app/commander/PlayerTwoSlice";
import { setPlayerThreeLifeTotal } from "../../app/commander/PlayerThreeSlice";
import { setPlayerFourLifeTotal } from "../../app/commander/PlayerFourSlice";

const Commander: React.FC = () => {
  const dispatch = useDispatch();
  const linkStyles = `bg-black text-white rounded-lg py-4 w-full hover:bg-white hover:text-black`;

  useEffect(() => {
    dispatch(setPlayerOneLifeTotal(40));
    dispatch(setPlayerTwoLifeTotal(40));
    dispatch(setPlayerThreeLifeTotal(40));
    dispatch(setPlayerFourLifeTotal(40));
  });

  return (
    <main className="flex flex-col lg:flex-row h-screen bg-white w-full text-black">
      <section className="flex h-full flex-col justify-around gap-20 items-center lg:w-1/2 bg-[#005F9D]">
        <h1 className="text-5xl xl:text-6xl text-center">
          COMMANDER <br />
          COUNTER
        </h1>
        <div className="flex flex-col gap-10 w-full">
          <ul className="text-center w-6/12 lg:w-4/12 mx-auto flex flex-col gap-6 text-blue-500">
            <Link to="two-players" className={linkStyles}>
              <li>TWO PLAYERS</li>
            </Link>
            <Link to="three-players" className={linkStyles}>
              <li>THREE PLAYERS</li>
            </Link>
            <Link to="four-players" className={linkStyles}>
              <li>FOUR PLAYERS</li>
            </Link>
          </ul>
        </div>
      </section>
      <section className="hidden lg:w-1/2 bg-black lg:flex items-center justify-center p-20">
        <img className="" src="/assets/imgs/magicLogo.png" alt="MTG logo" />
      </section>
      {/* MODAL FOOTER */}
    </main>
  );
};

export default Commander;
