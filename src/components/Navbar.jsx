import React, { useRef } from 'react'
import './style.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const refName = useRef();
  return (
    <div>
      <div className='navBarColor container'>
        <div className='text-white mt-5 pt-5' style={{ height: '180px' }}><span className='fs-1'>Find your table for any accosion</span><br />
          <div className='d-flex justify-content-center align-items-center'>
            <input ref={refName} className='p-1 rounded-2 me-2' type="text" placeholder='search. . . ' />
            <button className='btn btn-danger me-2'>lets go</button>
           <Link to={'/creat'}> <button className='btn btn-light'>Create</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
