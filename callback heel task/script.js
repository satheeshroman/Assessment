const countdownElement = document.getElementById('countdown');

function countdown(seconds, callback) {
  if (seconds > 0) {
    countdownElement.textContent = seconds;
    setTimeout(function () {
      countdown(seconds - 1, callback);
    }, 1000);
  } else {
    countdownElement.textContent = 'Happy Independence Day';
    callback();
  }
}

countdown(10, function () {

});