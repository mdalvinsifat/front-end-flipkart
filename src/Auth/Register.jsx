import React, { useState } from 'react';
import axios from 'axios';
import { URLAPI } from '../Consent/UrlApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/useSlice';
import { useDispatch } from 'react-redux';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirm_password: '',
    gender: '',
    image: null,
  });
const dispatch = useDispatch()
  const navigete = useNavigate()
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object to append the data
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('confirm_password', formData.confirm_password);
    data.append('gender', formData.gender);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
            const res = await axios.post(`${URLAPI}/auth/register`, formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
toast.success(res.data.message)
        dispatch(setUser(res.data.user))
navigete("/")
      dispatch(setUser(res.data.user))


      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-4"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border-b p-2 focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b p-2 focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border-b p-2 focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          value={formData.confirm_password}
          onChange={handleChange}
          className="w-full border-b p-2 focus:outline-none focus:border-blue-500"
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border-b p-2 focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Profile Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
