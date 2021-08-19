import React, { useState } from 'react'

const Tabs = () => {
  const [tab, setTab] = useState(1)

  return (
    <div className='mt-16 mx-auto max-w-3xl w-full flex justify-center'>
      <div className='grid grid-cols-3'>
        <div
          className={`p-4 border-2 md:rounded-tl-xl flex justify-center cursor-pointer hover:bg-gray-200 transition-all ${
            tab === 1 && 'bg-gray-100'
          }`}
          onClick={() => setTab(1)}
          onKeyDown={() => setTab(1)}
          role='tab'
          tabIndex={0}
        >
          <span className='font-semibold text-xl'>1</span>
        </div>
        <div
          className={`p-4 border-t-2 border-b-2 flex justify-center cursor-pointer hover:bg-gray-200 transition-all ${
            tab === 2 && 'bg-gray-100'
          }`}
          onClick={() => setTab(2)}
          onKeyDown={() => setTab(2)}
          role='tab'
          tabIndex={0}
        >
          <span className='font-semibold text-xl'>2</span>
        </div>
        <div
          className={`p-4 border-2 md:rounded-tr-xl flex justify-center cursor-pointer hover:bg-gray-200 transition-all ${
            tab === 3 && 'bg-gray-100'
          }`}
          onClick={() => setTab(3)}
          onKeyDown={() => setTab(3)}
          role='tab'
          tabIndex={0}
        >
          <span className='font-semibold text-xl'>3</span>
        </div>
        {tab === 1 && (
          <div className='col-span-3 border-2 border-t-0 p-6 md:rounded-b-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        )}
        {tab === 2 && (
          <div className='col-span-3 border-2 border-t-0 p-6 md:rounded-b-xl'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        )}
        {tab === 3 && (
          <div className='col-span-3 border-2 border-t-0 p-6 md:rounded-b-xl'>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
          </div>
        )}
      </div>
    </div>
  )
}

export default Tabs
