// Create a class for a Pet

// attributes
//     owner - string
//     name - string
//     walk - a method that logs 'walka walka'
// instantiating a new pet takes the pets name as a parameter and sets the attribute;
// create one pet and log it
// run the walk method to make sure it works as expected

class Pet {
    constructor (owner, name) {
        this.owner = owner;
        this.name = name;
    }
    walk() {
        console.log("walka walka")
    }
}

const pet = new Pet("Beverly", "Gale")
pet.walk()

// this should inherit from Pet
// attributes
//     price - 20
// methods
//     bark() - log "bark"
//     chaseTail() - log "oh boy oh boy oh boy"
//     getPrice() - return price
// create a new dog and log it
// test all the methods to make sure they work as expected

class Dog extends Pet {
    constructor(owner, name){
        super(owner, name);
        this.price = 20;
    }
    bark() {
        console.log("bark")
    }
    chaseTail() {
        console.log("oh boy oh boy oh boy")
    }
    getPrice() {
        return this.price;
    }
}
const newDog = new Dog("Tim", "Spark")
console.log(newDog)
newDog.chaseTail()



// Create a class for a Cat

//     this should inherit from Pet
//     attributes
//         price - 10
//     methods
//         purr() - log "purrrrr"
//         clean() - log "cleaning"
//         getPrice() - return price
//         walk() - overwrite the method to console.log 'strut strut'
//     create a new cat and log it
//     test all the methods to make sure they work as expected
class Cat extends Pet {
    constructor(owner,name){
        super(owner,name) //reference from parent class
        this.price = 10;
    }
    purr(){
        console.log("purrrrr")
    }
    clean(){
        console.log("cleaning")
    }
    getPrice(){
        return this.price;
    }
    walk(){
        console.log("strut strut")
    }
}

const newCat = new Cat("Beverly", "Gale")
newCat
newCat.walk()
newCat.purr()
console.log(newCat.getPrice())

newDog.name = "Bruce"
newCat.name = "Meow"

console.log(newDog.name)
console.log(newCat.name)

// Using classes, generate a deck of cards, stored in an array
// cards are objects and should have a value, a face, a suit, a boolean of whether they are faceUp etc.
// there are 13 cards per suit, values should match what they are in BlackJack (or another game), - Ace, by default is equal to 11, - cards 2-10 share the same face and value - Jack, Queen and King have a value of 10
// Figure out how to shuffle the array and console.log the top card (Hint: google it)
// Figure out how to compare the top and bottom card and console.log both cards and a message that says which card is bigger (or a tie)

class Deck {
    constructor() {
        this.deck = [];
        this.cards = {
            value: [2,3,4,5,6,7,8,9,10,10,10,10,11],
            face: [2,3,4,5,6,7,8,9,10,"J","Q","K","A"],
            suit: ["Diamonds", "Clubs", "Hearts", "Spades"],
            faceUp : false
        }
        
        for(let i = 0; i < this.cards.suit.length; i++){
            for(let j = 0; j < this.cards.face.length; j++){
                this.deck.push({value: this.cards.value[j], face: this.cards.face[j], suit: this.cards.suit[i], faceUp: this.cards.faceUp})
            }
        }
    }
    shuffleDeck(array) {
        // starting from the top card to bottom card
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // take a card from a random position in the array and start swapping with the top card. Continue going down the card pile until you reach the bottom card
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    // comparing card values
    compareTopBottom(top, bottom){
        if(top.value === bottom.value){
            return (`Both ${top.value} and ${bottom.value} are the same`)
        }
        else if (top.value < bottom.value){
            return (
            `Bottom card: ${bottom.value}
            Top card: ${top.value}
            Bottom value is greater!
            `)
        }
        else {
            return (
                `Top Card: ${top.value}
                Bottom Card: ${bottom.value}
                Top value is greater!
                `
            )
        }
    }
}

const deck1 = new Deck()
deck1.shuffleDeck(deck1.deck);

let topCard = deck1.deck[deck1.deck.length - 1];
let bottomCard = deck1.deck[0]

console.log(deck1.compareTopBottom(topCard, bottomCard))

