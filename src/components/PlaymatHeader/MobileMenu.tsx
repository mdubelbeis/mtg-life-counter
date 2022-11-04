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
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[0.5px] shadow-xl ${
        switchMenuIcon ? "border-black" : "border-white"
      } ${menuBackground} z-[1000]`}
    >
      {!switchMenuIcon ? (
        <CgMenuGridR className="h-10 w-10" />
      ) : (
        <CgClose className="h-10 w-10" />
      )}
    </div>
  );
};

export default MobileMenu;
