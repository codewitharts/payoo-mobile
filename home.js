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

// Toggle
const allContentdivs = [
  'add-money-div',
  'cash-out-div',
  'transfer-money-div',
  'get-bonus-div',
  'pay-bill-div',
  ,
  'trans-div',
];
function hideAllDivs() {
  allContentdivs.forEach(id => {
    myElement(id).classList.add('hidden');
  });
}
function showDiv(id) {
  hideAllDivs();
  myElement(id).classList.remove('hidden');
}

myElement('add-money-cart').addEventListener('click', function () {
  showDiv('add-money-div');
});
myElement('cash-out-cart').addEventListener('click', function () {
  showDiv('cash-out-div');
});
myElement('transfer-money-cart').addEventListener('click', function () {
  showDiv('transfer-money-div');
});
myElement('get-bonus-cart').addEventListener('click', function () {
  showDiv('get-bonus-div');
});
myElement('pay-bill-cart').addEventListener('click', function () {
  showDiv('pay-bill-div');
});
myElement('transaction-cart').addEventListener('click', function () {
  showDiv('trans-div');
});

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

  console.log(typeof convertAmount);
});
