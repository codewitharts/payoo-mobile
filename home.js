// Get id's with this functions
function myElement(id) {
  return document.getElementById(id);
}
const initialNumber = '01811223344';
const initialPin = '1234';
// Logout Functionality
myElement('logout-btn').addEventListener('click', function () {
  window.location.href = './index.html';
});

// Display Balance
let displayAmount = myElement('display-amount').innerText;
let convertedAmount = parseInt(displayAmount);
// Add Money
const addMoney = myElement('add-money-btn');
addMoney.addEventListener('click', function (e) {
  e.preventDefault();
  const bankName = addMoney.parentNode.children[1].value;
  const accountNumber = addMoney.parentNode.children[3].value;
  const addAmount = addMoney.parentNode.children[5].value;
  const pinNumber = addMoney.parentNode.children[7].value;

  const convertAmount = parseFloat(addAmount);

  if (bankName === 'Select Bank') {
    alert('Please select a Bank');
    return;
  }
  if (
    accountNumber.length !== 11 || // Length must be 11
    isNaN(accountNumber) || // Must be a number
    accountNumber.includes('.') || // Must not be a decimal
    accountNumber.trim() === '' // Must not be empty
  ) {
    alert('Account Number must be exactly 11 digits and numeric');
    return;
  }
  if (isNaN(convertAmount) || convertAmount <= 0) {
    alert('Enter valid amount');
    return;
  }
  if (pinNumber !== initialPin) {
    alert('Invalid Pin');
    return;
  }

  convertedAmount = parseFloat(convertedAmount) + parseFloat(addAmount);
  myElement('display-amount').innerText = convertedAmount;
});
