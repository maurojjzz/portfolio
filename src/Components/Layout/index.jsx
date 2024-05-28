import "./module.layout.css";
import { useState } from "react";
import Header from "../Header";
import ParticlesComponent from "../Particles";
import {HamburguerMenu} from "../Shared";

const Layout = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <div className={`relative flex flex-col h-screen w-screen `}>
      <ParticlesComponent id={"particles"} />
      <Header setMenuClick={setMenuClick} menuClick={menuClick}/>
      {menuClick && <HamburguerMenu menuClick={menuClick} />}

      <div className={`border border-red-500 flex-grow`}>
        <h1 className="text-white flex ">Este va a ser el container</h1>
      </div>
    </div>
  );
};

export default Layout;
