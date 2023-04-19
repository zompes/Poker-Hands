const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that threeOfAKind returns truthy if three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});

test('Checks that the highest hand with isThreeOfAKind returns as ToBeGreaterThan', () => {
  let hand1 = new Hand('♥5', '♦5', '♣5', '♦4', '♠2');
  let hand2 = new Hand('♥7', '♦7', '♣7', '♣2', '♠3');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('check that the hand with isThreeOfAKind return lowest score for the weakest hand(if two hands but with three of a kind)', () => {
  let hand1 = new Hand('♥A', '♦A', '♣A', '♠7', '♦9');
  let hand2 = new Hand('♥K', '♦K', '♣K', '♥6', '♣8');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  //expect(hand2Score).toBeLessThan(hand1Score);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});