var button_audio = new Audio('audio/button.mp3');
button_audio.volume = 0.2;
var cardFan_audio = new Audio('audio/cardFan.wav');
var cardSlide_audio = new Audio('audio/cardSlide.wav');
var chips_audio = new Audio('audio/chips.wav');
var chipsWin_audio = new Audio('audio/chipsWin.wav');
var credit=2000;
var topPos = 0;
var chipCount= 0 ;
var bet_total = 0;
var isCardHidden = true;
var canBet = true; 
var shownHouseTotal = 0;
var playerHasAce;
var houseHasAce;

$(document).ready(function(){
	$('#notification-field').html("Welcome to 21 Blackjack!").fadeIn(1000).fadeOut(1500);
    newGame();   
});

function resetCredit(){
	credit=2000;
	newGame();
};


function newGame(){
	if(credit < 25) {
		setTimeout(function(){
			alert("Out of Credits, Game Over!");
			resetCredit();
	}, 2200);
		
	}
	else{
cardFan_audio.play();
$("#player-card-field").empty();
$("#house-card-field").empty();
$('#chip-bet-field').empty();
playerTotal=0;
houseTotal=0;
bet_total = 0;
top=0;
chipCount=0;
canBet = true;
playerHasAce = false;
houseHasAce = false;
$('#bet-amount').html(bet_total);
$('#cash-amount').html(credit);
$('#stand-button').css( 'pointer-events', 'auto' );
$('#hit-button').css( 'pointer-events', 'auto' );

   deck = [{cardName:'2 of Clubs', imgLoc:'img/cards/2_of_clubs.png', cardValue:2},
			{cardName:'2 of Diamonds', imgLoc:'img/cards/2_of_diamonds.png', cardValue:2},
			{cardName:'2 of Hearts', imgLoc:'img/cards/2_of_hearts.png', cardValue:2},
			{cardName:'2 of Spades', imgLoc:'img/cards/2_of_spades.png', cardValue:2},
			{cardName:'3 of Clubs', imgLoc:'img/cards/3_of_clubs.png', cardValue:3},
			{cardName:'3 of Diamonds', imgLoc:'img/cards/3_of_diamonds.png', cardValue:3},
			{cardName:'3 of Hearts', imgLoc:'img/cards/3_of_hearts.png', cardValue:3},
			{cardName:'3 of Spades', imgLoc:'img/cards/3_of_spades.png', cardValue:3},
			{cardName:'4 of Clubs', imgLoc:'img/cards/4_of_clubs.png', cardValue:4},
			{cardName:'4 of Diamonds', imgLoc:'img/cards/4_of_diamonds.png', cardValue:4},
			{cardName:'4 of Hearts', imgLoc:'img/cards/4_of_hearts.png', cardValue:4},
			{cardName:'4 of Spades', imgLoc:'img/cards/4_of_spades.png', cardValue:4},
			{cardName:'5 of Clubs', imgLoc:'img/cards/5_of_clubs.png', cardValue:5},
			{cardName:'5 of Diamonds', imgLoc:'img/cards/5_of_diamonds.png', cardValue:5},
			{cardName:'5 of Hearts', imgLoc:'img/cards/5_of_hearts.png', cardValue:5},
			{cardName:'5 of Spades', imgLoc:'img/cards/5_of_spades.png', cardValue:5},
			{cardName:'6 of Clubs', imgLoc:'img/cards/6_of_clubs.png', cardValue:6},
			{cardName:'6 of Diamonds', imgLoc:'img/cards/6_of_diamonds.png', cardValue:6},
			{cardName:'6 of Hearts', imgLoc:'img/cards/6_of_hearts.png', cardValue:6},
			{cardName:'6 of Spades', imgLoc:'img/cards/6_of_spades.png', cardValue:6},
			{cardName:'7 of Clubs', imgLoc:'img/cards/7_of_clubs.png', cardValue:7},
			{cardName:'7 of Diamonds', imgLoc:'img/cards/7_of_diamonds.png', cardValue:7},
			{cardName:'7 of Hearts', imgLoc:'img/cards/7_of_hearts.png', cardValue:7},
			{cardName:'7 of Spades', imgLoc:'img/cards/7_of_spades.png', cardValue:7},
			{cardName:'8 of Clubs', imgLoc:'img/cards/8_of_clubs.png', cardValue:8},
			{cardName:'8 of Diamonds', imgLoc:'img/cards/8_of_diamonds.png', cardValue:8},
			{cardName:'8 of Hearts', imgLoc:'img/cards/8_of_hearts.png', cardValue:8},
			{cardName:'8 of Spades', imgLoc:'img/cards/8_of_spades.png', cardValue:8},
			{cardName:'9 of Clubs', imgLoc:'img/cards/9_of_clubs.png', cardValue:9},
			{cardName:'9 of Diamonds', imgLoc:'img/cards/9_of_diamonds.png', cardValue:9},
			{cardName:'9 of Hearts', imgLoc:'img/cards/9_of_hearts.png', cardValue:9},
			{cardName:'9 of Spades', imgLoc:'img/cards/9_of_spades.png', cardValue:9},
			{cardName:'10 of Clubs', imgLoc:'img/cards/10_of_clubs.png', cardValue:10},
			{cardName:'10 of Diamonds', imgLoc:'img/cards/10_of_diamonds.png', cardValue:10},
			{cardName:'10 of Hearts', imgLoc:'img/cards/10_of_hearts.png', cardValue:10},
			{cardName:'10 of Spades', imgLoc:'img/cards/10_of_spades.png', cardValue:10},
			{cardName:'Jack of Clubs', imgLoc:'img/cards/jack_of_clubs.png', cardValue:10},
			{cardName:'Jack of Diamonds', imgLoc:'img/cards/jack_of_diamonds.png', cardValue:10},
			{cardName:'Jack of Hearts', imgLoc:'img/cards/jack_of_hearts.png', cardValue:10},
			{cardName:'Jack of Spades', imgLoc:'img/cards/jack_of_spades.png', cardValue:10},
			{cardName:'Queen of Clubs', imgLoc:'img/cards/queen_of_clubs.png', cardValue:10},
			{cardName:'Queen of Diamonds', imgLoc:'img/cards/queen_of_diamonds.png', cardValue:10},
			{cardName:'Queen of Hearts', imgLoc:'img/cards/queen_of_hearts.png', cardValue:10},
			{cardName:'Queen of Spades', imgLoc:'img/cards/queen_of_spades.png', cardValue:10},
			{cardName:'King of Clubs', imgLoc:'img/cards/king_of_clubs.png', cardValue:10},
			{cardName:'King of Diamonds', imgLoc:'img/cards/king_of_diamonds.png', cardValue:10},
			{cardName:'King of Hearts', imgLoc:'img/cards/king_of_hearts.png', cardValue:10},
			{cardName:'King of Spades', imgLoc:'img/cards/king_of_spades.png', cardValue:10},
			{cardName:'Ace of Clubs', imgLoc:'img/cards/ace_of_clubs.png', cardValue:1},
			{cardName:'Ace of Diamonds', imgLoc:'img/cards/ace_of_diamonds.png', cardValue:1},
			{cardName:'Ace of Hearts', imgLoc:'img/cards/ace_of_hearts.png', cardValue:1},
			{cardName:'Ace of Spades', imgLoc:'img/cards/ace_of_spades.png', cardValue:1}
			];

	Shuffle(deck);

randNum1=Math.floor(Math.random()*deck.length);
randNum2=Math.floor(Math.random()*deck.length);
randNum3=Math.floor(Math.random()*deck.length);
randNum4=Math.floor(Math.random()*deck.length);

playerCard1 = $("<div class='card'></div>");
playerCard2 = $("<div class='card'></div>");

houseCard1 = $("<div class='card'></div>");
houseCard2 = $("<div class='card'></div>");




$(playerCard1).css("background", "url("+deck[randNum1].imgLoc+") no-repeat");
$(playerCard1).css("background-size", "100% 100%");
$(playerCard2).css("background", "url("+deck[randNum2].imgLoc+") no-repeat");
$(playerCard2).css("background-size", "100% 100%");
$('#player-card-field').append(playerCard1, playerCard2);
playerTotal+=(deck[randNum1].cardValue + deck[randNum2].cardValue);	
	if(deck[randNum1].cardValue==1 || deck[randNum2].cardValue==1)
	{
		playerTotal += 10;
		playerHasAce= true;

	}
	else{}


$(houseCard1).css("background", "url(img/cards/back.png) no-repeat");
$(houseCard1).css("background-size", "100% 100%");
$(houseCard2).css("background", "url("+deck[randNum4].imgLoc+") no-repeat");
$(houseCard2).css("background-size", "100% 100%");
$('#house-card-field').append(houseCard1, houseCard2);
houseTotal+=(deck[randNum3].cardValue + deck[randNum4].cardValue);
shownHouseTotal = houseTotal - deck[randNum3].cardValue +" + ?";

if(deck[randNum3].cardValue==1 || deck[randNum4].cardValue==1)
	{
		houseTotal += 10;
		shownHouseTotal = houseTotal - 10 +" + ?";
		houseHasAce= true;

	}
	else{}

$('#house-card-total').html(shownHouseTotal);
$('#player-card-total').html(playerTotal);

}

};


