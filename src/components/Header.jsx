import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { codeplanet } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import Profile from "./Profile";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <>
    <div
      className={`fixed header top-0 left-0 w-full z-50 transition-all border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/10 backdrop-blur-sm"
      }`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-2">
        <a className="w-[19rem] xl:mr-8 flex" href="#hero">
          <img src={codeplanet} width={70} height={40} alt="codeplanet" />
          <h1 className="font-tt font-bold tracking-widest my-6">CurlyIDE<span className="hidden lg:inline md:inline sm:inline"></span></h1>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-3 py-1 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>
        <Profile />
        <ToastContainer className="mt-5 lg:mt-[5rem]"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss

          draggable
          pauseOnHover
          theme="dark"

          />
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
  6        <MenuSvg openNavigation={openNavigation} />
        </Button>
        
        </div>
      </div>
    </>
  );
};

export default Header;