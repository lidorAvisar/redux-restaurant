import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewRes, deleteRes } from "../features/creatSlice";
import { Link } from "react-router-dom";

const CreateRes = () => {

  const dispatch = useDispatch();

  const nameref = useRef();
  const cityref = useRef();
  const imageref = useRef();
  const priceref = useRef();
  const cuisionref = useRef();

  const onAddClick = () => {
    let createObj = {
      name: nameref.current.value,
      city: cityref.current.value,
      image: imageref.current.value,
      price: priceref.current.value,
      cuision: cuisionref.current.value,
      id: Date.now()
    }
    console.log(createObj);
    dispatch(addNewRes({ createItem: createObj }))
    alert('Added a new item!')
  }


  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-md-6" style={{lineHeight:'35px'}}>

        <label>name</label>
        <input ref={nameref} className="form-control" type="text" placeholder="enter name:" />
        <label>city</label>
        <input ref={cityref} className="form-control" type="text" placeholder="enter city:" />
        <label>image</label>
        <input ref={imageref} className="form-control" type="text" placeholder="enter image url:" />
        <label>price</label>
        <input ref={priceref} className="form-control" type="number" placeholder="enter price:" />
        <label>cuision</label>
        <input ref={cuisionref} className="form-control" type="text" placeholder="enter cuision:" />
        <button className="btn btn-success me-3 mt-3" onClick={onAddClick}>Add new</button>
        <Link to={'/'}><button className='btn btn-dark mt-3'>Back to home</button></Link>
      </div>
    </div>
  );
};
export default CreateRes;