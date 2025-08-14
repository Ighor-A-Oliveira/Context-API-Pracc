import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Card({product}) {
    const cart = useContext(CartContext)
    console.log(cart.items)
        
  return (
    <div className='outline-1 flex flex-col items-center w-[400px] p-[25px]'>
        <h1 className='font-bold text-2xl'>{product.title}</h1>
        <p className='my-[25px] text-lg'>${product.price}</p>
        <button className='p-[15px] bg-blue-600 text-white rounded-md'
            onClick={() => cart.addOneToCart(product.id)}
        >
            Add to cart 
        </button>
    </div>
  )
}
