import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import About from '../components/about.jsx'
import Portfolio from '../components/portfolio.jsx'
import Contact from '../components/contact.jsx'
import Resume from '../components/resume.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <About/>
      },
      {
        path: '/portfolio',
        element: <Portfolio/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/resume',
        element: <Resume/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
