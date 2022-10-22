import { CgMenuGridR } from "react-icons/cg";

interface MobileMenuProps {
  onClick: () => void;
  menuBackground: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClick, menuBackground }) => {
  return (
    <div
      onClick={onClick}
      className={`lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${menuBackground}`}
    >
      <CgMenuGridR className="h-10 w-10" />
    </div>
  );
};

export default MobileMenu;
