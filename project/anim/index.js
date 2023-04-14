function startAnimation() {
    var box = document.querySelector('.ball');
    box.classList.add('animate');
    setTimeout(function() {
      box.classList.remove('animate');
    }, 1000);
  }