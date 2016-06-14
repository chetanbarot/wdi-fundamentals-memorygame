var cards = ['queen','queen','king','king'];
var cardInPlay = [];

//if (cardOne === cardTwo) {
//	alert('You found a match!');
//}
//if (cardThree === cardFour){
//	alert('you found a match!');
//}
//else {
//	alert('Sorry, try again.');
//}
var board = document.getElementById('game-board');
function createBoard(){
for (var i=0; i<cards.length; i++) {
  var cardElement = document.createElement('div');
  cardElement.className = 'card';
  cardElement.setAttribute('data-card',card[i]);
  cardElement.addEventListner('click',isTwoCards);
  board.appendChild (cardElement);
  board.appendChild(cardElement);
}
}
function isTwoCards(){
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttrribute('data-card'));
  if (this.getAttribute('data-card')==='king'){
    this.innerHTML = "<img src='http://i.imgur.com/bnuv5IM.png'>";//King
  } else {this.innerHTML = "<img src='http://i.imgur.com/v6nuNt2.png'>";//queen
}
if (cardsInPlay.length === 2) {
  isMatch(cardsInPlay);
  cardsInPlay = [];
}
}
function isMatch(cards){
  if(cards[0] ===cards[1]){
    alert("You Found a match!");
  }else{
    alert("Sorry ,try again.");
  }
}

