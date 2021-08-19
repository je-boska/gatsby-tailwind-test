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
    <div className='mt-16 px-8 max-w-2xl mx-auto'>
      <div
        onClick={() => toggleTab(1)}
        className='px-8 py-4 border-2 flex justify-between cursor-pointer'
      >
        <div>
          <h1 className='font-semibold text-xl'>Lorem ipsum</h1>
          <p
            className={`h-0 transition-all overflow-hidden ${
              tab === 1 && 'h-auto mt-4'
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
        className='px-8 py-4 max-w-2xl border-2 border-t-0 flex justify-between cursor-pointer'
      >
        <div>
          <h1 className='font-semibold text-xl'>Sed ut perspiciatis</h1>
          <p
            className={`h-0 transition-all overflow-hidden ${
              tab === 2 && 'h-auto mt-4'
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
    </div>
  )
}

export default Accordion
