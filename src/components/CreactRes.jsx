import React from "react";
import { useForm } from "react-hook-form";
const CreateRes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubForm = (_bodyData)=>{
  }
  return (
    <div className="col-md-6">
      <form onSubmit={handleSubmit(onSubForm)} id="id_form">
        <label>name</label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.name && <div className="text-danger">* Enter valid name</div>}
        <label>id</label>
        <input
          {...register("id", { required: true, minLength: 2 })}
          className="form-control"
          type="number"
        />
        {errors.id && <div className="text-danger">* Enter valid id</div>}
        <label>city</label>
        <input
          {...register("city", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.city && <div className="text-danger">* Enter valid city</div>}
        <label>image</label>
        <input
          {...register("image", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.image && <div className="text-danger">* Enter valid image</div>}
        <label>price</label>
        <input
          {...register("price", { required: true, minLength: 2 })}
          className="form-control"
          type="number"
        />
        {errors.price && <div className="text-danger">* Enter valid price</div>}
        <label>cuision</label>
        <input
          {...register("cuision", { required: true, minLength: 2 })}
          className="form-control"
          type="text"
        />
        {errors.cuision && (
          <div className="text-danger">* Enter valid cuision</div>
        )}
        <button>submit</button>
      </form>
    </div>
  );
};
export default CreateRes;