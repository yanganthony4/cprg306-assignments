import React from 'react';

const Item = ({ name, quantity, category, onSelect}) => {
    return (
    <li 
    className="flex justify-between items-center ml-2"
    onClick={() => onSelect(name)}>
      <div className="flex flex-col bg-gray-800 py-2 mb-2 min-w-80">
        <span className="font-semibold px-2">{name}</span>
        <span className="text-sm px-2">Buy {quantity} in {category}</span>
      </div>
    </li>
    )
}

export default Item;