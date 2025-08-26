import React, {useContext, useState} from 'react'
import Modal from './Modal'
import { CartContext } from '../context/CartContext'

export default function Navbar() {
    const [modalOpen, setModalOpen] = useState(false)
    const cart = useContext(CartContext)

    //this line will sum all the product quantities
    const productCount = cart.items.reduce((sum, product) => sum + product.quantity,0)
  return (
    <nav className='flex w-full justify-between pt-[10px] relative'>
        <div>Ecommerce Store</div>
        <button className='p-[15px] bg-blue-600 text-white rounded-md'
            onClick={() => setModalOpen(true)}
        >
            Cart {productCount} Itens 
        </button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </nav>
  )
}
