//Send request to close menu widget to parent
document.getElementById('Return').addEventListener('click', function() {
  window.parent.postMessage('Return', '*');
});
//Send redirect requests to parent
function redirectToParent(url) {
  window.parent.postMessage({ type: 'redirect', url: url }, '*');
}
//Hanlde request to open categories widget
document.getElementById('openCategoriesWidget').addEventListener('click', function() {
  document.getElementById('categoriesWidget').style.display = 'block';
});
//Handle request to close categories screen and close widget to parent
window.addEventListener('message', function(event) {
  if (event.data === 'closeCategories') {
    closeWidgets();
  }
  //Handle category selection
  else if (event.data === 'drink') {
    window.parent.postMessage('drink', '*');
    closeWidgets();
  }
  else if (event.data === 'snack') {
    window.parent.postMessage('snack', '*');
    closeWidgets(); 
  }
  else if (event.data === 'all') {
    window.parent.postMessage('all', '*');
    closeWidgets();
  }
});
function closeWidgets() {
  document.getElementById('categoriesWidget').style.display = 'none';
  window.parent.postMessage('Return', '*');   
}

