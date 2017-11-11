export enum ExpressionType {
  Integer = 'integer',
  Variable = 'variable',
  Binop = 'binop',
  FunctionCall = 'funccall',
}

export interface ExpressionInteger {
  returns: ExpressionType.Integer;
  integer: number;
}

export interface ExpressionVariable {
  returns: ExpressionType.Variable;
  variable: string;
}

export interface ExpressionBinop {
  returns: ExpressionType.Binop;
  l: Expression;
  r: Expression;
  op: string;
}

export interface ExpressionFunctionCall {
  returns: ExpressionType.FunctionCall;
  funccall: {
    functionName: string;
    arguments: Expression[]
  }
}

export interface StateStore {
  [programId:number]: ProgramState
}

export type ProgramList = Program[];

export type Expression = ExpressionInteger | ExpressionVariable | ExpressionBinop | ExpressionFunctionCall;

export interface StatementClear {
  instruction: 'clear'
}

export interface StatementRectangle {
  instruction: 'rectangle';
  x: Expression;
  y: Expression;
  w: Expression;
  h: Expression;
}

export interface StatementCircle {
  instruction: 'circle';
  x: Expression;
  y: Expression;
  r: Expression;
}

export interface StatementLine {
  instruction: 'line';
  x1: Expression;
  y1: Expression;
  x2: Expression;
  y2: Expression;
}

export interface StatementArc {
  instruction: 'arc';
  x1: Expression;
  y1: Expression;
  x2: Expression;
  y2: Expression;
  cx: Expression;
  cy: Expression;
}

export interface StatementAssign {
  instruction: 'assign';
  identifier: string;
  value: Expression;
}

export type Statement = StatementClear | StatementRectangle | StatementCircle | StatementLine | StatementArc | StatementAssign;

export interface ProgramState {
  variables: {
    [variableName:string]: number
  };
  lastRun: number;
}

export interface Program {
  id: number;
  statements: Statement[],
  interval: number;
}
