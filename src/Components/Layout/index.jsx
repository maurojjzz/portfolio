import "./module.layout.css";
import { useState } from "react";
import Header from "../Header";
import ParticlesComponent from "../Particles";
import { HamburguerMenu } from "../Shared";

const Layout = () => {
  const [menuClick, setMenuClick] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    if (menuClick) {
      setMenuClick(false);
    } else {
      setShowMenu(true);
      setMenuClick(true);
    }
  };

  const handleMenuCloseComplete = () => {
    setShowMenu(false);
  };

  return (
    <div className={`relative flex flex-col h-screen w-screen `}>
      <ParticlesComponent id={"particles"} />
      <Header setMenuClick={handleMenuClick} menuClick={menuClick} />
      {showMenu && <HamburguerMenu menuClick={menuClick} onCloseComplete={handleMenuCloseComplete} />}

      <div className={`border border-red-500 flex-grow`}>
        <h1 className="text-white flex ">Este va a ser el container</h1>
      </div>
    </div>
  );
};

export default Layout;
