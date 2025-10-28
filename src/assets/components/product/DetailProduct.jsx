import React, { useState } from 'react';
import CartIcon from '../icons/CartIcon.jsx';

export default () => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <section className="container mx-auto px-4 md:px-0">
            <p className="mb-3 font-bold uppercase tracking-wide text-pink-300">MAJUVE</p>
            <h2 className="mb-4 text-3xl font-bold">¡Tu poder está en tu look!</h2>
            <p className="mb-5 text-dark-grayish-blue">
                El maquillaje es mucho más que color en la piel: es confianza, es juego, es mostrarle al mundo quién eres sin miedo. Cada producto está pensado para acompañarte en tus momentos diarios y en los más especiales, resaltando tu brillo único.
            </p>
            <div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-2">
                <span className="text-3xl">$125.00</span>
                <span className="mr-auto rounded-md bg-purple-50 py-1 px-2 text-purple-400">50%</span>
                <span className="text-right text-lg text-grayish-blue line-through md:text-left">$250.00</span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_2fr]">
                <div className="col-span-3 flex items-center justify-between rounded-md bg-gray-200 py-3 px-5 md:col-span-1">
 
                    <button className="text-3xl text-purple-400" onClick={handleDecrement}>-</button>
                    <span>{quantity}</span>
                    <button className="text-3xl text-purple-400" onClick={handleIncrement}>+</button>
                </div>
                <button className="col-span-3 flex items-center justify-center gap-2 rounded-md bg-pink-300 py-3 text-white md:col-span-1">
                    <CartIcon fill="#FFF" />
                    <span>Agregar al carrito</span>
                </button>
            </div>
        </section>
    );
};