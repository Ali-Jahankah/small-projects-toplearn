import Menusvg from "./Menusvg";
import MobileNavBody from "./MobileNavBody";
import NavBody from "./NavBody";

const MainLayouts = ({ children }) => {
  return (
    <>
      <Menusvg></Menusvg>

      <NavBody></NavBody>
      <MobileNavBody></MobileNavBody>
      {children}
    </>
  );
};

export default MainLayouts;
