const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('No duplicates', () => {
  let hand = new Hand('♥4', '♦2', '♣A', '♠3', '♠K');
  expect(CompareHands.hasDuplicates(hand)).toBeFalsy();
});

test('Has duplicates', () => {
  let hand = new Hand('♥4', '♥4', '♣A', '♠3', '♠K');
  expect(CompareHands.hasDuplicates(hand)).toBeTruthy();
});


test('Test that HighestCard returns truthy if highest card', () => {
  let hand = new Hand('♥4', '♦2', '♣A', '♠3', '♠K');
  expect(CompareHands.isHighestCard(hand)).toBeTruthy();
});

test('Checks that the highest hand with isHighestCard returns as ToBeGreaterThan', () => {
  let hand1 = new Hand('♥5', '♦5', '♣5', '♦2', '♠2');
  let hand2 = new Hand('♥7', '♦7', '♣7', '♣3', '♠3');
  let hand1Score = CompareHands.isHighestCard(hand1);
  let hand2Score = CompareHands.isHighestCard(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('check that the hand with isHighestCard return lowest score for the weakest hand(if two hands but with highest card)', () => {
  let hand1 = new Hand('♥A', '♦Q', '♣3', '♠7', '♦9');
  let hand2 = new Hand('♥8', '♦5', '♣2', '♥T', '♣K');
  let hand1Score = CompareHands.isHighestCard(hand1);
  let hand2Score = CompareHands.isHighestCard(hand2);
  //expect(hand2Score).toBeLessThan(hand1Score);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});