//Auto writter
var _CONTENT = ["Programmer", "Student", "Handball Player"];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#possition");
var _CURSOR = document.querySelector("#cursor");

function Type() {
  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  if (text === _CONTENT[_PART]) {
    _CURSOR.style.display = "none";

    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 120);
    }, 1200);
  }
}

function Delete() {
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    if (_PART == _CONTENT.length - 1) _PART = 0;
    else _PART++;

    _PART_INDEX = 0;

    setTimeout(function () {
      _CURSOR.style.display = "inline-block";
      _INTERVAL_VAL = setInterval(Type, 140);
    }, 200);
  }
}

_INTERVAL_VAL = setInterval(Type, 120);

//Scroll detection
$(window).scroll(whenScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

//When scroll to skill section count percent
function whenScroll() {
  if (isScrolledIntoView($(".percent")) && !viewed) {
    viewed = true;
    $(".percent").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2400,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
}

//Progress bar inner body width animation
$(function () {
  var $section = $(".skillsBox");

  function loadDaBars() {
    $(".inner").each(function () {
      $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate(
          {
            width: $(this).data("origWidth"),
          },
          2400
        );
    });
  }

  $(document).bind("scroll", function (ev) {
    var scrollOffset = $(document).scrollTop();
    var containerOffset = $section.offset().top - window.innerHeight;
    if (scrollOffset > containerOffset) {
      loadDaBars();
      $(document).unbind("scroll");
    }
  });
});
