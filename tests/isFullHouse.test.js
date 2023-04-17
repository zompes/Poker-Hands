const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that Fullhouse returns truthy if full house', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠2', '♠7');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});