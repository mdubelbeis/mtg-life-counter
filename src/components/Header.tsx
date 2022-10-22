import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <header className="hidden lg:block lg:p-8 lg:bg-black lg:text-white lg:font-mono lg:text-4xl">
        <Link to="/">MTG LIFE COUNTER</Link>
      </header>
      <header className="lg:hidden">Hamburger Menu</header>
    </>
  );
};

export default Header;
