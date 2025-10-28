import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoSneakes from "@/assets/images/logo.png";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/assets/components/icons/MenuIcons";
import CartIcon from "@/assets/components/icons/CartIcon";
import CloseIcon from "@/assets/components/icons/CloseIcon";
import NavLinkHeader from "@/assets/components/header/NavLinkHeader";

const MainHeader = ({ cartItemCount = 0 }) => {
  const [navClass, setNavClass] = useState(
    "hidden font-bold md:flex md:gap-8 top-0 left-0 p-8 md:static md:p-0 md:h-auto"
  );

  const [submenuOpen, setSubmenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setNavClass(
      "absolute w-4/5 z-20 font-bold flex flex-col bg-white h-full p-8 gap-y-[21px] top-0 left-0 md:static md:p-0 md:h-auto md:flex-row md:w-auto md:z-auto"
    );
  };

  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-bold md:flex md:gap-8 top-0 left-0 p-8 md:static md:p-0 md:h-auto"
    );
    setSubmenuOpen(false);
  };

  const go = (path) => {
    navigate(path);
    handleCloseMenu();
  };

  return (
    <>
      <header className="w-full flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-sm z-50">
        {/* Botón Menú (Móvil) */}
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>

        {/* Logo */}
        <img
          src={LogoSneakes}
          alt="Logo Majuve"
          className="h-6 cursor-pointer"
          onClick={() => go("/")}
        />

        {/* Navegación */}
        <nav className={navClass}>
          <button className="mb-8 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>

          <NavLinkHeader text="NUEVO" onClick={() => go("/category/nuevo")} />

          {/* Submenú ROSTRO */}
          <div
            className="relative group"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >
            <button
              onClick={() => setSubmenuOpen(!submenuOpen)}
              className="relative py-10 group text-black hover:text-purple-400 transition-all duration-700"
            >
              ROSTRO
              <span className="absolute bottom-0 left-0 block h-1 w-full scale-x-0 group-hover:scale-x-100 group-hover:bg-purple-400 transition-all duration-700"></span>
            </button>

            {/* Submenú */}
            <div
              className={`${
                submenuOpen ? "flex" : "hidden"
              } flex-col absolute md:top-full left-0 bg-white shadow-lg rounded-xl p-3 gap-2 w-44 mt-1`}
            >
              <button
                onClick={() => go("/category/lips")}
                className="text-sm text-gray-700 hover:text-purple-400 text-left transition-all duration-300 py-1 px-2"
              >
                LABIOS
              </button>
              <button
                onClick={() => go("/category/eyes")}
                className="text-sm text-gray-700 hover:text-purple-400 text-left transition-all duration-300 py-1 px-2"
              >
                OJOS
              </button>
              <button
                onClick={() => go("/category/skincare")}
                className="text-sm text-gray-700 hover:text-purple-400 text-left transition-all duration-300 py-1 px-2"
              >
                SKINCARE
              </button>
            </div>
          </div>

          <NavLinkHeader
            text="ACCESORIOS"
            onClick={() => go("/category/accessories")}
          />
        </nav>

        {/* Carrito y avatar */}
        <div className="flex items-center gap-5">
          <button className="relative">
            <CartIcon />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
          <img
            src={AvatarImage}
            alt="Avatar"
            className="w-10 h-10 rounded-full border-2 border-transparent hover:border-purple-400 transition cursor-pointer"
          />
        </div>
      </header>

      {/* Línea divisoria */}
      <div className="w-full h-[1px] bg-gray-300"></div>
    </>
  );
};

export default MainHeader;
