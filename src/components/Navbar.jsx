import React, { useRef } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const refName = useRef();
  const nav = useNavigate();
  return (
    <div>
      <div className='navBarColor container'>
        <div className='text-white mt-5 pt-5' style={{ height: '180px' }}><span className='fs-1'>Find your special meal</span><br />
          <div className='d-flex justify-content-center align-items-center'>
            <input ref={refName} className='p-1 rounded-2 me-2' type="text" placeholder='search. . . ' />
            <button onClick={() => {
               
            }}
              className='btn btn-danger'>lets go</button>
          </div>
        </div>
      </div>
    </div>
  )
}
