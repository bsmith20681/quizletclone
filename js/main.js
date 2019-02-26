var input1 = document.getElementById('form1');
var input2 = document.getElementById('form2');
var textOnCard = document.getElementById('btn');

btn.addEventListener('click', function() {
  document.getElementById('flashcard__front').innerHTML = input1.value
  document.getElementById('flashcard__back').innerHTML = input2.value
})



var flashcard = document.querySelector('.flashcard');

flashcard.addEventListener('click', function() {
  flashcard.classList.toggle('flip');
});
