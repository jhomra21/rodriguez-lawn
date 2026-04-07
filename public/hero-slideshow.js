// Hero crossfade slideshow + CSS scroll-reveal observer
// Shared across EN and ES pages — derives locale from <html lang="...">
(function() {
  var isEs = document.documentElement.lang === 'es';

  // Hero slideshow
  var srcs = [];
  for (var i = 0; i < 4; i++) {
    var el = document.getElementById('hero-src-' + i);
    if (el) srcs.push(el.getAttribute('src'));
  }

  if (srcs.length >= 2) {
    var front = document.getElementById('hero-layer-front');
    var back = document.getElementById('hero-layer-back');

    if (front && back) {
      front.src = srcs[0];
      front.alt = isEs
        ? 'Servicio profesional de poda de árboles y palmeras'
        : 'Professional tree and palm trimming service';

      var currentIndex = 0;
      var isSwitching = false;
      var intervalId = null;

      function switchImages() {
        if (isSwitching) return;
        isSwitching = true;

        var nextIndex = (currentIndex + 1) % srcs.length;
        back.src = srcs[nextIndex];

        var ready = back.decode ? back.decode() : Promise.resolve();
        ready.then(doSwap).catch(doSwap);

        function doSwap() {
          back.classList.remove('opacity-0');
          back.classList.add('opacity-100');
          front.classList.remove('opacity-100');
          front.classList.add('opacity-0');

          front.addEventListener('transitionend', function onEnd() {
            front.removeEventListener('transitionend', onEnd);
            front.src = srcs[nextIndex];
            front.classList.remove('opacity-0');
            front.classList.add('opacity-100');
            back.classList.remove('opacity-100');
            back.classList.add('opacity-0');
            front.style.transition = 'none';
            back.style.transition = 'none';
            void front.offsetHeight;
            front.style.transition = '';
            back.style.transition = '';
            currentIndex = nextIndex;
            isSwitching = false;
          });
        }
      }

      function startSlideshow() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(switchImages, 7500);
      }

      function stopSlideshow() {
        if (intervalId) { clearInterval(intervalId); intervalId = null; }
      }

      document.addEventListener('visibilitychange', function() {
        if (document.hidden) stopSlideshow();
        else startSlideshow();
      });

      startSlideshow();
    }
  }

  // CSS scroll-reveal observer
  var reveals = document.querySelectorAll('.scroll-reveal');
  if (reveals.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function(el) { observer.observe(el); });
  } else {
    reveals.forEach(function(el) { el.classList.add('is-visible'); });
  }
})();
