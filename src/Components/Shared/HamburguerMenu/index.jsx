import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HamburguerMenu = () => {
  let container = useRef();

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(container.current, { x: "100%" }, { x: "0%", duration: 1, ease: "power3.inOut" });
      }, container);

      return () =>{ 
        ctx.revert(); 
      };
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className={`fixed inset-0 flex justify-center items-center z-10 w-screen h-screen bg-zinc-700`}
    ></div>
  );
};

export default HamburguerMenu;
