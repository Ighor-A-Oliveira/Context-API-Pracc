import React, { useContext } from 'react'
import ReactDom from 'react-dom'
import { IoMdClose } from "react-icons/io";
import { CartContext } from '../context/CartContext';


/* needs some adaptation to be reusable */
export default function Modal({modalOpen, setModalOpen}) {
    const cart = useContext(CartContext)

    if(!modalOpen) {
        return null;
    }
  return ReactDom.createPortal(
    <>
        <div className='fixed top-0 left-0 bottom-0 right-0 transition ease-in-out' style={{backgroundColor: 'rgba(0, 0, 0, .7)'}} onClick={() =>setModalOpen(false)}/>
        <div className='fixed top-[50%] left-[50%] z-50 flex flex-col bg-gray-300 w-[600px] h-[400px] transition ease-in-out rounded-md'
        style={{transform: 'translate(-50%, -50%)'}}>
            <header className='flex justify-between border-b-1 border-gray-400 py-[25px] px-[25px]'>
                <h1 className='text-2xl'>Shopping Cart</h1>
                <IoMdClose size={25} onClick={() =>setModalOpen(false)} />
            </header>
            <main className='px-[25px] text-4xl mt-[20px]'>
                {
                    cart.items.length > 0 ?
                        (cart.items.map((item,idx) => (
                            <div key={idx}>
                                {item[idx].title}
                            </div>
                            ))) 
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
