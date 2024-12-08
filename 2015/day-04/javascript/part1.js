import { createHash } from "crypto";

export default (input) => {
  let c = -1;
  let res;

  do {
    c++;
    res = createHash("md5").update(`${input}${c.toString()}`).digest("hex");
  } while (!res.startsWith("00000"));

  return c;
};

export const description = "";
export const input = `abcdef`;
export const output = 609043;

