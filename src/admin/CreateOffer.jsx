import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { URLAPI } from '../Consent/UrlApi';

const CreateOffer = () => {


    const [formData, setFormData] = useState({
        name : " ", 
        descriptions : " "
    })

    const handleChange = (e) =>{
        
        const {name , value} = e.target
        setFormData((prev) =>({
            ...prev , 
            [name]:value
        }))
    }



    const AddOffer = async(e) =>{
        e.preventDefault()
        try {
            const res = await axios.post(`${URLAPI}/offer`, formData)
            setFormData({name : " ", descriptions: " "})
            toast.success("Offer Create a successfully")
        } catch (error) {
            console.log(error)
            toast.error("Somthing with Wrong Please Try again")
        }
    }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create New Offer</h2>

    <form onSubmit={AddOffer}>
          <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Offer Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Offer name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="descriptions" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          id="descriptions"
          name="descriptions"
          placeholder="Enter Offer description"
          rows="4"
            value={formData.descriptions}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
        Submit
      </button>
    </form>
    </div>
  );
};

export default CreateOffer;
