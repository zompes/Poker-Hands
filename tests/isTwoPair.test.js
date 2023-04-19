const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that TwoPair returns truthy if two pair', () => {
  let hand = new Hand('♥7', '♦3', '♣7', '♠3', '♠6');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('Checks that the highest hand with isTwoPair returns as ToBeGreaterThan', () => {
  let hand1 = new Hand('♥5', '♦5', '♣K', '♦K', '♠A');
  let hand2 = new Hand('♥6', '♦6', '♣A', '♣A', '♠T');
  let hand1Score = CompareHands.isTwoPair(hand1);
  let hand2Score = CompareHands.isTwoPair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('check that the hand with isTwoPair return lowest score for the weakest hand(if two hands but with two pair)', () => {
  let hand1 = new Hand('♥A', '♦A', '♣3', '♠3', '♦9');
  let hand2 = new Hand('♥8', '♦2', '♣2', '♥K', '♣K');
  let hand1Score = CompareHands.isTwoPair(hand1);
  let hand2Score = CompareHands.isTwoPair(hand2);
  //expect(hand2Score).toBeLessThan(hand1Score);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});