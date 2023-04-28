const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('No duplicates', () => {
  let hand = new Hand('♥2', '♥3', '♥4', '♥5', '♥6');
  expect(CompareHands.hasDuplicates(hand)).toBeFalsy();
});

test('Has duplicates', () => {
  let hand = new Hand('♥2', '♥2', '♥4', '♥5', '♥6');
  expect(CompareHands.hasDuplicates(hand)).toBeTruthy();
});


test('check that isStraightFlush returns truthy if straight flush', () => {
  let hand = new Hand('♥2', '♥3', '♥4', '♥5', '♥6')
  expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});

test('Test that isStraight returns falsey if not straight flush', () => {
  let hand = new Hand('♥A', '♦2', '♣A', '♠3', '♠K');
  expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
});

test('Checks that the highest hand with isStraightFlush returns as ToBeGreaterThan', () => {
  let hand1 = new Hand('♥4', '♥5', '♥6', '♥7', '♥8')
  let hand2 = new Hand('♥9', '♥T', '♥J', '♥Q', '♥K');
  let hand1Score = CompareHands.isStraightFlush(hand1);
  let hand2Score = CompareHands.isStraightFlush(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('check that the hand with isStraightFlush return lowest score for the weakest hand(if two hands but with stright)', () => {
  let hand1 = new Hand('♥7', '♥8', '♥9', '♥T', '♥J')
  let hand2 = new Hand('♥2', '♥3', '♥4', '♥5', '♥6');
  let hand1Score = CompareHands.isStraightFlush(hand1);
  let hand2Score = CompareHands.isStraightFlush(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});