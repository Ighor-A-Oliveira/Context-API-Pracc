import React, { useContext } from 'react'
import ReactDom from 'react-dom'
import { IoMdClose } from "react-icons/io";
import { CartContext } from '../context/CartContext';
import CartProduct from './CartProduct';


/* needs some adaptation to be reusable */
export default function Modal({modalOpen, setModalOpen}) {
    const cart = useContext(CartContext)

    if(!modalOpen) {
        return null;
    }
  return ReactDom.createPortal(
    <>
        <div className='fixed top-0 left-0 bottom-0 right-0 transition ease-in-out' style={{backgroundColor: 'rgba(0, 0, 0, .7)'}} onClick={() =>setModalOpen(false)}/>
        <div className='fixed top-[50%] left-[50%] z-50 flex flex-col bg-gray-300 w-[600px] h-[500px] transition ease-in-out rounded-md overflow-y-auto'
        style={{transform: 'translate(-50%, -50%)'}}>
            <header className='flex justify-between border-b-1 border-gray-400 py-[25px] px-[25px]'>
                <h1 className='text-2xl'>Shopping Cart</h1>
                <IoMdClose size={25} onClick={() =>setModalOpen(false)} />
            </header>
            <main className='px-[25px] text-4xl mt-[20px]'>
                {
                    cart.items.length > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map((item,idx) => (
                            /* Need to create a car product component, pass the id, get the data and create a proper styled component */
                            /* {<div className='' key={idx}>
                                {getProductData(item.id)}
                            </div>} */
                            <CartProduct id={item.id} idx={idx} quantity={item.quantity} />
                            ))}

                            <h1 className='mt-[35px]'>Total Cost: <span className='pl-[175px]'>${cart.getTotalCost().toFixed(2)}</span></h1>

                            <button className='bg-green-600 text-white text-[20px] p-4 rounded-md mt-[50px]'>Purchase Items</button>
                        </>
                        : 
                        (<h1>
                            The Cart is Empty
                        </h1>)
                }
            </main>
        </div>
    </>,
    document.getElementById("portal")
  )
}
