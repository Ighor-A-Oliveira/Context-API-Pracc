import React, {useState} from 'react'
import Modal from './Modal'

export default function Navbar() {
    const [modalOpen, setModalOpen] = useState(false)
  return (
    <nav className='flex w-full justify-between pt-[10px] relative'>
        <div>Ecommerce Store</div>
        <button className='p-[15px] bg-blue-600 text-white rounded-md'
            onClick={() => setModalOpen(true)}
        >
            Cart 0 Itens 
        </button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </nav>
  )
}
