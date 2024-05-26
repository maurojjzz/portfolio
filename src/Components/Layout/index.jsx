import "./module.layout.css";
import Header from "../Header";
import ParticlesComponent from "../Particles";

const Layout = () => {
  return (
    <div className={`flex flex-col h-screen  w-screen`}>
      <ParticlesComponent id={"particles"} />
      <Header />
      <div className={`border border-red-500 flex-grow`}>
        <h1 className="text-white flex ">Este va a ser el container</h1>
      </div>
    </div>
  );
};

export default Layout;
