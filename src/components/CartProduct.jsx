import React from 'react'
import { getProductData } from '../data/StoreData'

export default function CartProduct({id, idx, quantity}) {
    const item = getProductData(id);
    console.log(item)

    function getTotalItemCost(price, qtd){
        return price*qtd
    }

  return (
    <div className='flex my-[15px]' key={idx}>
        {/* Need to create a car product component, pass the id, get the data and create a proper styled component */}
        <p className='w-[200px]'>{item.title}</p>
        <p className='w-[50px] mx-[50px]'>{quantity}</p>
        <p>${getTotalItemCost(item.price, quantity).toFixed(2)}</p>
        
        
        
    </div>
  )
}
