//Handle vending menu button press to open widget
document.getElementById('openVendingMenu').addEventListener('click', function() {
  document.getElementById('vendingMenuWidget').style.display = 'block';
});
//Handle widget messages
window.addEventListener('message', function(event) {
  //Widget closing
  if (event.data === 'Return') {
    document.getElementById('vendingMenuWidget').style.display = 'none';
  }
  //URL redirects
  else if (event.data.type && event.data.type === 'redirect') {
    window.location.href = event.data.url;
  }
  else if (event.data === 'all') {
    categoryFilter('all');
  }
  else if (event.data === 'drink') {
    categoryFilter('drink');
  }
  else if (event.data === 'snack') {
    categoryFilter('snack');
  }
});
//compute total price and change background color for selected items
var totalPrice = 0.00;
function changeColor(itemDiv, price) {
  // Check the current background color
  var currentColor = window.getComputedStyle(itemDiv).backgroundColor;
  var confButton = document.getElementById('confButton');
  // Change the color based on the current color
  if (currentColor === 'rgba(51, 170, 51, 0.3)') {
      itemDiv.style.backgroundColor = 'lightgreen';
      totalPrice += price;
  } else {
      itemDiv.style.backgroundColor = 'rgba(51, 170, 51, 0.3)';
      totalPrice -= price;
  }
  document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
  //change confirm color to green if price is not 0
  if (totalPrice != 0) {
    confButton.style.border = '10px solid limegreen';
  } else {
    confButton.style.border = '10px solid white';
  }
}
//Hanlding category filter request
function categoryFilter(category) {
  const allItems = document.querySelectorAll('#item')
  allItems.forEach(item => {
    if (item.classList.contains(category + '-item')) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

