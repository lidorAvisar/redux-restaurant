import React from 'react'
import Navbar from './Navbar'
import { restaurantData } from '../resww';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRes } from '../features/creatSlice';



export default function Home() {
  const res_arr = useSelector((mystore) => mystore.creatSlice.createArr)

  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div className='d-flex flex-wrap mt-3 justify-content-center gap-4'>
        {restaurantData.map((value, i) => {
          return (
            <div className='border border-dark mb-5 m-1 mx-2'>
              <Link to={`/resdeatels/${value.id - 1}`}><div key={i}> <img src={value.main_image} style={{ width: "350px",height:'260px' }} alt="" />
              </div></Link>
              <div className='text-center bg-danger p-5'>
                <h4>{value.name}</h4>
                <p>{value.city}</p>
                <p>{value.price}{Math.floor(Math.random() * 200)}</p>
                <p>{value.cuisine}</p>
              </div>
            </div>
          )
        })}
        <div className='d-flex flex-wrap mt-3 justify-content-center gap-4'>
          {res_arr.map((item => {
            return (
              <div className=' border border-dark m-1'>
                <img style={{ width: '350px',height:'250px' }} src={item.image} alt="" />
                <div className='text-center bg-success p-5'>
                  <h1>{item.name}</h1>
                  <p>{item.city}</p>
                  <p>{item.price}</p>
                  <p>{item.cuision}</p>
                  <button onClick={() => {
                  dispatch(deleteRes({delId:item.id}))
                }}
                  className='btn btn-danger float-end m-2 '>delete</button>
                </div>
              
              </div>
            )
          }))}
        </div>
      </div>


    </div>
  )
}
