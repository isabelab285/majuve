
import React from 'react';

// --- ESTUDIANTES: Aquí definirían los productos a mostrar en el inicio. ---
// Más adelante, estos datos vendrán de una base de datos o una API.
// Personalicen estos productos para que coincidan con los de sus empresas.

// --- PARA AGREGAR SUS PROPIAS IMÁGENES LOCALES: ---
// 1. Guarden sus imágenes de producto en esa carpeta (ej: mi-producto.jpg).
// 2. Importen cada imagen al principio de este archivo, dándole un nombre de variable. Por ejemplo:
//    import fotoCamisaCoral from '@/assets/images/camisa-coral.jpg';
//    import fotoShortsIndigo from '@/assets/images/shorts-indigo.jpg';
// 3. Finalmente, en la lista de abajo, reemplacen la URL de 'imageUrl' por la variable que acaban de crear.
//    Ejemplo: imageUrl: fotoCamisaCoral,

const featuredProducts = [
    {
        id: 1,
        name: 'Base fluida "GlowSkin"',
        category: 'ROSTRO',
        price: 58.55,
        imageUrl: 'https://placehold.co/600x800/dbeafe/60a5fa?text=Colección+Verano', // Rosa claro vibrante  -- Acá img
        bgColor: 'bg-pink-100', // Color de fondo para la tarjeta
        hoverBgColor: 'hover:bg-pink-200',
    },
    {
        id: 2,
        name: 'Paleta de Sombras "Vibrant Eyes"',
        category: 'OJOS',
        price: 74.99,
        imageUrl: 'https://placehold.co/600x800/dbeafe/60a5fa?text=Estilo+Urbano', // Azul claro vibrante  -- Acá img
        bgColor: 'bg-pink-100',
        hoverBgColor: 'hover:bg-pink-200',
    },
    {
        id: 3,
        name: 'Brillo de labios "Lush Lips"',
        category: 'LABIOS',
        price: 36.55,
        imageUrl: 'https://placehold.co/600x800/dbeafe/60a5fa?text=Primavera+Casual', // Naranja vibrante -- Acá img
        bgColor: 'bg-pink-100',
        hoverBgColor: 'hover:bg-pink-200',
    },
    {
        id: 4,
        name: 'Corrector "Flawless Finish"',
        category: 'ROSTRO',
        price: 25.99,
        imageUrl: 'https://placehold.co/600x800/dbeafe/60a5fa?text=Comodidad+Chic', // Verde menta vibrante  -- Acá img
        bgColor: 'bg-pink-100',
        hoverBgColor: 'hover:bg-pink-200',
    },
    {
        id: 5,
        name: 'Rubor en polvo"',
        category: 'ROSTRO',
        price: 45.00,
        imageUrl: 'https://placehold.co/600x800/dbeafe/60a5fa?text=Clásico+Moderno', // Gris claro  -- Acá img
        bgColor: 'bg-pink-100',
        hoverBgColor: 'hover:bg-pink-200',
    },
    {
        id: 6,
        name: 'Mascara de pestañas',
        category: 'OJOS',
        price: 42.99,
        imageUrl: 'https://placehold.co/600x800/dbeafe/60a5fa?text=Denim+Esencial', // Azul denim
        bgColor: 'bg-pink-100',
        hoverBgColor: 'hover:bg-pink-200',
    },
    {
        id: 7,
        name: 'Rujo Labial',
        category: 'LABIOS',
        price: 32.00,
        imageUrl: 'https://placehold.co/600x800/dbeafe/60a5fa?text=Accesorio+Trendy', // Morado suave
        bgColor: 'bg-pink-100',
        hoverBgColor: 'hover:bg-pink-200',
    },
    {
        id: 8,
        name: 'Iluminador',
        category: 'ROSTRO',
        price: 45.25,
        imageUrl: 'https://placehold.co/600x800/dbeafe/60a5fa?text=Estilo+Urbano', // Negro grisáceo
        bgColor: 'bg-pink-100',
        hoverBgColor: 'hover:bg-pink-200',
    },
];

const FeaturedProducts = () => {
    return (
        <section className="container mx-auto my-20 px-4 py-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl animate-fade-in">
            <div className="text-center mb-16 animate-slide-down">
                <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">Novedades Exclusivas</h2>
                <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                    Sumérgete en lo último de nuestra colección con diseños vanguardistas y colores que inspiran.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                {featuredProducts.map((product, index) => (
                    <div 
                        key={product.id} 
                        className={`relative rounded-3xl overflow-hidden p-6 shadow-lg transform transition-all duration-500 hover:scale-105 group ${product.bgColor} ${product.hoverBgColor} animate-fade-in-up`}
                        style={{animationDelay: `${index * 100}ms`}}
                    >
                        {/* Círculo de fondo decorativo */}
                        <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-30 ${product.bgColor.replace('100', '300')} transition-all duration-300 group-hover:w-32 group-hover:h-32`}></div>
                        <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-30 ${product.bgColor.replace('100', '300')} transition-all duration-300 group-hover:w-40 group-hover:h-40`}></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-full h-72 overflow-hidden mb-4 rounded-xl shadow-md">
                                <img 
                                    src={product.imageUrl} 
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-md text-gray-600 mb-3">{product.category}</p>
                            <p className="text-xl font-extrabold text-gray-900">${product.price.toFixed(2)}</p>
                            <button className="mt-6 font-bold text-white py-3 px-8 rounded-full bg-purple-500 shadow-md shadow-purple-500/30 hover:bg-purple-600 transition-all duration-300 transform group-hover:-translate-y-1">
                                Ver Producto
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
