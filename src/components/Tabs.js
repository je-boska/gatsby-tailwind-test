import React, { useState } from 'react'

const Tabs = () => {
  const [tab, setTab] = useState(1)

  return (
    <div className='mt-8 w-full flex justify-center text-2xl'>
      <div className='grid grid-cols-3 max-w-3xl m-8'>
        <div
          className={`p-4 border-2 flex justify-center cursor-pointer hover:bg-gray-200 transition-all ${
            tab == 1 && 'bg-gray-200'
          }`}
          onClick={() => setTab(1)}
        >
          <span>1</span>
        </div>
        <div
          className={`p-4 border-t-2 border-b-2 flex justify-center cursor-pointer hover:bg-gray-200 transition-all ${
            tab == 2 && 'bg-gray-200'
          }`}
          onClick={() => setTab(2)}
        >
          <span>2</span>
        </div>
        <div
          className={`p-4 border-2 flex justify-center cursor-pointer hover:bg-gray-200 transition-all ${
            tab == 3 && 'bg-gray-200'
          }`}
          onClick={() => setTab(3)}
        >
          <span>3</span>
        </div>
        {tab == 1 && (
          <div className='col-span-3 border-2 border-t-0 p-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        )}
        {tab == 2 && (
          <div className='col-span-3 border-2 border-t-0 p-6'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
        )}
        {tab == 3 && (
          <div className='col-span-3 border-2 border-t-0 p-6'>
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
