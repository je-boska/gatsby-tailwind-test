import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-6 bg-gray-800 text-white text-2xl'>
      <div className='hidden sm:flex items-center'>
        <span className='text-4xl'>Æ</span>
        <span className='hidden md:inline-block ml-6'>
          <a href='http://www.google.com/'>Test Industries</a>
        </span>
      </div>
      <ul className='sm:flex justify-end items-center'>
        <li className='mr-4 hover:text-gray-400 transition-all'>
          <a href='http://www.google.com/'>Services</a>
        </li>
        <li className='mr-4 hover:text-gray-400 transition-all'>
          <a href='http://www.google.com/'>Pricing</a>
        </li>
        <li className='hover:text-gray-400 transition-all'>
          <a href='http://www.google.com/'>Support</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
