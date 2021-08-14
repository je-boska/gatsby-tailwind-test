import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-6 bg-gray-800 text-white text-2xl'>
      <h1 className='hidden sm:block'>
        X <span className='hidden md:inline-block ml-2'>Test Industries</span>
      </h1>
      <ul className='sm:flex justify-end'>
        <li className='mr-4'>Services</li>
        <li className='mr-4'>Pricing</li>
        <li>Support</li>
      </ul>
    </div>
  )
}

export default Navbar
