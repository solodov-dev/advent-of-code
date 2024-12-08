import testInput from '../helpers/test_input.js';
import { ship, waypointShip } from './rain_risk.js';

const input = testInput(
  `F10
N3
F7
R90
F11`
);

describe('Rain risk', () => {
  it('Calculates manhattan distance', () => {
    expect(ship.sail(input)).toBe(25);
  });

  it('Calculates manhattan distance with waypoint', () => {
    expect(waypointShip.sail(input)).toBe(286);
  });
});
