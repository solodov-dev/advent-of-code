import { Game, play } from './rambunctious_recitation.js';

describe('Rambunctions recitation functional', () => {
  it('Plays the game', () => {
    expect(play([0, 3, 6], 10)).toBe(0);
  });
  it('Plays the game', () => {
    expect(play([0, 3, 6], 2020)).toBe(436);
  });
  it('Plays the game', () => {
    expect(play([1, 3, 2], 2020)).toBe(1);
  });
  it('Plays the game', () => {
    expect(play([2, 1, 3], 2020)).toBe(10);
  });
  it('Plays the game', () => {
    expect(play([1, 2, 3], 2020)).toBe(27);
  });
  it('Plays the game', () => {
    expect(play([2, 3, 1], 2020)).toBe(78);
  });
  it('Plays the game', () => {
    expect(play([3, 2, 1], 2020)).toBe(438);
  });
  it('Plays the game', () => {
    expect(play([3, 1, 2], 2020)).toBe(1836);
  });
});

describe('Rambunctions recitation OOP', () => {
  it('Plays the game', () => {
    const game = new Game([0, 3, 6], 10);
    expect(game.play()).toBe(0);
  });
  it('Plays the game', () => {
    const game = new Game([0, 3, 6], 2020);
    expect(game.play()).toBe(436);
  });
  it('Plays the game', () => {
    const game = new Game([1, 3, 2], 2020);
    expect(game.play()).toBe(1);
  });
});
