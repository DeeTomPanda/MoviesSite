import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Details from './../screens/Details'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

const router=createBrowserRouter([
	{
	  path:'/',
	  element:<App/>
	},
	{
	  path:'/details',
	  element:<Details/>
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
<ChakraProvider>
  <React.StrictMode>
	 <RouterProvider router={router} />
  </React.StrictMode>
</ChakraProvider>,
)
