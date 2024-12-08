import sub from './sub.js';

const sub2 = Object.create(sub);

sub2.aim = 0;
sub2.horizontal = 0;
sub2.depth = 0;

sub2.down = function(unit) {
    this.aim += unit;
};

sub2.up = function(unit) {
    this.aim -= unit;
};

sub2.forward = function(unit) {
    this.horizontal += unit;
    this.depth += this.aim * unit;
};

export default sub2;
