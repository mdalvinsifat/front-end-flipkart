import React from 'react';
import { useSelector } from 'react-redux';

const OfferView = () => {
  const offer = useSelector(store => store.CategoryOffer.offers);

  console.log(offer);

  return (
    <div className="p-4">
      {Array.isArray(offer) && offer.length > 0 ? (
        <ul className="space-y-2">
          {offer.map((off, index) => (
            <li
              key={off.id || index}
              className="flex justify-between items-center border p-3 rounded-md shadow-sm"
            >
              <span className="font-medium">{off.name}</span>
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
        <p>No offers available.</p>
      )}
    </div>
  );
};

export default OfferView;
