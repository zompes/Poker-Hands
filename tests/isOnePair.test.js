const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('No duplicates', () => {
  let hand = new Hand('♥9', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.hasDuplicates(hand)).toBeFalsy();
});

test('Has duplicates', () => {
  let hand = new Hand('♥9', '♥9', '♣7', '♠3', '♠7');
  expect(CompareHands.hasDuplicates(hand)).toBeTruthy();
});


test('Test that OnePair returns truthy if one pair', () => {
  let hand = new Hand('♥9', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('Test that isOnePair returns falsey if not one pair', () => {
  let hand = new Hand('♥A', '♦2', '♣Q', '♠3', '♠K');
  expect(CompareHands.isOnePair(hand)).toBeFalsy();
});

test('Checks that the highest hand with isOnePair returns as ToBeGreaterThan', () => {
  let hand1 = new Hand('♥5', '♦5', '♣K', '♦2', '♠Q');
  let hand2 = new Hand('♥Q', '♦Q', '♣7', '♣3', '♠5');
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('check that the hand with isOnePair return lowest score for the weakest hand(if two hands but with one pair)', () => {
  let hand1 = new Hand('♥A', '♦A', '♣3', '♠7', '♦9');
  let hand2 = new Hand('♥8', '♦8', '♣2', '♥T', '♣K');
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  //expect(hand2Score).toBeLessThan(hand1Score);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});