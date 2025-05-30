// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/index.jsx'
import{Provider} from 'react-redux'
import {store} from './store/store.js'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    
  // </StrictMode>,
)
