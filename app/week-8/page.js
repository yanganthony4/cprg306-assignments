'use client';
import NewItem from "./new-item";
import ItemList from "./item-list";
import Items from "./items.json";
import { useState } from 'react';

export default function Page() {
    const [itemsData, setItemsData] = useState(Items);

    const handleAddItem = (newItem) => {
        setItemsData(prevItems => [...prevItems, newItem]);
    };

    return (
        <main className="min-h-screen">
        <h1 className="text-4xl font-bold ">Shopping List</h1>
        <div className="flex">
            <ItemList items={itemsData} />
            <NewItem onAddItem={handleAddItem} />
        </div>
      </main>
    );
}