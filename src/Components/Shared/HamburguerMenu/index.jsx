import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HamburguerMenu = ({ menuClick, onCloseComplete }) => {
  let container = useRef();
  let anim = useRef(null);

  useGSAP(() => {
    anim.current = gsap.fromTo(container.current, { x: "100%" }, { x: "0%", duration: 1, ease: "power3.inOut" });
    return () => {
      if (anim.current) {
        anim.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    if (!menuClick && anim.current) {
      gsap.fromTo(container.current, { x: "0%" }, { x: "100%", duration: 1, ease: "power3.inOut" }).then(onCloseComplete);
    }
  }, [menuClick, onCloseComplete]);

  return (
    <div
      ref={container}
      className={`fixed inset-0 flex justify-center items-center z-10 w-screen h-screen bg-zinc-700`}
    ></div>
  );
};

export default HamburguerMenu;
