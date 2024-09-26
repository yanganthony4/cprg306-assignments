'use client';
 import { useState } from 'react';


 export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
    if (quantity < 20) {
            setQuantity(quantity + 1) 
        }
    };
    
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    };

    return (
        <main>
            <div class="bg-white w-32 rounded-md h-10 flex items-center mx-auto text-black p-1">
                {quantity}
                <button onClick={decrement} disabled={quantity === 1}
                class = "w-8 ml-auto p-2 bg-red-500 h-6 rounded-md flex items-center justify-center mr-2 hover:bg-red-400 disabled:bg-gray-400">
                    -
                    </button>
                <button onClick={increment} disabled={quantity === 20}
                class = "w-8 bg-blue-500 h-6 rounded-md flex items-center justify-center hover:bg-blue-400 disabled:bg-gray-400">
                    +
                </button>
            </div>
        </main>
    );

}

