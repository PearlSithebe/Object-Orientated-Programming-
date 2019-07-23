describe("DiceFactory", function(){

});
it ("should be able to make a die", function(){
    let die = new DiceFactory
    expect (die.makeDice(6)).toBe(true);
});
describe("DiceTester", function(){

});
it ("should be be able to test only a die with 6 sides", function () {
    let dice = new DiceTester(12);
    expect (dice.dieTest()).toBe(undefined);
})
it ("should be be able to test if the die is weighted or fair", function () {
    let dice = new DiceTester(6);
    expect (dice.dieTest()).toBe(false);
})

