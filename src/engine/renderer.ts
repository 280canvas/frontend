import {Program, Statement, StateStore} from "./types";
import { getStateForProgram } from "./utils";

export const renderFrameForProgram = (stateStore: StateStore) => (program: Program) => {
  const state = getStateForProgram(stateStore, program);
  console.log('[engine] starting render for program', program.id);

  program.statements.forEach((statement: Statement) => {
    console.log('[engine] rendering statement', statement);
  });


  state.lastRun = Date.now();
};
