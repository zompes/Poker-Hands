const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraightFlush returns truthy if Straight Flush', () => {

    let hand1 = new Hand('♥A', '♦2', '♦3', '♥4', '♦5')
    let hand2 = new Hand('♥2', '♦2', '♣Q', '♥J', '♦A');
    expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});

test('check that isStraightFlush returns truthy if Straight Flush', () => {

    let hand1 = new Hand('♥A', '♦2', '♦3', '♥4', '♦5')
    let hand2 = new Hand('♥2', '♦2', '♣Q', '♥J', '♦A');
    expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});