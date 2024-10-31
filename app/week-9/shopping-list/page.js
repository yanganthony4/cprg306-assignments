'use client';
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import Items from "./items.json";
import { useState } from 'react'
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user } = useUserAuth();


    if (!user) return (
        <main style={{ textAlign: "center", marginTop: "50px" }}>
            <p>
                Please login to access this page!
            </p>
        </main>
    );
    
    const [itemsData, setItemsData] = useState(Items);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItemsData(prevItems => [...prevItems, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name
            .split(',')[0]
            .trim()
            .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '');
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="min-h-screen">
            <h1 className="text-4xl font-bold">Shopping List</h1>
            <div className="flex flex-row">
                    <div className="flex flex-col">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={itemsData} onItemSelect={handleItemSelect} />
                    </div>
                    <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}
