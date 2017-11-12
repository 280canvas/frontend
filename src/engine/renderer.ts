import {Program, Statement, StateStore} from "./types";
import { getStateForProgram } from "./utils";
import { computeExpression } from "./expressions";


export const renderFrameForProgram = (stateStore: StateStore, ctx: CanvasRenderingContext2D) => (program: Program) => {
  const state = getStateForProgram(stateStore, program);
  console.log('[engine] starting render for program', program.id);
  const ctxwidth = ctx.canvas.width;
  const ctxheight = ctx.canvas.height;
  const percentageToCoord = (percentange: number, absoluteSpace: number) => {
    var normalisedPercentage = percentange/1000;
    return normalisedPercentage * absoluteSpace;
  }

  program.statements.forEach((statement: Statement) => {
    console.log('[engine] rendering statement', statement);
    switch (statement.instruction) {
      case ("clear"):
        ctx.clearRect(0,0,ctxwidth, ctxheight);
        break;
      case ("colour"):
        ctx.fillStyle = statement.colour;
        ctx.strokeStyle = statement.colour;
        break;
      case ("assign"):
        return state.variables[statement.identifier] = computeExpression(state, statement.value);
      case ("rectangle"):
        ctx.rect(
          percentageToCoord(computeExpression(state, statement.x), ctxwidth),
          percentageToCoord(computeExpression(state, statement.y), ctxheight),
          percentageToCoord(computeExpression(state, statement.w), ctxwidth),
          percentageToCoord(computeExpression(state, statement.h), ctxheight)
        );
        ctx.fill();
        break;
      case ("circle"):
        ctx.ellipse(
          percentageToCoord(computeExpression(state, statement.x), ctxwidth),
          percentageToCoord(computeExpression(state, statement.y), ctxheight),
          percentageToCoord(computeExpression(state, statement.r), ctxwidth),
          percentageToCoord(computeExpression(state, statement.r), ctxheight),
          0,0,0
        );
        ctx.fill();
        break;
      case ("line"):
        ctx.beginPath();
        ctx.moveTo(
          percentageToCoord(computeExpression(state, statement.x1), ctxwidth),
          percentageToCoord(computeExpression(state, statement.y1), ctxheight)
        );
        ctx.lineTo(
          percentageToCoord(computeExpression(state, statement.x2), ctxwidth),
          percentageToCoord(computeExpression(state, statement.y2), ctxheight)
        );
        ctx.stroke();
        break;
      case ("arc"):
        ctx.beginPath();
        ctx.moveTo(
          percentageToCoord(computeExpression(state, statement.x1), ctxwidth),
          percentageToCoord(computeExpression(state, statement.y1), ctxheight)
        );
        ctx.quadraticCurveTo(
          percentageToCoord(computeExpression(state, statement.x2), ctxwidth),
          percentageToCoord(computeExpression(state, statement.y2), ctxheight),
          percentageToCoord(computeExpression(state, statement.cx), ctxwidth),
          percentageToCoord(computeExpression(state, statement.cy), ctxheight)
        );
        ctx.stroke();
    }
  });


  state.lastRun = Date.now();
};
