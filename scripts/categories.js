//Send request to close categories and menu widgets
document.getElementById('closeCategories').addEventListener('click', function() {
  window.parent.postMessage('closeCategories', '*');
});
//Click events on buttons, send request to filter products by categories
function filterByCategory(category) {
  window.parent.postMessage(category, '*');
}
