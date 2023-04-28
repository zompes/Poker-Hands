const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('No duplicates', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠2', '♠7');
  expect(CompareHands.hasDuplicates(hand)).toBeFalsy();
});

test('Has duplicates', () => {
  let hand = new Hand('♥7', '♥7', '♣7', '♠2', '♠7');
  expect(CompareHands.hasDuplicates(hand)).toBeTruthy();
});

test('Test that Fullhouse returns truthy if full house', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠2', '♠7');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('Test that isFullHouse returns falsey if not full house', () => {
  let hand = new Hand('♥A', '♦2', '♣A', '♠3', '♠K');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});

test('Checks that the highest hand with FullHouse returns as ToBeGreaterThan', () => {
  let hand1 = new Hand('♥5', '♦5', '♣5', '♦2', '♠2');
  let hand2 = new Hand('♥7', '♦7', '♣7', '♣3', '♠3');
  let hand1Score = CompareHands.isFullHouse(hand1);
  let hand2Score = CompareHands.isFullHouse(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('check that isFullHouse returns a lower score for a weakest hand(if two hands but with full house)', () => {
  let hand1 = new Hand('♥A', '♦A', '♣A', '♠9', '♦9');
  let hand2 = new Hand('♥8', '♦8', '♣8', '♥3', '♣3');
  let hand1Score = CompareHands.isFullHouse(hand1);
  let hand2Score = CompareHands.isFullHouse(hand2);
  //expect(hand2Score).toBeLessThan(hand1Score);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});