import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { restaurantData } from '../res';
import { Link, useParams } from 'react-router-dom';


export default function Home() {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <div className='d-flex flex-wrap mt-3 justify-content-center gap-4'>
        {restaurantData.map((value, i) => {
          return (
            <div className='border border-dark'>
              <Link to={`/resdeatels/${value.id}`}><div key={i}> <img src={value.main_image} style={{ height: "200px", width: "300px", padding: "20px" }} alt="" />
              </div></Link>
              <div>
                <h4>{value.name}</h4>
                <p>{value.city}</p>
                <p>{value.price}</p>
                <p>{value.cuisine}</p>
                <p>{value.name}</p>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}
