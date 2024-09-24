import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App'
import Apresentação from './pages/Apresentação'
import Lista from './pages/Lista'
import Midias from './pages/Midias'
import Contato from './pages/Contato'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <ConteudoPrincipal/>},
      {path:'Apresentação', element: <Apresentação/>},
      {path:'Lista', element: <Lista/>},
      {path:'Midias', element: <Midias/>},
      {path:'contato', element: <Contato/>},
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)