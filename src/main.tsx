import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from './components/dashboard.tsx';
import QuizScreen from './components/QuizScreen.tsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'',
        element:<Dashboard/>
      },  
      {
        path:'quiz/:id',
        element:<QuizScreen/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
