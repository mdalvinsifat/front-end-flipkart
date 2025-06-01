import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Register from './Auth/Register';
import Login from './Auth/Login';
import CreateProduct from './admin/CreateProduct';
import CreateCategory from './admin/CreateCategory';
import CreateOffer from './admin/CreateOffer';
import AuthView from './admin/AuthView';
import AdminNavber from './admin/AdminNavber';
import OfferView from './admin/OfferView';
import ProductView from './admin/ProductView';
import CategoryView from './admin/CategoryView';
import ProductUpdate from './admin/ProductUpdate';

const App = () => {
  return (
    <div>
<Routes>

  
  <Route path='/'  element={<Home/>} />
  <Route path='/register'  element={<Register/>} />
  <Route path='/login'  element={<Login/>} />
  <Route path='/admin/product-create'  element={<CreateProduct/>} />
  <Route path='/admin/categories-create'  element={<CreateCategory/>} />
  <Route path='/admin/offer-create'  element={<CreateOffer/>} />
  <Route path='/admin/auth-view'  element={<AuthView/>} />
  <Route path='/admin/offers-view'  element={<OfferView/>} />
  <Route path='/admin/product-view'  element={<ProductView/>} />
  <Route path='/admin/categories-view'  element={<CategoryView/>} />
  <Route path='/admin/update-product/:id'  element={<ProductUpdate/>} />
  <Route path='/admin'  element={  <AdminNavber/>} />


</Routes>
    </div>
  );
};

export default App;