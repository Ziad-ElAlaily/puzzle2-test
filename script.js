var clicked;
var pos = { x: 0, y: 0 };
var temp = { x: 0, y: 0 };
var transform = { x: -20, y: 40 };
var box = $(".box");

$(".box").mousemove(function (e) {
  if (!clicked) {
    return false;
  }

  temp.x = transform.x + (pos.y - e.pageY);
  temp.y = transform.y - (pos.x - e.pageX);
  box.css("transform", "rotateX(" + temp.x + "deg) rotateY(" + temp.y + "deg)");
});

$(".box").mousedown(function (e) {
  clicked = true;
  pos.x = e.pageX;
  pos.y = e.pageY;
});

$(".box").mouseup(function () {
  clicked = false;
  transform.x = temp.x;
  transform.y = temp.y;
});
