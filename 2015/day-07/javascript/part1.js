export default (input) => {
  const wires = {};
  const ts = input.split("\n").map((ln) => ln.replace(" -> ", " ").split(" "));

  for (const t of ts) {
    if (t.length === 2) {
      wires[t[1]] = !isNaN(t[0]) ? t[0] : { op1: t[0], do: "ID" };
    } else if (t.length === 3) {
      wires[t[2]] = { op1: t[1], do: t[0] };
    } else {
      wires[t[3]] = { op1: t[0], op2: t[2], do: t[1] };
    }
  }

  function get(label) {
    if (!isNaN(label)) return label;

    if (isNaN(wires[label])) {
      wires[label] = {
        ID: (wire) => get(wire.op1),
        NOT: (wire) => ~get(wire.op1) & 0xffff,
        AND: (wire) => get(wire.op1) & get(wire.op2),
        OR: (wire) => get(wire.op1) | get(wire.op2),
        RSHIFT: (wire) => get(wire.op1) >> get(wire.op2),
        LSHIFT: (wire) => get(wire.op1) << get(wire.op2),
      }[wires[label].do](wires[label]);
    }

    return wires[label];
  }

  return get("a");
};

export const description = "";
export const input = `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> a
NOT x -> h
NOT y -> i`;
export const output = 114;

