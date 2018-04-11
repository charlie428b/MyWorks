$(function () {
  var elements = document.getElementsByClassName("sps");
  var offsetbase = elements[0].getBoundingClientRect().height;
  for(var i = 0; i < elements.length; i++) {
    var node = elements[i];
    var rect = node.getBoundingClientRect();
    node.setAttribute("data-sps-offset", rect.bottom - rect.height - window.innerHeight);
  }
  ScrollPosStyler.init();
  Stickyfill.addOne(document.getElementById("nav"));
});
