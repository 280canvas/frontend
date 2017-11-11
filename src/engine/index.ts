import {Program, ProgramList, StateStore} from "./types";
import {renderFrameForProgram} from "./renderer";
import { getStateForProgram } from "./utils";

const shouldRunProgramForFrame = (stateStore: StateStore) => (program: Program) => {
  const state = getStateForProgram(stateStore, program);
  const currentTime = Date.now();
  return currentTime > state.lastRun + program.interval;
};


function renderFrame(stateStore: StateStore, programList: Program[]) {
  programList
    .filter(shouldRunProgramForFrame(stateStore))
    .forEach(renderFrameForProgram(stateStore));
}

const programList: ProgramList = [];
const stateStore: StateStore = {};
let id = 0;

export function addProgram(program: any) {
  const programId =  id++;
  programList.push({ ...program, id: programId, interval: program.loop });
  stateStore[programId] = { variables: program.variables, lastRun: Date.now() };
}

export function registerCanvas(canvas: HTMLCanvasElement) {
  console.log('[engine] canvas registered', canvas);

  const context = canvas.getContext('2d');

  if (context === null) {
    console.error('canvas has no 2d rendering context available.');
    return;
  }

  // context.fillStyle = 'red';
  // context.fillRect(0, 0, 1200, 1200);


  const render =  () => requestAnimationFrame(() => {
    renderFrame(stateStore, programList);
    render();
  });

  render();
}
