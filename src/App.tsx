import { RouterProvider } from 'react-router-dom'
import './App.css'
import Router from './route/Route'

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
