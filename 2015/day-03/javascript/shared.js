export class Santa {
  x = 0;
  y = 0;
  presents = new Set().add("0_0");
  move(dir) {
    switch (dir) {
      case ">":
        this.y++;
        break;
      case "<":
        this.y--;
        break;
      case "^":
        this.x++;
        break;
      case "v":
        this.x--;
        break;
    }
    this.presents.add(`${this.x}_${this.y}`);
  }
}
