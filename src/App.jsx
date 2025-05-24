import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Register from './Auth/Register';
import Login from './Auth/Login';

const App = () => {
  return (
    <div>
<Routes>

  
  <Route path='/'  element={<Home/>} />
  <Route path='/register'  element={<Register/>} />
  <Route path='/login'  element={<Login/>} />
</Routes>
    </div>
  );
};

export default App;