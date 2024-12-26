import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './routes/Home.jsx'
import FetchOld from './routes/FetchOld.jsx'
import FetchRq from './routes/FetchRq.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import FetchTndv from './routes/FetchTndv.jsx'

const queryClient=new QueryClient();

const route=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/rad' element={<FetchOld/>}/>
      <Route path='/rq' element={<FetchRq/>}/>
      <Route path='/rq/:id' element={<FetchTndv/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={route}/>
    </QueryClientProvider>
  </StrictMode>,
)
