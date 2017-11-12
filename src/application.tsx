import React from 'react';
import ReactDOM from 'react-dom';

import { createConnection } from './engine/connection';
import Application from './components/Application';
import {addProgram} from "./engine/index";


createConnection(addProgram);

// addProgram({
//   "variables": {
//       "x": {
//           "returns": "integer",
//           "integer": 0
//       }
//   },
//   "loop": 50,
//   "statements": [
//       {
//           "instruction": "colour",
//           "colour": "blue"
//       },
//       {
//           "instruction": "line",
//           "x1": {
//               "returns": "funccall",
//               "funccall": {
//                   "functionName": "abs",
//                   "arguments": [
//                       {
//                           "returns": "binop",
//                           "binop": {
//                               "l": {
//                                   "returns": "integer",
//                                   "integer": 500
//                               },
//                               "r": {
//                                   "returns": "funccall",
//                                   "funccall": {
//                                       "functionName": "sin",
//                                       "arguments": [
//                                           {
//                                               "returns": "variable",
//                                               "variable": "x"
//                                           }
//                                       ]
//                                   }
//                               },
//                               "op": "*"
//                           }
//                       }
//                   ]
//               }
//           },
//           "y1": {
//               "returns": "integer",
//               "integer": 50
//           },
//           "x2": {
//               "returns": "funccall",
//               "funccall": {
//                   "functionName": "random",
//                   "arguments": [
//                       {
//                           "returns": "integer",
//                           "integer": 0
//                       },
//                       {
//                           "returns": "integer",
//                           "integer": 1000
//                       }
//                   ]
//               }
//           },
//           "y2": {
//               "returns": "integer",
//               "integer": 800
//           }
//       },
//       {
//           "instruction": "colour",
//           "colour": "red"
//       },
//       {
//           "instruction": "line",
//           "x1": {
//               "returns": "integer",
//               "integer": 1000
//           },
//           "y1": {
//               "returns": "integer",
//               "integer": 500
//           },
//           "x2": {
//               "returns": "integer",
//               "integer": 500
//           },
//           "y2": {
//               "returns": "funccall",
//               "funccall": {
//                   "functionName": "random",
//                   "arguments": [
//                       {
//                           "returns": "integer",
//                           "integer": 0
//                       },
//                       {
//                           "returns": "integer",
//                           "integer": 1000
//                       }
//                   ]
//               }
//           }
//       },
//       {
//           "instruction": "assign",
//           "identifier": "x",
//           "value": {
//               "returns": "binop",
//               "binop": {
//                   "l": {
//                       "returns": "variable",
//                       "variable": "x"
//                   },
//                   "r": {
//                       "returns": "integer",
//                       "integer": 1
//                   },
//                   "op": "+"
//               }
//           }
//       }
//   ]
// });

ReactDOM.render(<Application />, document.getElementById('app'));
