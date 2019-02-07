
var values = [2,3,4,5,6,7,8,9,10,10,10,10,11]


var suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = [];
var player = [];
var dealer = [];

suits.forEach( function(suit) {
    for (let i = 0; i < values.length; i++) {
        deck.push({suit: suit, value: values[i], rank: ranks[i]});
    }
        // suit
        // value
        // rank
    

})
console.log(deck);

function shuffle() {
    for (var i = 0; i < 100; i ++) {
        var random1 = Math.floor(deck.length * Math.random());
        var random2 = Math.floor(deck.length * Math.random());
        var generate = deck[random1];

        deck[random1] = deck[random2];
        deck[random2] = generate;
    }
}
console.log(shuffle());
player.push(deck.pop())
player.push(deck.pop())
dealer.push(deck.pop())
dealer.push(deck.pop())

console.log(player, player[0].value + player[1].value)
console.log(dealer, dealer[0].value + dealer[1].value)

console.log(deck.length)



// function randomCard() {
//     var randomNum = Math.floor(deck.length * Math.random());
//     return deck[randomNum];
// }
// console.log(randomCard());

// start game
// function start() {
//     player = [randomCard, randomCard];
//     dealer = [randomCard, randomCard];
// }

// start();

// hit
// stand
// double down
// split