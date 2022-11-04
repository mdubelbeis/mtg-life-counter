import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const linkStyles = `bg-black text-white rounded-lg py-4 hover:bg-white hover:text-black`;
  // * SELECTION FOR EITHER COMMANDER OR STANDARD
  return (
    <main className="flex w-screen h-screen justify-around items-center">
      <section className="flex w-full h-full flex-col justify-around gap-20 items-center lg:w-1/2 bg-[#005F9D]">
        <h1 className="text-5xl xl:text-6xl text-center">LOGO</h1>
        <ul className="text-center w-4/12 mx-auto flex flex-col gap-6 text-blue-500">
          <Link to="commander" className={linkStyles}>
            <li>COMMANDER</li>
          </Link>
          <Link to="standard" className={linkStyles}>
            <li>STANDARD</li>
          </Link>
        </ul>
      </section>
      <section className="hidden lg:w-1/2 bg-black lg:flex items-center justify-center h-full p-20">
        <img className="" src="/assets/imgs/magicLogo.png" alt="MTG logo" />
      </section>
    </main>
  );
};

export default HomePage;
