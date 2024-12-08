import { Santa } from "./shared.js";

export default (input) => {
  const santa = new Santa();
  const robot = new Santa();
  for (let i = 0; i < input.length; i += 2) {
    santa.move(input[i]);
    robot.move(input[i + 1]);
  }
  return new Set([...santa.presents, ...robot.presents]).size;
};

export const description = "";
export const input = `^v^v^v^v^v`;
export const output = 11;

