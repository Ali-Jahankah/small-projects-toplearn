import Menusvg from "../svg/Menusvg";
import MobileNavBody from "../main/MobileNavBody";
import NavBody from "../main/NavBody";

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
