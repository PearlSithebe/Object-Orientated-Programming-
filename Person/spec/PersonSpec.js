describe("Person", function() {

it ("should be able to identify a person as defined", function(){
    // let person1 = new Person("Palesa","Sithebe", 22, "female", ["singing", "drawing"])
    expect(Person).toBeDefined();
});

it ("should be able to create a person and use the greeting method", function () {
    let person1 = new Person("Palesa","Sithebe", 22, "female", ["singing", "drawing"])
    expect(person1.greeting()).toBe("Hello I am Palesa Sithebe I am 22 years old and my interests are singing and drawing");
});

it ("should be able to create the second person", function () {
    let person2 = new Person("Tumi","Sithebe", 24, "female", ["dancing", "skating"])
    expect(person2.greeting()).toBe("Hello I am Tumi Sithebe I am 24 years old and my interests are dancing and skating");
});
});
