import React from "react";

const ProductCard = ({ product }) => (
  <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
    <img
      src={product.imageUrl || "/images/placeholder.png"}
      onError={(e) => (e.target.src = "/images/placeholder.png")}
      alt={product.name}
      className="w-full h-40 object-cover rounded-md mb-3"
    />
    <h3 className="font-semibold text-lg">{product.name}</h3>
    <p className="text-gray-500 text-sm capitalize">
      {product.category}
      {product.subCategory ? ` • ${product.subCategory}` : ""}
    </p>
    <p className="text-[#b07c5e] font-bold mt-2">${product.price}</p>
  </div>
);

export default ProductCard;
