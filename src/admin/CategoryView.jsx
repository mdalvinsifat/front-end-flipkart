import React from 'react';
import { useSelector } from 'react-redux';

const CategoryView = () => {
  const category = useSelector(store => store.CategoryOffer.category);


  return (
    <div className="p-4">
      {category.length > 0 ? (
        <ul className="space-y-2">
          {category.map((cat, index) => (
            <li
              key={cat.id || index}
              className="flex justify-between items-center border p-3 rounded-md shadow-sm"
            >
              <span className="font-medium">{cat.name}</span>
              <div className="space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Update    
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </li>
          ))}  
        </ul>
      ) : (
        <p>No category available.</p>
      )}
    </div>
  );
};

export default CategoryView;
