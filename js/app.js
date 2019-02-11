
var values = [2,3,4,5,6,7,8,9,10,10,10,10,11]


var suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
var deck = [];
var player = [];
var dealer = [];
var playerBoxScore;
var dealerBoxScore;
var softHand;
// document buttons
var hitBtn = document.getElementById('hit-btn');
var standBtn = document.getElementById('stand-btn');
var newGameBtn = document.getElementById('newgame-btn');


suits.forEach( function(suit) {
    for (let i = 0; i < values.length; i++) {
        var src = "./img/" + ranks[i].toLowerCase() + "_of_" + suit.toLowerCase() + ".png"
        deck.push({suit: suit, value: values[i], rank: ranks[i], src: src});
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
deal(player, 2);
deal(dealer, 2);

console.log(player, player[0].value + player[1].value)
console.log(dealer, dealer[0].value + dealer[1].value)

console.log(deck.length)

function deal(who, numCards) {
    for (let i = 0; i < numCards; i++) {
        who.push(deck.pop())
        }
    }


    
    function dealerTurn() {
        //softHand;
        // show hidden card
        let dealerScore = handScore(dealer);
        while (dealerScore < 17) {
            let drawCard = deck.pop();
            dealer.push(drawCard);
            dealerScore = handScore(dealer);
            if (dealerScore > 21) {
                console.log("BUST!")
                break;
            }
        }
    }
    
    function hit() {
        player.push(deck.pop());
        console.log('new player hand ' + player)
        if ((player[0].value + player[1].value) > 21) {
            console.log("BUST!");
            dealerTurn();
        }
    }
    
    function stand() {
        dealerTurn();
    }
    
    function reset() {
        
    }
    
    function handScore(deck) {
        let aceCount = 0;
        let score = 0;
        for (let i = 0; i < deck.length(); i++) {
            let card = deck.get(i);
            score += card.value;
            if (card.ace())
            ++aceCount;
        }
        while (score <= 11 && aceCount > 0) {
            score += 10;
            ace -= 1;
        }
        return score;
    }
    
    document.getElementById("player-hand").textContent = player;
    document.getElementById("dealer-hand").textContent = dealer;
    document.getElementById("player-score").textContent = playerBoxScore;
    document.getElementById("dealer-score").textContent = dealerBoxScore;

    hitBtn.addEventListener('click', hit);
    standBtn.addEventListener('click', stand);
    newGameBtn.addEventListener('click', reset);
    
    // reset game
// add status updates
// keep score

