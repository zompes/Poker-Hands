const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that TwoPair returns truthy if two pair', () => {
  let hand = new Hand('♥7', '♦3', '♣7', '♠3', '♠6');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});