function hitMe(){
	
	$('#hit-button').css( 'pointer-events', 'none' );
	canBet = false;
    $('#hit-button').addClass('hvr-push');
	button_audio.play();
	cardSlide_audio.play();
	$('#notification-field').html("Player Hits").fadeIn(1000).fadeOut(1000);
	var randNum=Math.floor(Math.random()*deck.length);
	var newPlayerCard = $("<div class='card'></div>");
	$(newPlayerCard).css("background", "url("+deck[randNum].imgLoc+") no-repeat");
	$(newPlayerCard).css("background-size", "100% 100%");
	$('#player-card-field').append(newPlayerCard);
	playerTotal+=deck[randNum].cardValue;

	
	if(playerHasAce && playerTotal > 21)
	{
		playerTotal -=10;
		playerHasAce = false;
	}
	else if(!playerHasAce && playerTotal< 11 && deck[randNum].cardValue==1)
	{
		playerTotal += 10;
		playerHasAce= true;
	}
	else{}

	$('#player-card-total').html(playerTotal);
    //deck.splice(randNum,1);
	setTimeout(function(){
		$('#hit-button').removeClass('hvr-push');
		calculate();
	}, 2500);
};



function stand(){
	$('#hit-button').css( 'pointer-events', 'none' );
	$('#stand-button').css( 'pointer-events', 'none' );
	canBet = false;
	$('#stand-button').addClass('hvr-push');
	button_audio.play();
	showHouseCard();
	$('#notification-field').html("Player Stands").fadeIn(1000).fadeOut(1000);
	setTimeout(function(){
		$('#stand-button').removeClass('hvr-push');
		calculateGame();
	}, 2200);
};


