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

export interface StatementRectangle {
  instruction: 'rectangle';
  x: Expression;
  y: Expression;
  w: Expression;
  h: Expression;
}

export type Statement = StatementRectangle;

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
