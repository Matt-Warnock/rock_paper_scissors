function userGesture() {
  return document.querySelector('input[name=gesture]:checked').value;
}

function compGesture() {
  var gestureChoice = ['rock', 'paper', 'scissors'];
  var randomIndex = Math.floor(Math.random() * 3);
  return gestureChoice[randomIndex];
}

function isDraw(user, computer) {
  return user === computer;
}


const button = document.getElementById('play');
button.addEventListener('click', function () {
var x = compGesture();
  console.log(userGesture());
  console.log(x);
  console.log(isDraw(userGesture(), x));
});
