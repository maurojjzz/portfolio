// import { useRef } from "react";
import { MenuIcon } from "../Shared";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

const Header = ({ setMenuClick, menuClick }) => {

  // useGSAP(() => {
  //   gsap.fromTo( ".menu",{ x: -80 }, { x: 40 });   
  // });  

  return (
    <div className={`sm:border border-yellow-700 flex h-[70px] items-center justify-between flex-row-reverse sm:flex-row`}>
      <div onClick={() => setMenuClick(!menuClick)} className={`cursor-pointer ms-2 `}>
        <MenuIcon />
      </div>
      <div className={`flex flex-row gap-2 me-2 invisible sm:visible`}>
        <div className={` w-[50px] h-[50px] bg-slate-500`}>ES</div>
        <div className={` w-[50px] h-[50px] bg-slate-500`}>EN</div>
      </div>
    </div>
  );
};

export default Header;
