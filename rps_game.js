function radioButtonSelected() {
  let userGesture = document.querySelector('input[name=gesture]:checked').value;
  return userGesture;
}


const button = document.getElementById('play');
button.addEventListener('click', function () {

  console.log(radioButtonSelected());
});
