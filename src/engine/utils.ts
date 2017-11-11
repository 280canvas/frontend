import { StateStore, Program } from "./types";

export function getStateForProgram(stateStore: StateStore, program: Program) {
  return stateStore[program.id];
}
