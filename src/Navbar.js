import React from 'react'
import Main from './main'

const Navbar= () => {
  return (
    <>
      <div className='flex justify-around top-10  '>
          <ul clas>
                 Title 
        </ul>
          <ul className='flex items-center justify-between gap-4'>
              <li> Home </li>
              <li> About</li>
              <li>Contack </li>
        <li className=' w-1 h-1 '>
                  <button className='text-blue-500 w-1 '>Button</button>
              </li>
          </ul>
    </div>
      <div className='w-[80%] h-7 bg-blue-500 ml-10 mt-10  p-24 overflow-hidden'>
        <div>
           <h1 className='text-center text-white font-bold t-[-10px]'>Tilte</h1>
        <p>This course focuses on individuals keen to broaden their knowledge or specialize in advanced DITA- XML, in any industry. This course, focuses on what writers of business documents need to think and do differently to get their jobs done quickly and efficiently with DITA</p>
        </div>
       


      </div>
      <div>
        <Main/>
      </div>
      </>

  )
}

export default Navbar