function calculate(){

	if(playerTotal > 21 && houseTotal != 21) {
		showHouseCard();
		$('#notification-field').html("House Wins, Player Loses!").fadeIn(1000).fadeOut(2000);
		credit -= bet_total;
		setTimeout(function(){
			newGame();
		}, 3000);
	}
	else if(playerTotal == 21){
		showHouseCard();
		$('#notification-field').html("Blackjack, Player Wins!").fadeIn(1000).fadeOut(2000);
		if(bet_total >= 25){ chipsWin_audio.play();}
		credit += bet_total;
		setTimeout(function(){
			newGame();
		}, 3000);
	}
	else if(houseTotal == 21){
		showHouseCard();
		$('#notification-field').html("Blackjack, House Wins!").fadeIn(1000).fadeOut(2000);
		credit -= bet_total;
		setTimeout(function(){
			newGame();
		}, 3000);
	}
	else if(houseTotal == 21 && playerTotal == 21)
	{
		showHouseCard();
		$('#notification-field').html("Blackjack Tie, Push!").fadeIn(1000).fadeOut(2000);
		if(bet_total >= 25){ chipsWin_audio.play();}
		credit += bet_total;
		setTimeout(function(){
			newGame();
		}, 3000);

	}
	else{
		
	}
	$('#hit-button').css( 'pointer-events', 'auto' );

};

