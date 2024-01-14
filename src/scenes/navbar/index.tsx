import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
// type Props = {}

const Navbar = () => {
  const flexBetween = "flex items-center justify-between ";
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
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <p>Home</p>
                <p>Beneficios</p>
                <p>Nuestras Clases</p>
                <p>Contacto</p>
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign in</p>
                <button>Inscribite</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
