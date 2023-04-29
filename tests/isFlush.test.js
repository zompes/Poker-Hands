const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('No duplicates', () => {
  let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.hasDuplicates(hand)).toBeFalsy();
});

test('Has duplicates', () => {
  let hand = new Hand('♣2', '♣2', '♥4', '♣8', '♣7');
  expect(CompareHands.hasDuplicates(hand)).toBeTruthy();
});

test('check that isFlush returns truthy if flush', () => {
  for (let suit of suits) {
    let hand = new Hand(suit + '2', suit + '6', suit + '4', suit + '8', suit + '7');
    expect(CompareHands.isFlush(hand)).toBeTruthy();
  }
});

test('check that isFlush returns falsey if not flush', () => {
  let hand = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  expect(CompareHands.isFlush(hand)).toBeFalsy();
});

test('Has duplicates for both hands', () => {
  let hand1 = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  let hand2 = new Hand('♣3', '♣6', '♥5', '♣T', '♣A');
expect(CompareHands.hasDuplicatesHands(hand1, hand2)).toBeTruthy();
});

test('No duplicates for both hands', () => {
  let hand1 = new Hand('♣2', '♣6', '♥4', '♣8', '♣7');
  let hand2 = new Hand('♣3', '♣4', '♥5', '♣K', '♣Q');
expect(CompareHands.hasDuplicatesHands(hand1, hand2)).toBeFalsy();
});

test('check that isFlush returns a higher score for a stronger hand (if two hands but with flush)', () => {
  let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
  let hand2 = new Hand('♦T', '♦9', '♦5', '♦Q', '♦A');
  let hand1Score = CompareHands.isFlush(hand1);
  let hand2Score = CompareHands.isFlush(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('check that isFlush returns lowest score for the weakest hand (if two hands but with flush)', () => {
  let hand1 = new Hand('♣A', '♣K', '♣8', '♣5', '♣T');
  let hand2 = new Hand('♦4', '♦2', '♦A', '♦J', '♦9');
  let hand1Score = CompareHands.isFlush(hand1);
  let hand2Score = CompareHands.isFlush(hand2);
  expect(hand2Score).toBeLessThan(hand1Score);
});