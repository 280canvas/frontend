import {Expression, ProgramState, ExpressionType} from "./types";

export function computeExpression(state: ProgramState, expression: Expression): number {
  switch (expression.returns) {
    case (ExpressionType.Integer):
      return expression.integer;
    case (ExpressionType.Variable):
      return state.variables[expression.variable];
    case (ExpressionType.Binop):
      const lhs = computeExpression(state, expression.binop.l);
      const rhs = computeExpression(state, expression.binop.r);

      switch (expression.binop.op) {
        case "/":
          return lhs / rhs;
        case "//":
          return Math.floor(lhs / rhs);
        case "*":
          return lhs * rhs;
        case "+":
          return lhs + rhs;
        case "-":
          return lhs - rhs;
        case "%":
          return lhs % rhs;
        default: return 0;
      }
    case (ExpressionType.FunctionCall):
      const computedExps: number[] = expression.funccall.arguments.map(computeExpression.bind(null, state));
      switch (expression.funccall.functionName) {
        case "sin":
          return Math.sin(computedExps[0] * (Math.PI / 180));
        case "cos":
          return Math.cos(computedExps[0] * (Math.PI / 180));
        case "tan":
          return Math.tan(computedExps[0] * (Math.PI / 180));
        case "pow":
          return Math.pow(computedExps[0], computedExps[2]);
        case "random":
          const max: number = computedExps[0];
          const min: number = computedExps[1];
          return Math.floor(Math.random()*(max-min+1)+min);
        case "abs":
          return Math.abs(computedExps[0]);
      }
    default: return 0;
  }
}
