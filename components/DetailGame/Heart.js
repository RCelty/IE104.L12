var heart = document.querySelector('.heart');

heart.addEventListener('click', function() {
  this.classList.toggle('loved');
}, false);