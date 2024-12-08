import { program1, program2 } from './docking_data.js';

export default [
  {
    title: 'Runs the program applying masks',
    result: (input) => program1.execute(input),
  },
  {
    title: 'Runs the program with memory address decoder',
    result: (input) => program2.execute(input),
  },
];
