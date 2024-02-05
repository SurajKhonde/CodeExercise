import React from 'react'
import Data from './Data'

const Main = () => {
  const handleclick = () => { 
    return (
      <input type='button '  >{ }</input>
    )
  }
  return (
      
    <>
        <div>
          <h1>Classes</h1>
          <p>This course focuses on individuals keen to broaden their knowledge or specialize in advanced DITA- XML, in any industry. This course, focuses on what writers of business documents need to think and do differently to get their jobs done quickly and efficiently with DITA</p>
            </div>            
            <div >
                {Data.map((content) => {
                   
                    return (
                      <div className='w-10 h-8 flex grid-cols-3 '>
                        <div className='  border-solid shadow-lg shadow-black ml-10 mt-10 p-24   '>
                          <div className='w-full h-10 bg-slate-600 t-0'>
                            <h1 onClick={handleclick}>Add Image</h1></div>
                          <div className=''>
                            <h1 >Name:{ content?.Name}</h1>
                            <p>{content?.ShortDesc }</p>
                            </div>

                            
                           
                        </div>
                      </div>
                ) })}
                
            </div>
    </>
  )
}

export default Main;