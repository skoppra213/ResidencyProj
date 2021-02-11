import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function HookForm() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data:FormData) => console.log("data",data);

  console.log(watch("example")) // watch input value by passing the name of it

  return (
   
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="example" defaultValue="test" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="exampleRequired" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
      
    </form>
  );
}