const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that TwoPair returns truthy is two pair', () => {
  let hand = new Hand('♥7', '♦3', '♣7', '♠3', '♠7');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});