window.addEventListener("scroll", function () {
  document.getElementById("showScroll").innerHTML = pageYOffset + "px";
});
arrowTop.onclick = function () {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};
window.addEventListener("scroll", function () {
  arrowTop.hidden = pageYOffset < document.documentElement.clientHeight;
});
