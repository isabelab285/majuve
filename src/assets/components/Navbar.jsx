import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const go = (c) => (c === "home" ? navigate("/") : navigate(`/category/${c}`));
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm z-50 relative">
      <div className="container mx-auto px-4 py-3 flex items-center gap-6">
        {/* Logo principal */}
        <div
          className="font-black text-xl cursor-pointer select-none"
          onClick={() => go("home")}
        >
          MAJUVE
        </div>

        {/* Navegación principal */}
        <nav className="flex gap-4 items-center ml-4 relative">
          <button
            onClick={() => go("nuevo")}
            className="py-2 px-3 hover:text-purple-500 transition-colors"
          >
            NUEVO
          </button>

          {/* Submenú rostro */}
          <div
            className="relative"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >
            <button className="py-2 px-3 hover:text-purple-500 transition-colors">
              MAQUILLAJE
            </button>

            <div
              className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md flex flex-col w-40 z-50 transition-all duration-300 ${
                submenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <button
                onClick={() => go("face")}
                className="px-4 py-2 text-left hover:bg-purple-100"
              >
                ROSTRO
                </button>
              <button
                onClick={() => go("lips")}
                className="px-4 py-2 text-left hover:bg-purple-100"
              >
                LABIOS
              </button>
              <button
                onClick={() => go("eyes")}
                className="px-4 py-2 text-left hover:bg-purple-100"
              >
                OJOS
              </button>
              <button
                onClick={() => go("skincare")}
                className="px-4 py-2 text-left hover:bg-purple-100"
              >
                SKINCARE
              </button>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >
            <button className="py-2 px-3 hover:text-purple-500 transition-colors">
              ACCESORIOS
            </button>

            <div
              className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md flex flex-col w-40 z-50 transition-all duration-300 ${
                submenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <button
                onClick={() => go("hair")}
                className="px-4 py-2 text-left hover:bg-purple-100"
              >
                PELO
                </button>
              <button
                onClick={() => go("brushes")}
                className="px-4 py-2 text-left hover:bg-purple-100"
              >
                BROCHAS
              </button>
              <button
                onClick={() => go("beauty")}
                className="px-4 py-2 text-left hover:bg-purple-100"
              >
                BEAUTY BLENDERS
              </button>
              <button
                onClick={() => go("more")}
                className="px-4 py-2 text-left hover:bg-purple-100"
              >
                VARIOS
              </button>
              <button
                onClick={() => go("cosmetic")}
                className="px-4 py-2 text-left hover:bg-purple-100"
              >
                COSMETIQUERA
              </button>
            </div>
          </div>
        </nav>

        {/* Iconos */}
        <div className="ml-auto flex items-center gap-4">
          <button className="py-2 px-3 text-xl">🛒</button>
          <div className="w-8 h-8 rounded-full bg-gray-200" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
