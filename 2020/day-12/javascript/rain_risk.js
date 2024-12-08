class Position {
  constructor(NS, EW) {
    this.NS = NS;
    this.EW = EW;
  }

  moveNS(NS) {
    this.NS += NS;
  }

  moveEW(EW) {
    this.EW += EW;
  }
}

class Compass {
  direction = 'E';
  directions = ['N', 'E', 'S', 'W'];

  rotate = (offset, direction) => {
    const newDirections =
      direction === 'R' ? [...this.directions] : [...this.directions].reverse();
    const curIndex = newDirections.indexOf(this.direction);
    const nextIndex = (curIndex + offset) % this.directions.length;
    this.direction = newDirections[nextIndex];
  };
}

class Movable {
  constructor(position) {
    this.position = position;
  }

  receiveCommand(command) {
    const [prefix, value] = this.parseCommand(command);
    if (['R', 'L'].includes(prefix)) {
      this.turn(prefix, value / 90);
    } else if (prefix === 'F') {
      this.forward(value);
    } else {
      this.move(prefix, +value);
    }
  }

  move(direction, value) {
    switch (direction) {
      case 'N':
        this.position.moveNS(value);
        break;
      case 'S':
        this.position.moveNS(-value);
        break;
      case 'E':
        this.position.moveEW(value);
        break;
      case 'W':
        this.position.moveEW(-value);
        break;
    }
  }

  parseCommand(command) {
    return [command.slice(0, 1), +command.slice(1)];
  }

  sail(input) {
    for (let command of input) this.receiveCommand(command);
    return this.manhattanDistance;
  }

  get manhattanDistance() {
    return Math.abs(this.position.EW) + Math.abs(this.position.NS);
  }
}

class Ship extends Movable {
  constructor(position, compass) {
    super(position);
    this.compass = compass;
  }

  turn(direction, offset) {
    this.compass.rotate(offset, direction);
  }

  forward(value) {
    this.move(this.compass.direction, value);
  }
}

class Waypoint extends Movable {
  constructor(position) {
    super(position);
  }

  turn(direction, offset) {
    const rotationMatrix = direction === 'R' ? [-1, 1] : [1, -1];
    for (let i = 0; i < offset; i++) {
      this.position = new Position(
        this.position.EW * rotationMatrix[0],
        this.position.NS * rotationMatrix[1]
      );
    }
  }
}

class WaypointShip extends Movable {
  constructor(positon, waypoint) {
    super(positon);
    this.waypoint = waypoint;
  }

  turn(direction, offset) {
    this.waypoint.turn(direction, offset);
  }

  move(direction, value) {
    this.waypoint.move(direction, value);
  }

  forward(value) {
    this.position.moveNS(value * this.waypoint.position.NS);
    this.position.moveEW(value * this.waypoint.position.EW);
  }
}

const ship = new Ship(new Position(0, 0), new Compass());
const waypointShip = new WaypointShip(
  new Position(0, 0),
  new Waypoint(new Position(1, 10))
);

export { ship, waypointShip };
