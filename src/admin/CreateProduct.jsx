import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { URLAPI } from '../Consent/UrlApi';
import { useSelector } from 'react-redux';
import AdminNavber from '../admin/AdminNavber'
const CreateProduct = () => {

  const category = useSelector(store => store.CategoryOffer.category)
  const offer = useSelector(store => store.CategoryOffer.offers)

  console.log(offer)
const [formData, setFormData] = useState({
  name: "",             
  title: "",              
  image: null,           
  descriptions: "",       
  SubDescriptions: "",    
  Specifications: "",     
  Reating: "",           
  review: "",             
  Category: "",         
  OfferModel: "",         
  SubImageOne: null,    
  SubImageTwo: null,
  SubImageThree: null,
  SubImageFour: null,
  price: "",             
  oldPrice: ""            
});

const [previews, setPreviews] = useState({
  image: null,
  SubImageOne: null,
  SubImageTwo: null,
  SubImageThree: null,
  SubImageFour: null
});





const handleChange = (e) => {
  try {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
      setPreviews((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(file),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  } catch (error) {
    console.log(error);
  }
};




const AddProduct = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    // Append all fields to FormData
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    const res = await axios.post(`${URLAPI}/product`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setFormData({
      name: "", title: "", image: null, descriptions: "", SubDescriptions: "", Specifications: "",
      Reating: "", review: "", Category: "", OfferModel: "", SubImageOne: null, SubImageTwo: null,
      SubImageThree: null, SubImageFour: null, price: "", oldPrice: ""
    });
setPreviews({
  image: null,
  SubImageOne: null,
  SubImageTwo: null,
  SubImageThree: null,
  SubImageFour: null
});

    toast.success("Product Added Successfully");
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong. Please try again.");
  }
};






  return (
<div className="flex flex-col md:flex-row min-h-screen bg-gray-100">


  <div className="md:w-1/4 w-full">
    <AdminNavber/>
 
 </div>





  <div className="md:w-3/4 w-full overflow-y-auto p-4">

          <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Create New Product</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={AddProduct}>
        {/* Left Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Product Name</label>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Title</label>
            <input type="text" name="title" placeholder="Title" 
            onChange={handleChange} value={formData.title} 
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Rating</label>
            <input type="text" name="Reating" placeholder="Rating"
            onChange={handleChange} value={formData.Reating} 
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Review</label>
            <input type="text" name="review"
            onChange={handleChange} value={formData.review} 
            placeholder="Review" className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Price</label>
            <input type="text" name="price"
            onChange={handleChange} value={formData.price} 
            placeholder="Price" className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Old Price</label>
            <input type="text" name="oldPrice" placeholder="Old Price" onChange={handleChange} value={formData.oldPrice}  className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400" />
          </div>

{/* Category Dropdown */}
<div>
  <label className="block text-gray-700 font-semibold mb-1">Category</label>
  <select
    name="Category"
    onChange={handleChange}
    value={formData.Category}
    className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
  >
    <option value="">-- Select Category --</option>
    {category?.map((cat) => (
      <option key={cat._id} value={cat._id}>
        {cat.name}
      </option>
    ))}
  </select>
</div>

{/* OfferModel Dropdown */}
<div>
  <label className="block text-gray-700 font-semibold mb-1">Offer Model</label>
  <select
    name="OfferModel"
    onChange={handleChange}
    value={formData.OfferModel}
    className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
  >
    <option value="">-- Select Offer --</option>
    {offer?.map((item) => (
      <option key={item._id} value={item._id}>
        {item.name}
      </option>
    ))}
  </select>
</div>

        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Descriptions</label>
            <textarea name="descriptions" rows="3" placeholder="Descriptions"
            onChange={handleChange} value={formData.descriptions}
            
            className="w-full border p-2 rounded-md resize-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Sub Descriptions</label>
            <textarea name="SubDescriptions" rows="3" placeholder="Sub Descriptions" 
                        onChange={handleChange} value={formData.SubDescriptions}

            className="w-full border p-2 rounded-md resize-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Specifications</label>
            <textarea name="Specifications" rows="3" placeholder="Specifications" 
                        onChange={handleChange} value={formData.Specifications}

            className="w-full border p-2 rounded-md resize-none focus:ring-2 focus:ring-blue-400" />
          </div>

      <div>
  <label className="block text-gray-700 font-semibold mb-1">Main Image</label>
  <input type="file" name="image" onChange={handleChange} className="w-full border p-2 rounded-md bg-gray-50" />
  {previews.image && (
    <img src={previews.image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
  )}
</div>
        <div>
  <label className="block text-gray-700 font-semibold mb-1">Sub Image One</label>
  <input type="file" name="SubImageOne" onChange={handleChange} className="w-full border p-2 rounded-md bg-gray-50" />
  {previews.SubImageOne && (
    <img src={previews.SubImageOne} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded" />
  )}
</div>


          <div>
            <label className="block text-gray-700 font-semibold mb-1">Sub Image Two</label>
            <input type="file" name="SubImageTwo" onChange={handleChange}  className="w-full border p-2 rounded-md bg-gray-50" />
            {previews.SubImageTwo && (
    <img src={previews.SubImageTwo} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded" />
  )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Sub Image Three</label>
            <input type="file" name="SubImageThree" onChange={handleChange} className="w-full border p-2 rounded-md bg-gray-50" />
            {previews.SubImageThree && (
    <img src={previews.SubImageThree} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded" />
  )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Sub Image Four</label>
            <input type="file" name="SubImageFour" onChange={handleChange}  className="w-full border p-2 rounded-md bg-gray-50" />

                     {previews.SubImageFour && (
    <img src={previews.SubImageFour} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded" />
  )}
          </div>
        </div>

        {/* Submit Button Full Width */}
        <div className="col-span-1 md:col-span-2">
          <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition duration-200">
            Submit Product
          </button>
        </div>
      </form>
          </div>

    </div>
 </div>
  );
};

export default CreateProduct;
