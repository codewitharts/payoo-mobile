// Get id's with this functions
function myElement(id) {
  return document.getElementById(id);
}

// Logout Functionality
myElement('logout-btn').addEventListener('click', function () {
  window.location.href = './index.html';
});

// Display Balance
// Add Money
const addMoney = myElement('add-money-btn');
addMoney.addEventListener('click', function (e) {
  e.preventDefault();
  const bankName = addMoney.parentNode.children[1].value;
  const accountNumber = addMoney.parentNode.children[3].value;
  const addAmount = addMoney.parentNode.children[5].value;
  const pinNumber = addMoney.parentNode.children[7].value;
  if (bankName === 'Select Bank') {
    alert('Please select a Bank');
    return;
  }

  if (isNaN(accountNumber) || isNaN(addAmount) || isNaN(pinNumber)) {
    alert('Please give correct Number & Pin');
  }

  let displayAmount = myElement('display-amount').innerText;
  let convertedAmount = parseInt(displayAmount);
  convertedAmount = Number(convertedAmount) + Number(addAmount);
  myElement('display-amount').innerText = convertedAmount;

  addMoney.classList.remove('hidden');
});
