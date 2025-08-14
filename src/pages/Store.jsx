import React from 'react'
import {productsArray} from '../data/StoreData'
import Card from '../components/Card'

export default function Store() {
  return (
    <main className='w-full flex flex-col'>
      <h1 className='mx-auto text-4xl font-bold my-[10px]'>Welcome to the store!</h1>
      <section className='flex flex-wrap justify-between items-center w-full lg:w-[75%] mx-auto'>
        {productsArray.map((item) => (
            <Card product={item}/>
        ))}
        
      </section>
    </main>
  )
}
