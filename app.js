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

//Bg version
var _CONTENT1 = ["Програмист", "Студент", "Хандбалист"];

var _PART1 = 0;
var _PART_INDEX1 = 0;
var _INTERVAL_VAL1;
var _ELEMENT1 = document.querySelector("#possition1");
var _CURSOR1 = document.querySelector("#cursor1");

function Type1() {
  var text1 = _CONTENT1[_PART1].substring(0, _PART_INDEX1 + 1);
  _ELEMENT1.innerHTML = text1;
  _PART_INDEX1++;

  if (text1 === _CONTENT1[_PART1]) {
    _CURSOR1.style.display = "none";

    clearInterval(_INTERVAL_VAL1);
    setTimeout(function () {
      _INTERVAL_VAL1 = setInterval(Delete1, 120);
    }, 1200);
  }
}

function Delete1() {
  var text1 = _CONTENT1[_PART1].substring(0, _PART_INDEX1 - 1);
  _ELEMENT1.innerHTML = text1;
  _PART_INDEX1--;

  if (text1 === "") {
    clearInterval(_INTERVAL_VAL1);

    if (_PART1 == _CONTENT1.length - 1) _PART1 = 0;
    else _PART1++;

    _PART_INDEX1 = 0;

    setTimeout(function () {
      _CURSOR1.style.display = "inline-block";
      _INTERVAL_VAL1 = setInterval(Type1, 140);
    }, 200);
  }
}

_INTERVAL_VAL1 = setInterval(Type1, 120);
