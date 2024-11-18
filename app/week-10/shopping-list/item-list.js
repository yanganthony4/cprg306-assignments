'use client';
import Item from "./item";
import React, { useState } from 'react';

const ItemList = ({ items, onItemSelect}) => {
    const [sortBy, setSortBy] = useState("name");

    let sortedItems = [...items];
    
    if(sortBy == "name") {
        sortedItems.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1
            };
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1
            };
            return 0;
        });
    } else if (sortBy == "category") {
        sortedItems.sort((a, b) => {
            if (a.category.toLowerCase() < b.category.toLowerCase()) {
                return -1
            };
            if (a.category.toLowerCase() > b.category.toLowerCase()) {
                return 1
            };
            return 0;
        });
    } else if (sortBy == "group by category") {
        sortedItems = sortedItems.reduce((accumulator, item) => {
            if (!accumulator[item.category]) {
                accumulator[item.category] = [];
            }
            accumulator[item.category].push(item);
            return accumulator;
        }, {});
    };

    const handleSortByName = (event) => {
        setSortBy("name");
    };

    const handleSortByCategory = (event) => {
        setSortBy("category");
    };

    const handleGroupByCategory = (event) => {
        setSortBy("group by category")
    }

    return (
        <div className="ml-3">
            <div className="flex space-x-4 mt-5 ml-2">
                <div>
                    <p className="text-lg font-bold text-white mb-2">Sort By:</p>
                    <div className="flex items-center space-x-4 mb-2">
                        <button
                            onClick={handleSortByName}
                            disabled={sortBy === "name"}
                            className="bg-blue-500 p-2 rounded-md flex items-center justify-center hover:bg-blue-400 disabled:bg-gray-400">
                            Name
                        </button>
                        <button
                            onClick={handleSortByCategory}
                            disabled={sortBy === "category"}
                            className="bg-blue-500 p-2 rounded-md flex items-center justify-center hover:bg-blue-400 disabled:bg-gray-400">
                            Category
                        </button>
                    </div>
                </div>
                <div>
                    <p className="text-lg font-bold text-white mb-2">Group By:</p>
                    <button
                        onClick={handleGroupByCategory}
                        disabled={sortBy === "group by category"}
                        className="bg-blue-500 p-2 rounded-md flex items-center justify-center hover:bg-blue-400 disabled:bg-gray-400">
                        Category
                    </button>
                </div>
            </div>
            <div>
                {(() => {
                    if (sortBy === "group by category") {
                        return (
                            Object.keys(sortedItems).map(category => (
                                <div key={category}>
                                    <h3 className="text-xl font-bold capitalize">{category}</h3>
                                    {sortedItems[category].map(item => (
                                        <Item
                                            key={item.id}
                                            name={item.name}
                                            quantity={item.quantity}
                                            category={item.category}
                                            onSelect={() => onItemSelect(item)} 
                                        />
                                    ))}
                                </div>
                            ))
                        );
                    } else {
                        return (
                            sortedItems.map(item => (
                                <Item
                                    key={item.id}
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                    onSelect={() => onItemSelect(item)} 
                                />
                            ))
                        );
                    }
                })()}
            </div>
        </div>
    )
 };

export default ItemList;
