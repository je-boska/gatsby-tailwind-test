import React, { useState } from 'react'

const Accordion = () => {
  const [tab, setTab] = useState(0)

  const toggleTab = (clicked) => {
    if (clicked == tab) {
      setTab(0)
    } else {
      setTab(clicked)
    }
  }

  return (
    <div className='mt-16 max-w-3xl mx-auto md:border-r-2 md:border-l-2'>
      <div
        onClick={() => toggleTab(1)}
        className='px-8 py-4 border-t-2 border-b-2 flex justify-between cursor-pointer'
      >
        <div>
          <h1 className='font-semibold text-xl'>Lorem ipsum</h1>
          <p
            className={`h-0 transition-all overflow-hidden ${
              tab === 1 && 'h-auto mt-2'
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='font-semibold text-xl'>+</div>
      </div>
      <div
        onClick={() => toggleTab(2)}
        className='px-8 py-4 border-b-2 border-t-0 flex justify-between cursor-pointer'
      >
        <div>
          <h1 className='font-semibold text-xl'>Sed ut perspiciatis</h1>
          <p
            className={`h-0 transition-all overflow-hidden ${
              tab === 2 && 'h-auto mt-2'
            }`}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className='font-semibold text-xl'>+</div>
      </div>
      <div
        onClick={() => toggleTab(3)}
        className='px-8 py-4 border-b-2 border-t-0 flex justify-between cursor-pointer'
      >
        <div>
          <h1 className='font-semibold text-xl'>But I must explain</h1>
          <p
            className={`h-0 transition-all overflow-hidden ${
              tab === 3 && 'h-auto mt-2'
            }`}
          >
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
          </p>
        </div>
        <div className='font-semibold text-xl'>+</div>
      </div>
    </div>
  )
}

export default Accordion
