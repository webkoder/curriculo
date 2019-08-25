function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - window.pageYOffset;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        window.scroll(0, window.pageYOffset + perTick);
        if (window.pageYOffset === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

function runScroll() {
    scrollTo(document.body, document.body.clientHeight, 600);
  }
  var scrollme;
  scrollme = document.querySelector("#scrollme");
  scrollme.addEventListener("click",runScroll,false)