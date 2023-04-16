import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewRes,deleteRes } from "../features/creatSlice";
const CreateRes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubForm = (_bodyData)=>{
    console.log();
  }

  const dispatch= useDispatch();

const nameref=useRef();
const cityref=useRef();
const imageref=useRef();
const priceref=useRef();
const cuisionref=useRef();

const onAddClick=()=>{
    let createObj={
        name:nameref.current.value,
        city:cityref.current.value,
        image:imageref.current.value,
        price:priceref.current.value,
        cuision:cuisionref.current.value,
        id:Date.now()
    }
    console.log(createObj);
    dispatch(addNewRes({createItem:createObj}))
}


  return (
    <div className="col-md-6">
      <form onSubmit={handleSubmit(onSubForm)} id="id_form">
        <label>name</label>
        <input ref={nameref}
          {...register("name", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.name && <div className="text-danger">* Enter valid name</div>}
        <label>city</label>
        <input ref={cityref}
          {...register("city", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.city && <div className="text-danger">* Enter valid city</div>}
        <label>image</label>
        <input ref={imageref}
          {...register("image", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.image && <div className="text-danger">* Enter valid image</div>}
        <label>price</label>
        <input ref={priceref}
          {...register("price", { required: true, minLength: 2 })}
          className="form-control"
          type="number"
        />
        {errors.price && <div className="text-danger">* Enter valid price</div>}
        <label>cuision</label>
        <input ref={cuisionref}
          {...register("cuision", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.cuision && (
          <div className="text-danger">* Enter valid cuision</div>
        )}
        <button onClick={onAddClick}>Add new</button>
        <button onClick={()=>{
             window.confirm("are you sure?")&&dispatch(deleteRes())
        }}>delete</button>
      </form>
    </div>
  );
};
export default CreateRes;