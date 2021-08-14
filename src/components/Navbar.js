import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-6 bg-gray-800 text-white text-2xl'>
      <div className='hidden sm:flex items-center'>
        <span className='text-4xl'>Æ</span>
        <span className='hidden md:inline-block ml-6'>Test Industries</span>
      </div>
      <ul className='sm:flex justify-end items-center'>
        <li className='mr-4'>Services</li>
        <li className='mr-4'>Pricing</li>
        <li>Support</li>
      </ul>
    </div>
  )
}

export default Navbar
