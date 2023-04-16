import React from 'react'
import Navbar from './Navbar'
import { restaurantData } from '../resww';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Home() {
  const res_arr = useSelector((mystore) => mystore.creatSlice.createArr)


  return (
    <div>
      <Navbar />
      <div className='d-flex flex-wrap mt-3 justify-content-center gap-4'>
        {restaurantData.map((value, i) => {
          return (
            <div className='border border-dark'>
              <Link to={`/resdeatels/${value.id - 1}`}><div key={i}> <img src={value.main_image} style={{ height: "200px", width: "300px", padding: "20px" }} alt="" />
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
      <div className='d-flex flex-wrap mt-3 justify-content-center'>
        {/* {res_arr.map((item => {
          return (
            <div className='m-5'>
              <h1>{item.name}</h1>
              <h1>{item}</h1>
              <h1>{item}</h1>
            </div>
          )
        }))} */}
      </div>

    </div>
  )
}
