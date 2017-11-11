import {Program, Statement, StateStore} from "./types";
import { getStateForProgram } from "./utils";
import { computeExpression } from "./expressions";

export const renderFrameForProgram = (stateStore: StateStore, ctx: CanvasRenderingContext2D) => (program: Program) => {
  const state = getStateForProgram(stateStore, program);
  console.log('[engine] starting render for program', program.id);

  program.statements.forEach((statement: Statement) => {
    console.log('[engine] rendering statement', statement);
    switch (statement.instruction) {
      case ("clear"):
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        break;
      case ("assign"):
        return state.variables[statement.identifier] = computeExpression(state, statement.value);
      case ("rectangle"):
        ctx.rect(
          computeExpression(state, statement.x),
          computeExpression(state, statement.y),
          computeExpression(state, statement.w),
          computeExpression(state, statement.h)
        );
        ctx.fill();
        break;
      case ("circle"):
        ctx.ellipse(
          computeExpression(state, statement.x),
          computeExpression(state, statement.y),
          computeExpression(state, statement.r),
          computeExpression(state, statement.r),
          0,0,0
        );
        ctx.fill();
        break;
      case ("line"):
        ctx.beginPath();
        ctx.lineTo()
    }
  });


  state.lastRun = Date.now();
};
