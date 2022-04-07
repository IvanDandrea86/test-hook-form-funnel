import React from "react";
import { GlobalState, useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { NextPage } from "next";

const Result:NextPage = (props) => {
  const { state } = useStateMachine(updateAction as any);
  return (
    <>
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};
export default Result;
