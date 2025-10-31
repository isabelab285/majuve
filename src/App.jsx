import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🧩 Components
import Navbar from "./assets/components/Navbar.jsx";
import CategoryPage from "./assets/components/pages/CategoryPage.jsx";
import DetailProduct from "./assets/components/product/DetailProduct.jsx";

// 🏠 Home Sections
import PromocionBanner from "./assets/components/product/PromocionBanner.jsx";
import MainProduct from "./assets/components/product/MainProduct.jsx";
import FeaturedProducts from "./assets/components/product/FeaturedProducts.jsx";
import SlideProduct from "./assets/components/product/SlideProduct.jsx";
import FooterProduct from "./assets/components/product/FooterProduct.jsx";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      
      {/* 🛍️ Productos destacados */}
      <MainProduct />
      
      {/* 💎 Productos recomendados */}
      <FeaturedProducts />
      
      {/* 🔥 Banner superior */}
      <PromocionBanner />

      {/* 📦 Footer */}
      <FooterProduct />
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Barra de navegación superior */}
      <Navbar />

      {/* Contenido principal */}
      <main className="min-h-screen">
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<HomePage />} />

          {/* Páginas dinámicas */}
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<DetailProduct />} />

          {/* Ruta de fallback */}
          <Route
            path="*"
            element={
              <div className="p-12 text-center text-gray-500">
                404 — Página no encontrada 😢
              </div>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
