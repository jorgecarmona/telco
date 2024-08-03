import React from 'react';
import { useForm } from 'react-hook-form';

function MyForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} placeholder="Name" />
      {errors.name && <p>Name is required</p>}

      <input
        type="email"
        {...register('email', { required: true })}
        placeholder="Email"
      />
      {errors.email && <p>Email is required</p>}

      <input type="submit" />
    </form>
  );
}

export default MyForm;
