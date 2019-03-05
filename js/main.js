//TAKES INPUT FORM AND PLACES TEXT ON CARD
var input1 = document.querySelectorAll('.form1');
var input2 = document.querySelectorAll('.form2');
var textOnCard = document.getElementById('btn');

//FUNCTION THAT ALLOWS CARD TO ROTATE
var flashcard = document.querySelector('.flashcard');

flashcard.addEventListener('click', function() {
  flashcard.classList.toggle('flip');
});


//TAKE DATA FROM INPUT FIELDS, CONVERT FROM NODE LIST TO ARRAY, HAVE THEM DISPLAYED ON SCREEN ONE AT A TIME

var number = 0;

var rightArrow = document.getElementById('rightArrow');
var leftArrow = document.getElementById('leftArrow');



$(textOnCard).on('click', function(){
    var input1 = document.querySelectorAll('.form1');
    var input2 = document.querySelectorAll('.form2');
    var flashcardFront = Array.from(input1);
    var flashcardBack = Array.from(input2);
    document.getElementById('flashcard__front').innerHTML = flashcardFront[number].value;
    document.getElementById('flashcard__back').innerHTML = flashcardBack[number].value;
      rightArrow.addEventListener('click', function(){
        number++
        document.getElementById('flashcard__front').innerHTML = flashcardFront[number].value;
        document.getElementById('flashcard__back').innerHTML = flashcardBack[number].value;
        console.log(number)
      });
      leftArrow.addEventListener('click', function(){
        number--
        document.getElementById('flashcard__front').innerHTML = flashcardFront[number].value;
        document.getElementById('flashcard__back').innerHTML = flashcardBack[number].value;
        console.log(number)
      });
});


//CREATES A NEW INPUT FIELD
var inputHtml = '<div class="container mt-5"><div class="row"><div class="col-lg-12 text-center"><div><input type="text" class="form1">'+ ' ' + '<input type="text" class="form2">' + ' ' + '</div></div></div>'


var addInputField = document.getElementById('addInputField');

addInputField.addEventListener('click', function() {
  textOnCard.insertAdjacentHTML("afterend",inputHtml)
});
