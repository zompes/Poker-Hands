const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('No duplicates', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  expect(CompareHands.hasDuplicates(hand)).toBeFalsy();
});

test('Has duplicates', () => {
  let hand = new Hand('♥9', '♥9', '♣7', '♥5', '♦6');
  expect(CompareHands.hasDuplicates(hand)).toBeTruthy();
});


test('check that isStraight returns truthy if straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeTruthy();
});

test('Test that isStraight returns falsey if not staight', () => {
  let hand = new Hand('♥A', '♦2', '♣A', '♠3', '♠K');
  expect(CompareHands.isStraight(hand)).toBeFalsy();
});

test('Has duplicates for both hands', () => {
  let hand1 = new Hand('♥2', '♦3', '♣4', '♦5', '♠6');
  let hand2 = new Hand('♣3', '♣6', '♥2', '♣T', '♣A');
expect(CompareHands.hasDuplicatesHands(hand1, hand2)).toBeTruthy();
});

test('No duplicates for both hands', () => {
  let hand1 = new Hand('♥2', '♦3', '♣4', '♦5', '♠6');
  let hand2 = new Hand('♣3', '♣A', '♥A', '♣2', '♣Q');
expect(CompareHands.hasDuplicatesHands(hand1, hand2)).toBeFalsy();
});

test('Checks that the highest hand with isStraight returns as ToBeGreaterThan', () => {
  let hand1 = new Hand('♥2', '♦3', '♣4', '♦5', '♠6');
  let hand2 = new Hand('♥5', '♦6', '♣7', '♣8', '♠9');
  let hand1Score = CompareHands.isStraight(hand1);
  let hand2Score = CompareHands.isStraight(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('check that the hand with isStraight return lowest score for the weakest hand(if two hands but with stright)', () => {
  let hand1 = new Hand('♥A', '♦K', '♣Q', '♠J', '♦T');
  let hand2 = new Hand('♥4', '♦5', '♣6', '♥7', '♣8');
  let hand1Score = CompareHands.isStraight(hand1);
  let hand2Score = CompareHands.isStraight(hand2);
  //expect(hand2Score).toBeLessThan(hand1Score);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});