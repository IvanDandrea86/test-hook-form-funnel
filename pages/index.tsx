import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { useRouter } from "next/router";
import updateAction from "./updateAction";
import { NextPage } from "next";


const Step1:NextPage = (props) => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const router = useRouter();

  const onSubmit= (data:any) => {
    actions.updateAction(data);
    router.push("./step2");
  };

  console.log(state, "state");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1</h2>
      <label>
        First Name:
        <input {...register("firstName")} defaultValue={state.firstName } />
      </label>
      <label>
        Last Name:
        <input {...register("lastName")} defaultValue={state.lastName} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step1;
