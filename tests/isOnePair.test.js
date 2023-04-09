const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that OnePair returns truthy is one pair', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.isOnePair(hand)).toBeTruthy();
});