  import axios from 'axios';
  import React, { useState } from 'react';
  import toast from 'react-hot-toast';
  import { URLAPI } from '../Consent/UrlApi';
  import { useNavigate } from 'react-router-dom';
  import { useDispatch } from 'react-redux';
  import { setUser } from '../redux/useSlice';

  const Login = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '', // ✅ Correct field name
    });

    const navigate  = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission
      try {
        const res = await axios.post(`${URLAPI}/auth/login`, formData);
        toast.success("Login Successfully");
        navigate("/")
        dispatch(setUser(res.data.user))
      } catch (error) {
        console.error("Login Error:", error);
        toast.error("Login Failed");
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-center">Login</h2>

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
            name="password" // ✅ Correct name
            placeholder="Password"
            value={formData.password} // ✅ Correct value binding
            onChange={handleChange}
            className="w-full border-b p-2 focus:outline-none focus:border-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    );
  };

  export default Login;
