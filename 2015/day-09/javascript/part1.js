import fs from 'fs';
import { parseInput, findRoute } from './utils.js';

let data = fs.readFileSync(process.stdin.fd, 'utf-8');

const { places, distances } = parseInput(data);

const result = findRoute(Infinity, Math.min, places, distances)

console.log(result);


