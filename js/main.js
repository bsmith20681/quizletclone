//TAKES INPUT FORM AND PLACES TEXT ON CARD
var input1 = document.querySelectorAll('.form1');
var input2 = document.querySelectorAll('.form2');
var textOnCard = document.getElementById('btn');

/*btn.addEventListener('click', function() {
  document.getElementById('flashcard__front').innerHTML = input1.value
  document.getElementById('flashcard__back').innerHTML = input2.value
});*/


//FUNCTION THAT ALLOWS CARD TO ROTATE
var flashcard = document.querySelector('.flashcard');

flashcard.addEventListener('click', function() {
  flashcard.classList.toggle('flip');
});


//make array apppear on screen


var number = 0;

var rightArrow = document.getElementById('rightArrow');
var leftArrow = document.getElementById('leftArrow');

var flashcardFront = Array.prototype.slice.call(input1);
var flashcardBack = Array.prototype.slice.call(input2);


textOnCard.addEventListener('click', function(){

  flashcard__front.innerHTML = flashcardFront[number].value;
  flashcard__back.innerHTML = flashcardBack[number].value;

  console.log(flashcardFront);
});




rightArrow.addEventListener('click', function(){
  if (number < flashcardFront.length - 1 && number < flashcardBack.length - 1){
    number++;
  } else {
    number = 0
  }
  console.log(number);
  document.getElementById('flashcard__front').innerHTML = flashcardFront[number].value;
  document.getElementById('flashcard__back').innerHTML = flashcardBack[number].value;

});



leftArrow.addEventListener('click', function(){
  if (number > flashcardFront.length && number > flashcardBack.length){
    number--;
  } else {
    number = 0
  }
  console.log(number);
  document.getElementById('flashcard__front').innerHTML = flashcardFront[number].value;
  document.getElementById('flashcard__back').innerHTML = flashcardBack[number].value;

});

//CREATES A NEW INPUT FIELD
var inputHtml = '<div class="container mt-5"><div class="row"><div class="col-lg-12 text-center"><div><input type="text" class="form1">'+ ' ' + '<input type="text" class="form2">' + ' ' + '</div></div></div>'

var addInputField = document.getElementById('addInputField');

addInputField.addEventListener('click', function() {
  textOnCard.insertAdjacentHTML("afterend",inputHtml)
});
