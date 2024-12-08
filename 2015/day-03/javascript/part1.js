import { Santa } from "./shared.js";

export default (input) => {
  const santa = new Santa();
  input.split("").forEach((dir) => santa.move(dir));
  return santa.presents.size;
};

export const description = "";
export const input = `^v^v^v^v^v`;
export const output = 2;

