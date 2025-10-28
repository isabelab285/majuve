import React, { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../common/ProductCard.jsx";
import { allProducts } from "../../../data/products.js";

const PRODUCTS_PER_PAGE = 8;

const CategoryPage = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({ color: "all" });
  const [page, setPage] = useState(1);

  const normalized = (s) => String(s || "").toLowerCase().trim();

  const filteredProducts = useMemo(() => {
    if (!category) return [];
    const cat = normalized(category);
    return allProducts.filter((p) => {
      const match = normalized(p.category) === cat || normalized(p.subCategory) === cat;
      const colorMatch =
        filters.color === "all" || normalized(p.color) === normalized(filters.color);
      return match && colorMatch;
    });
  }, [category, filters]);

  useEffect(() => setPage(1), [category, filters]);

  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const currentProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold capitalize">{category}</h1>
      <p className="text-gray-500 my-2">{filteredProducts.length} productos encontrados</p>

      {/* Filtro color */}
      <div className="flex gap-4 my-4">
        <label>
          Color:
          <select
            value={filters.color}
            onChange={(e) => setFilters((f) => ({ ...f, color: e.target.value }))}
            className="ml-2 border px-2 py-1"
          >
            <option value="all">Todos</option>
            <option value="beige">Beige</option>
            <option value="rosado">Rosado</option>
            <option value="neutro">Neutro</option>
            <option value="negro">Negro</option>
          </select>
        </label>
      </div>

      {currentProducts.length === 0 ? (
        <div className="text-center text-gray-500 py-24">
          No hay productos para <strong>{category}</strong>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setPage((s) => Math.max(1, s - 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Anterior
            </button>
            <div>
              Página {page} / {pageCount}
            </div>
            <button
              onClick={() => setPage((s) => Math.min(pageCount, s + 1))}
              disabled={page === pageCount}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
