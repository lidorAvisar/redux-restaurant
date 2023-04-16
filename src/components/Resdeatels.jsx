import React from 'react'
import './style.css'
import { restaurantData } from '../resww'
import { useParams } from 'react-router-dom'

export default function Resdeatels() {
  const { id } = useParams();
  const deatels = restaurantData[id];
  return (
    <div>
      <div className='navBarColor container'>
        <div className='mt-5 pt-5' style={{ height: '180px' }}><span className='fs-1'>{deatels.name}</span><br />
        </div>

      </div>
      <div className="d-flex justify-content-center">
        <div >
          <h3>{deatels.name}</h3>
          <p>{deatels.city}</p>
          <p>{deatels.description}</p>
          <img src={deatels.main_image} style={{ height: "400px", width: "400px" }} alt="" />
        </div>
      </div>
    </div>
  )
}
