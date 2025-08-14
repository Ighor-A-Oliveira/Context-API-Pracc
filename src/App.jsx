import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Store from './pages/Store'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import CartProvider from './context/CartContext'

function App() {

  return (
    <CartProvider>
      <main className='px-[25px]'>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store/>}/>
            <Route path="success" element={<Success/>}/>
            <Route path="cancel" element={<Cancel/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </CartProvider>
  )
}

export default App
