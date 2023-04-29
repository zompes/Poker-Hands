const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('No duplicates', () => {
  let hand = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  expect(CompareHands.hasDuplicates(hand)).toBeFalsy();
});

test('Has duplicates', () => {
  let hand = new Hand('♥7', '♥7', '♣7', '♠3', '♠7');
  expect(CompareHands.hasDuplicates(hand)).toBeTruthy();
});

test('Test that four of a kind returns truthy if four of a kind', () => {
  let hand = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test('Test that isFourOfAKind returns falsey if not four of a kind', () => {
  let hand = new Hand('♥A', '♦2', '♣A', '♠3', '♠K');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});

test('Has duplicates', () => {
  let hand1 = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  let hand2 = new Hand('♥7', '♥K', '♣A', '♠8', '♠2');
expect(CompareHands.hasDuplicatesHands(hand1, hand2)).toBeTruthy();
});

test('No duplicates', () => {
  let hand1 = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  let hand2 = new Hand('♥T', '♥K', '♣A', '♠8', '♠2');
expect(CompareHands.hasDuplicatesHands(hand1, hand2)).toBeFalsy();
});

test('Checks that the highest hand with FourOfAKind returns as ToBeGreaterThan', () => {
  let hand1 = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  let hand2 = new Hand('♥8', '♦8', '♣8', '♠3', '♠8');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('Checks that the lowest hand with FourOfAKind returns as ToBeGreaterThan(note: lowest hand)', () => {
  let hand1 = new Hand('♥T', '♦T', '♣T', '♠3', '♠T');
  let hand2 = new Hand('♥8', '♦8', '♣8', '♠3', '♠8');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  //expect(hand2Score).toBeLessThan(hand1Score);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});