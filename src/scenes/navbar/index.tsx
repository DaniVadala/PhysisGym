import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";    
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  selectedPage:SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({
  selectedPage,
  setSelectedPage
}: Props) => {
  const flexBetween = "flex items-center justify-between ";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isMenuToggled = false;
  return (
    <nav>
      <div className={` ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <div className={` ${flexBetween} gap-3`}>
            <img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/3/36/Pakua.svg" alt="" />
            <p className="text-lg font-bold whitespace-nowrap">
              <span className="text-primary-500">PHYSIS</span>{" "}
              <span className="text-secondary-500">GYM</span>
            </p>{" "}
            </div>
            
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link 
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}    
                />
                <Link 
                    page="Beneficios"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}    
                />
                <Link 
                    page="Nuestras Clases"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}    
                />
                <Link 
                    page="Contacto"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}    
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign in</p>
                <button>Inscribite</button>
              </div>
              
            </div>) : (
                <button 
                className="rounded-full bg-secondary-500 p-2"
                onClick= {()=> setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
            )}
          </div> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
