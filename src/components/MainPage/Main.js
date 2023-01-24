import React from 'react'
import './main.css'

const Main = () => {
  return (
    <div className='container'>
      <div className='box'>
            <div className='inputData'>
                <input 
                    type='text' 
                    placeholder='Enter City Name'
                    className='inputField' />
            </div>
      </div>
    </div>
  )
}

export default Main
