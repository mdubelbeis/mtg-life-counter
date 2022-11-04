import { Link } from "react-router-dom";

const Commander: React.FC = () => {
  const linkStyles = `bg-blue-500 text-white rounded-lg py-4`;
  return (
    <main className="flex flex-col lg:flex-row h-screen bg-white w-full text-black">
      <section className="flex h-full flex-col justify-around gap-20 items-center lg:w-1/2">
        <h1 className="text-6xl text-center">
          COMMANDER <br />
          COUNTER
        </h1>
        <div className="flex flex-col gap-10">
          <h3 className="text-5xl">How many Players?</h3>
          <ul className="text-center w-1/2 mx-auto flex flex-col gap-4 text-blue-500">
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
        <img
          className=""
          src="../../../public/assets/imgs/magicLogo.png"
          alt="MTG logo"
        />
      </section>
      {/* MODAL FOOTER */}
    </main>
  );
};

export default Commander;
