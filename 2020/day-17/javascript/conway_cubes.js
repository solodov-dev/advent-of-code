const play = (input, dimensions) => {
  const space = parseInput(input, dimensions);
  for (let i = 0; i < 6; i++) {
    space.forEach((cube, key) => {
      if (cube.state === '#') {
        const [x, y, z, w] = strToCoords(key);
        updateNeighbours(
          x,
          y,
          z,
          w,
          space,
          dimensions === 3 ? neighbours3d : neighbours4d
        );
      }
    });
    space.forEach((cube) => updateState(cube));
    space.forEach((cube) => (cube.activeNeighbours = 0));
  }
  return sumActive(space);
};

const d = [-1, 0, 1];

const neighbours3d = d.flatMap((x) =>
  d
    .flatMap((y) => d.map((z) => ({ x, y, z })))
    .filter((el) => !Object.values(el).every((e) => e === 0))
);

const neighbours4d = neighbours3d
  .flatMap((n) => d.map((w) => ({ ...n, w })))
  .concat([
    { x: 0, y: 0, z: 0, w: 1 },
    { x: 0, y: 0, z: 0, w: -1 },
  ]);

const updateState = (cube) => {
  if (cube.state === '#' && ![2, 3].includes(cube.activeNeighbours)) {
    cube.state = '.';
  } else if (cube.state === '.' && cube.activeNeighbours === 3) {
    cube.state = '#';
  }
};

const sumActive = (space) => {
  let sum = 0;
  space.forEach((cube) => cube.state === '#' && sum++);
  return sum;
};

const strToCoords = (str) => str.split(',').map((val) => parseInt(val));

const coordsToStr = (x, y, z, w) =>
  w !== undefined ? `${x},${y},${z},${w}` : `${x},${y},${z}`;

const parseInput = (input, dimensions) => {
  const space = new Map();
  for (let [y, line] of input.entries()) {
    for (let [x, value] of Array.from(line).entries()) {
      space.set(coordsToStr(x, y, 0, dimensions === 4 ? 0 : undefined), {
        state: value,
        activeNeighbours: 0,
      });
    }
  }
  return space;
};

const updateNeighbours = (x, y, z, w, space, neighbours) => {
  neighbours.forEach((val) => {
    const key = coordsToStr(
      x + val.x,
      y + val.y,
      z + val.z,
      w === undefined ? w : w + val.w
    );
    const cube = space.get(key);
    cube
      ? cube.activeNeighbours++
      : space.set(key, { state: '.', activeNeighbours: 1 });
  });
};

export { play };
