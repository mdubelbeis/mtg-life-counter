import { useState } from "react";
import { CgMenuGridR, CgClose } from "react-icons/cg";

interface MobileMenuProps {
  onClick: () => void;
  menuBackground: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClick, menuBackground }) => {
  const [switchMenuIcon, setSwitchMenuIcon] = useState(false);

  const handleIconClick = () => {
    onClick();
    setSwitchMenuIcon(!switchMenuIcon);
  };

  return (
    <div
      onClick={handleIconClick}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border-[1px] shadow-lg border-white ${menuBackground}`}
    >
      {!switchMenuIcon && <CgMenuGridR className="h-10 w-10" />}
      {switchMenuIcon && <CgClose className="h-10 w-10" />}
    </div>
  );
};

export default MobileMenu;
