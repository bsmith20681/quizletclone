//TAKES INPUT FORM AND PLACES TEXT ON CARD
var input1 = document.getElementById('form1');
var input2 = document.getElementById('form2');
var textOnCard = document.getElementById('btn');

btn.addEventListener('click', function() {
  document.getElementById('flashcard__front').innerHTML = input1.value
  document.getElementById('flashcard__back').innerHTML = input2.value
})


//FUNCTION THAT ALLOWS CARD TO ROTATE
var flashcard = document.querySelector('.flashcard');

flashcard.addEventListener('click', function() {
  flashcard.classList.toggle('flip');
});



//CREATES A NEW INPUT FIELD
var inputHtml = '<div class="container mt-5"><div class="row"><div class="col-lg-12 text-center"><form id="form" action=""><div><input type="text" id="form1">'+ ' ' + '<input type="text" id="form2">' + ' ' + '<button class="btn btn-primary" id="btn">SUBMIT</button></div></form></div></div></div>'

var addInputField = document.getElementById('addInputField');

addInputField.addEventListener('click', function() {
  textOnCard.insertAdjacentHTML("afterend", inputHtml)
});


//make array apppear on screen

var flashcardFront = [];
var flashcardBack = [];

var number = 0;

var rightArrow = document.getElementById('rightArrow');

var testField = document.getElementById('testField')

btn.addEventListener('click', function(){
  flashcardFront.push(input1.value);
  flashcardBack.push(input2.value);

  flashcard__front.innerHTML = flashcardFront[0];
  flashcard__back.innerHTML = flashcardBack[0];


})

rightArrow.addEventListener('click', function(){
  if (number < flashcardFront.length - 1 && number < flashcardBack.length - 1){
    number++;
  } else {
    number = 0
  }
  console.log(number);
  document.getElementById('flashcard__front').innerHTML = flashcardFront[number];
  document.getElementById('flashcard__back').innerHTML = flashcardBack[number];

});




var leftArrow = document.getElementById('leftArrow');

leftArrow.addEventListener('click', function(){
  if (number > flashcardFront.length && number > flashcardBack.length){
    number--;
  } else {
    number = 0
  }
  console.log(number);
  document.getElementById('flashcard__front').innerHTML = flashcardFront[number];
  document.getElementById('flashcard__back').innerHTML = flashcardBack[number];

});



//document.getElementById('testField').innerHTML = testArray[number];
