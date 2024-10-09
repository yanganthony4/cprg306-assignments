'use client';
import { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);

    // Function to increment the quantity
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    // Function to decrement the quantity
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Handle changes to the name input
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Handle changes to the category select
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name: name,
            quantity: quantity,
            category: category
        };

        console.log(item);
        alert(
            `Item Name: ${name}\nItem Quantity: ${quantity}\nItem Category: ${category}`
        );

        // Reset form
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <main>
            <div className="flex flex-col items-center justify-center bg-gray-800 w-[400px] mx-auto rounded-md p-6 mt-5">
                <p className="text-lg font-bold text-white mb-4">Please Enter Your Next Grocery Item:</p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="w-full">
                    {/* User Input */}
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Enter the item name"
                        className="rounded-md h-10 mb-5 w-full px-3 text-black"
                    />

                    {/* Quantity and Category Selection */}
                    <div className="flex items-center justify-between space-x-8 mb-4">
                        <div className="bg-white w-32 rounded-md h-10 flex items-center text-black p-1">
                            {quantity}
                            <button
                                type="button"
                                onClick={decrement}
                                disabled={quantity === 1}
                                className="w-8 ml-auto p-2 bg-red-500 h-6 rounded-md flex items-center justify-center hover:bg-red-400 disabled:bg-gray-400 mr-2"
                            >
                                -
                            </button>
                            <button
                                type="button"
                                onClick={increment}
                                disabled={quantity === 20}
                                className="w-8 bg-blue-500 h-6 rounded-md flex items-center justify-center hover:bg-blue-400 disabled:bg-gray-400"
                            >
                                +
                            </button>
                        </div>

                        <div className="w-40">
                            <select
                                value={category}
                                onChange={handleCategoryChange}
                                className="text-black bg-white rounded-md h-10 w-full"
                            >
                                <option value="produce">Produce</option>
                                <option value="dairy">Dairy</option>
                                <option value="bakery">Bakery</option>
                                <option value="meat">Meat</option>
                                <option value="frozen-foods">Frozen Foods</option>
                                <option value="canned-goods">Canned Goods</option>
                                <option value="dry-goods">Dry Goods</option>
                                <option value="beverages">Beverages</option>
                                <option value="snacks">Snacks</option>
                                <option value="household">Household</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="py-2 px-4 bg-green-600 rounded-md w-full font-bold text-white hover:bg-green-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