function calculateGame(){

	
	if (playerTotal >= houseTotal){
		if(houseTotal < 21){
			houseHit();
		}
		else if(houseTotal == 21){
			$('#notification-field').html("Blackjack Tie, Push!").fadeIn(1000).fadeOut(2000);
			if(bet_total >= 25){ chipsWin_audio.play();}
			credit += bet_total;
			setTimeout(function(){
				newGame();
			}, 3000);
		}
		else{
			$('#notification-field').html("House Loses, Player Wins!").fadeIn(1000).fadeOut(2000);
			if(bet_total >= 25){ chipsWin_audio.play();}
			credit += bet_total;
			setTimeout(function(){
				newGame();
			}, 3000);
		}
	}
	else if((houseTotal > playerTotal) && (houseTotal <= 21))
	{
		showHouseCard();
		$('#notification-field').html("House Wins, Player Loses!").fadeIn(1000).fadeOut(2000);
		credit -= bet_total;
		setTimeout(function(){
			newGame();
		}, 3000);
	}
	else{
		$('#notification-field').html("House Loses, Player Wins!").fadeIn(1000).fadeOut(2000);
		if(bet_total >= 25){ chipsWin_audio.play();}
		credit += bet_total;
		setTimeout(function(){
			newGame();
		}, 3000);
	}

}


function showHouseCard(){

	$(houseCard1).css("background", "url("+deck[randNum3].imgLoc+") no-repeat");
	$(houseCard1).css("background-size", "100% 100%");
	$('#house-card-total').html(houseTotal);
};


function houseHit(){
	$('#notification-field').html("House Hits").fadeIn(1000).fadeOut(1000);
	cardSlide_audio.play();
	setTimeout(function(){
		
  		var randNum=Math.floor(Math.random()*deck.length);
		var newHouseCard = $("<div class='card'></div>");
		$(newHouseCard).css("background", "url("+deck[randNum].imgLoc+") no-repeat");
		$(newHouseCard).css("background-size", "100% 100%");
		$('#house-card-field').append(newHouseCard);
		houseTotal+=deck[randNum].cardValue;

	if(houseHasAce && houseTotal > 21)
	{
		houseTotal -=10;
		houseHasAce = false;
	}
	else if(!houseHasAce && houseTotal< 11 && deck[randNum].cardValue==1)
	{
		houseTotal += 10;
		houseHasAce= true;
	}
	else{}



		//deck.splice(randNum,1);
		$('#house-card-total').html(houseTotal);
		calculateGame();
	}, 2200);
	

};



function bet25(){	
	if (bet_total+25 <= credit && canBet){
		chips_audio.play();
		bet_total += 25;
		$('#bet-amount').html(bet_total);
		if(chipCount < 7){
			var chip25 = $('<img src="img/25_chip.png" alt="25 Chip" />');
			$(chip25).css("position","absolute");
			$(chip25).css("top", topPos+"px");
			topPos -= 5;
			$('#chip-bet-field').append(chip25);
			chipCount++;
		}

	}
	else alert("Can't Bet Now");
}

function bet50(){	
	if (bet_total+50 <= credit && canBet){
		chips_audio.play();
		bet_total += 50;
		$('#bet-amount').html(bet_total);
		if(chipCount < 7){
			var chip50 = $('<img src="img/50_chip.png" alt="50 Chip" />');
			$(chip50).css("position","absolute");
			$(chip50).css("top", topPos+"px");
			topPos -= 5;
			$('#chip-bet-field').append(chip50);
			chipCount++;
		}
	}
	else alert("Can't Bet Now");
}

function bet100(){	
	if (bet_total+100 <= credit && canBet){
		chips_audio.play();
		bet_total += 100;
		$('#bet-amount').html(bet_total);
		if(chipCount < 7){
			var chip100 = $('<img src="img/100_chip.png" alt="100 Chip" />');
			$(chip100).css("position","absolute");
			$(chip100).css("top", topPos+"px");
			topPos -= 5;
			$('#chip-bet-field').append(chip100);
			chipCount++;
		}
	}
	else alert("Can't Bet Now");
}

function bet500(){	
	if (bet_total+500 <= credit && canBet){
		chips_audio.play();
		bet_total += 500;
		$('#bet-amount').html(bet_total);
		if(chipCount < 7){
			var chip500 = $('<img src="img/500_chip.png" alt="500 Chip" />');
			$(chip500).css("position","absolute");
			$(chip500).css("top", topPos+"px");
			topPos -= 5;
			$('#chip-bet-field').append(chip500);
			chipCount++;
		}
	}
	else alert("Can't Bet Now");
}


function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};	