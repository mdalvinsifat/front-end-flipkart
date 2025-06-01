import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { URLAPI } from '../Consent/UrlApi';
import { useNavigate } from "react-router-dom";

const ProductView = () => {
  const [product, setProduct] = useState([]);
const navigate = useNavigate()

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${URLAPI}/product`);
      setProduct(res.data.Products);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${URLAPI}/product/${id}`);
      toast.success("Product deleted successfully");

      // Remove deleted product from UI
    setProduct(prev => prev.filter(item => item._id !== id));
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while deleting");
    }
  };


  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      {product.length > 0 ? (
        <ul className="space-y-3">
          {product.map((prod, index) => (
            <li
              key={prod.id || index}
              className="flex justify-between items-center p-3 border rounded shadow-sm"
            >
              <div className="flex items-center">
                <img
                  src={`${URLAPI}/uploads/${prod.image}`}
                  alt={prod.name}
                  className="rounded-full w-10 h-10 object-cover"
                />
                <span className="font-medium ml-4">{prod.name}</span>
              </div>
              <div className="space-x-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
onClick={() => navigate(`/admin/update-product/${prod._id}`)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => deleteProduct(prod._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductView;
