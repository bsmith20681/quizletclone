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

var testArray = [];

var number = 0;

var rightArrow = document.getElementById('rightArrow');

var testField = document.getElementById('testField')

btn.addEventListener('click', function(){
  testArray.push(input1.value);
  flashcard__front.innerHTML = testArray[0];
  docment.getElementById('form1').reset();
})

rightArrow.addEventListener('click', function(){
  if (number < testArray.length - 1){
    number++;
  } else {
    number = 0
  }
  console.log(number);
  document.getElementById('flashcard__front').innerHTML = testArray[number];
});




var leftArrow = document.getElementById('leftArrow');

leftArrow.addEventListener('click', function(){
  if (number > testArray.length){
    number--;
  } else {
    number = 0
  }
  console.log(number);
  document.getElementById('flashcard__front').innerHTML = testArray[number];
});



//document.getElementById('testField').innerHTML = testArray[number];
