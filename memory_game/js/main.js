var cards=["queen","queen","king","king"];
var cardsInPlay=[];


function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[2]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
*/
function flipCard(cardId){
console.log("User flipped " + cards[cardId]);
/*	if (cardsInPlay.length===2){
	if (cardsInPlay[0]===cardsInPlay[1]){
		alert("You Found a match!");
	} else{
		alert("Sorry, try again");
	}
}else{
	console.log("shit")
}
*/
}
cardsInPlay.push(cards);
cardsInPlay.push(cards);
checkForMatch();
flipCard(0);
flipCard(2);
