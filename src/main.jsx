import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import store from './redux/store.js'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)



createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
      <Toaster position="top-right" reverseOrder={false} />
    <PersistGate loading={null} persistor={persistor}>

    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>,
)
