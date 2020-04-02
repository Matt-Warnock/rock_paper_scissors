function radioButtonSelected() {
  let userGesture = document.querySelector('input[name=gesture]:checked').value;
  return userGesture;
}

function compGesture() {
  var gestureChoice = ['rock', 'paper', 'scissors'];
  var randomIndex = Math.floor(Math.random() * 3);
  return gestureChoice[randomIndex];
}

const button = document.getElementById('play');
button.addEventListener('click', function () {

  console.log(compGesture());
});
