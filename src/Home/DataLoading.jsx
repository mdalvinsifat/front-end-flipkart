import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URLAPI } from '../Consent/UrlApi';
import { setCategory, setOffers } from '../redux/CategorySlice';
import { useDispatch } from 'react-redux';

const DataLoading = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [offer, setOffer] = useState([]);
  const [error, setError] = useState("");


  const dispatch = useDispatch()
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${URLAPI}/product`);
      setProducts(res.data.Products);
    } catch (error) {
      console.error("Product error:", error);
      setError("Failed to load products");
    }
  };

  const fetchCategory = async () => {
    try {
      const res = await axios.get(`${URLAPI}/category`);
      setCategories(res.data.CategoryProduct);
     dispatch (setCategory(res.data.CategoryProduct))
    } catch (error) {
      console.error("Category error:", error);
      setError("Failed to load categories");
    }
  };

  const fetchOfferModel = async () => {
    try {
      const res = await axios.get(`${URLAPI}/offer`);
      setOffer(res.data.offerProduct);
dispatch(setOffers(res.data.offerProduct))
    } catch (error) {
      console.error("Offer error:", error);
      setError("Failed to load offers");
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchCategory();
    fetchOfferModel();
  }, []);

  return (
    <div className="p-4">
      {error && <p className="text-red-600 mb-4">Error: {error}</p>}

      {/* Offers Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Offers</h1>
        {offer.length === 0 ? (
          <p>Loading offers...</p>
        ) : (
          offer.map((off) => (
            <div key={off._id} className="mb-2">
              <h2 className="text-lg font-semibold">{off.name}</h2>
            </div>
          ))
        )}
      </div>

      {/* Categories & Products Section */}
      <div>
        {categories.length === 0 ? (
          <p>Loading categories...</p>
        ) : (
          categories.map((cat) => (
            <div key={cat._id} className="mb-8">
              <h2 className="text-xl font-bold mb-3">{cat.name}</h2>
              <ul className="list-disc list-inside">
                {products
                  .filter((prod) => prod.Category?._id === cat._id)
                  .map((prod) => (
                    <li key={prod._id} className="mb-2">
                      <h3 className="font-medium">{prod.name}</h3>
                      {prod.image && (
                        <img
                          src={`${URLAPI}/uploads/${prod.image}`}
                          alt={prod.name}
                          className="w-40 h-auto mt-1 rounded"
                        />
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DataLoading;
