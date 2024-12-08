import { ship, waypointShip } from './rain_risk.js';

export default [
  {
    title: 'Returns the Manhattan distance',
    result: (input) => ship.sail(input),
  },
  {
    title: 'Returns the Manhattan distance with waypoint',
    result: (input) => waypointShip.sail(input),
  },
];
