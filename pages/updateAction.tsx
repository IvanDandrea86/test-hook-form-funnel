import { GlobalState } from "little-state-machine";

export default function updateAction(state:GlobalState, payload:any) {
    console.log("state:", state);
    console.log("payload:", payload);
    return {
      ...state,
      ...payload
    };
  }
  