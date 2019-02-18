
var values = [2,3,4,5,6,7,8,9,10,10,10,10,11]

var suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
var deck = [];
var player = [];
var dealer = [];

var statusArea = document.getElementById('status');
var playerHandEl = document.getElementById("player-hand");
var dealerHandEl = document.getElementById("dealer-hand");
var playerScoreEl = document.getElementById("player-score");
var dealerScoreEl = document.getElementById("dealer-score");

var hitBtn = document.getElementById('hit-btn');
var standBtn = document.getElementById('stand-btn');
document.getElementById('newgame-btn').addEventListener('click', function() {
    reset();
});

function addStatus(str)
{
	console.log(str);
	statusArea.appendChild(textBox(str));
};

function textBox(str)
{
	let div = document.createElement('div');
	div.textContent = str;
	return div;
};

    suits.forEach( function(suit) {
        for (let i = 0; i < values.length; i++) {
            let src = "./img/" + ranks[i].toLowerCase() + "_of_" + suit.toLowerCase() + ".png"
            deck.push({suit: suit, value: values[i], rank: ranks[i], src: src});
        };
    
    });

console.log(deck);

function shuffle() {
    for (let i = 0; i < 100; i ++) {
        let random1 = Math.floor(deck.length * Math.random());
        let random2 = Math.floor(deck.length * Math.random());
        let generate = deck[random1];
        
        deck[random1] = deck[random2];
        deck[random2] = generate;
    };
};
console.log(shuffle());
deal(player, 2);
deal(dealer, 2);

console.log(player, player[0].value + player[1].value)
console.log(dealer, dealer[0].value + dealer[1].value)

console.log(deck.length)

function deal(who, numCards) {
    for (let i = 0; i < numCards; i++) {
        who.push(deck.pop())
        };
    };

    displayPlayerCards();
    displayDealerCards();
    
function dealerTurn() {
    addStatus("Dealer's Turn");
    let dealerScore = handScore(dealer);
    console.log(dealerScore)
    while (dealerScore < 17) {
        let drawCard = deck.pop();
        dealer.push(drawCard);
        displayDealerCards();
        dealerScore = handScore(dealer);
        console.log(dealerScore)
        };

        let dealerBusted = false;
        if (dealerScore > 21) {
            console.log("BUST!")
            addStatus('Dealer busted');
            dealerBusted = true;
    }
        else
            addStatus('Dealer stands');

        let playerScore = handScore(player);
        let playerBusted = false;
        if (playerScore > 21)
                playerBusted = true;
        if (dealerBusted && playerBusted)
                addStatus('Push');
        else if (dealerBusted && !playerBusted)
                addStatus('Player wins!');
        else if (!dealerBusted && playerBusted)
                addStatus('Dealer wins!');
        else //No one busts
        {
            if (dealerScore === playerScore)
			    addStatus('Push');
		    else if (dealerScore >  playerScore)
			    addStatus('Dealer wins!');
		    else
			    addStatus('Player wins!');
	};
};
 
function hit() {
	addStatus('Player hits');
	player.push(deck.pop());
	displayPlayerCards();
	let score = handScore(player);
	if (score > 21) {
		addStatus('Player busted');
        dealerTurn();
	};
};
    
function stand() {
    addStatus('Player Stands');
    dealerTurn();
};

function reset(){
    location.reload(); 
};
    
function handScore(deck) {
    let aceCount = 0;
    let score = 0;
    for (let i = 0; i < deck.length; i++) {
        let card = deck[i];
        score += card.value;
        if (card.rank === "Ace") {
        aceCount++;
        };
    };
    while (score <= 11 && aceCount > 0) {
        score += 10;
        ace -= 1;
    };
    return score;
};


function displayPlayerCards() {
    playerHandEl.textContent = "";
    player.forEach(function(card) {
        let newCard = document.createElement("img");
        newCard.src = card.src;
        playerHandEl.appendChild(newCard);
        playerScoreEl.textContent = handScore(player);

    });
};

function displayDealerCards() {
    dealerHandEl.textContent = "";
    dealer.forEach(function(card) {
        let newCard = document.createElement("img");
        newCard.src = card.src;
        dealerHandEl.appendChild(newCard);
        dealerScoreEl.textContent = handScore(dealer);

    });
};

function setStatus(str) {
    removeAllChildren(statusArea);
    addStatus(str);
};   
    // Event Listeners
    hitBtn.addEventListener('click', hit);
    standBtn.addEventListener('click', stand);
    newGameBtn.addEventListener('click', reset);
    

