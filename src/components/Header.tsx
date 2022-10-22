import HeaderShell from "./ui/HeaderShell";

const Header: React.FC = () => {
  return (
    <>
      <HeaderShell className="hidden lg:block lg:p-10 lg:bg-black lg:text-white lg:font-mono lg:text-6xl">
        MTG LIFE COUNTER
      </HeaderShell>
      <HeaderShell className="lg:hidden">Hamburger Menu</HeaderShell>
    </>
  );
};

export default Header;
