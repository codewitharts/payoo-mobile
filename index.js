// Get id's with this functions
function myElement(id) {
  return document.getElementById(id);
}

myElement('login-btn').addEventListener('click', function (e) {
  e.preventDefault();

  // Fetch the values when button is clicked
  const numberInput = myElement('input-number').value;
  const pinInput = myElement('input-pin').value;

  const initialNumber = '01811223344';
  const initialPin = '1234';

  if (numberInput === '' && pinInput === '') {
    alert('Give the Mobile Number & Pin to Login');
    return;
  }
  if (numberInput !== initialNumber) {
    alert("Mobile Number doesn't match!");
    return;
  }
  if (pinInput !== initialPin) {
    alert("Pin doesn't match!");
    return;
  }

  window.location.href = 'home.html';
});
