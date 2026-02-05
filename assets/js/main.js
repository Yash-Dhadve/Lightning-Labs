(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var grid = document.querySelector('.bg-grid');
  if (grid) {
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY || 0;
      grid.style.backgroundPositionY = -(scrolled * 0.2) + 'px';
    });
  }

  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    var onScroll = function () {
      var windowHeight = window.innerHeight;
      reveals.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 80) {
          el.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
  }
})();
