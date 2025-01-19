
let ticking = false;

$(window).on('load', function() {
  console.log('loadイベントが発生しました');
});

$(window).on('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      console.log('scrollイベントが発生しました');
      ticking = false;
    });
    ticking = true;
  }
});
