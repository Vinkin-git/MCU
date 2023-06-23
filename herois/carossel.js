var carousel = document.querySelector('.carousel');
var items = document.querySelectorAll('.carousel-item');

function setCenterItem() {
  var center = Math.floor(items.length / 2);
  items.forEach(function(item) {
    item.classList.remove('center');
  });
  items[center].classList.add('center');
}

setCenterItem();

carousel.addEventListener('click', function() {
  var firstItem = document.querySelector('.carousel-item:first-child');
  carousel.appendChild(firstItem);
  setCenterItem();
});