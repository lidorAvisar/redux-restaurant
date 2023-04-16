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
    console.log(121);
    dispatch(addNewRes({ createItem: createObj }))
  }


  return (
    <div className="col-md-6">
      <form>
        <label>name</label>
        <input ref={nameref}
          className="form-control"
          type="text"
        />
        <label>city</label>
        <input ref={cityref}
          className="form-control"
          type="text"
        />
        <label>image</label>
        <input ref={imageref}
          className="form-control"
          type="text"
        />
        <label>price</label>
        <input ref={priceref}
          className="form-control"
          type="number"
        />
        <label>cuision</label>
        <input ref={cuisionref}
          className="form-control"
          type="text"
        />
        <button  onClick={onAddClick}>Add new</button>
        <button onClick={() => {
          window.confirm("are you sure?") && dispatch(deleteRes())
        }}>delete</button>
      </form>
      <Link to={'/'}><button className='btn btn-success'>Back to home</button></Link>
    </div>
  );
};
export default CreateRes;