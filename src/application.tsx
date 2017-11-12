import React from 'react';
import ReactDOM from 'react-dom';

import { createConnection } from './engine/connection';
import Application from './components/Application';
import {addProgram} from "./engine/index";


createConnection();

addProgram({
  "variables": {
    "x": {
      "returns": "integer",
      "integer": 0
    }
  },
  "loop": 3000,
  "statements": [
    {
      "instruction": "rectangle",
      "x": {
        "returns": "variable",
        "variable": "x"
      },
      "y": {
        "returns": "integer",
        "integer": 0
      },
      "w": {
        "returns": "integer",
        "integer": 1200
      },
      "h": {
        "returns": "integer",
        "integer": 1200
      }
    },
    {
      "instruction": "circle",
      "x": {
        "returns": "integer",
        "integer": 500
      },
      "y": {
        "returns": "integer",
        "integer": 500
      },
      "r": {
        "returns": "binop",
        "binop": {
          "l": {
            "returns": "integer",
            "integer": 100
          },
          "r": {
            "returns": "funccall",
            "funccall": {
              "function": "sin",
              "arguments": [
                {
                  "returns": "variable",
                  "variable": "x"
                }
              ]
            }
          },
          "op": "*"
        }
      }
    }
  ]
});

ReactDOM.render(<Application />, document.getElementById('app'));
