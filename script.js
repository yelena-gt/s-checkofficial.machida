$(function () {
  $(".slideshow-slide li").hide().css("position", "absolute");
  $(".slideshow-slide li:first").addClass("slide");
  $(".slideshow-slide li:nth-child(2)").css("display", "block");

  setInterval(function () {
    var $active = $(".slideshow-slide li.slide");
    var $next = $active.next("li").length
      ? $active.next("li")
      : $(".slideshow-slide li:first");

    var $nextnext = $next.next("li").length
      ? $next.next("li")
      : $(".slideshow-slide li:first");

    $active.fadeOut(0).removeClass("slide");
    $next.show().addClass("slide");
    $nextnext.css("display", "block");
  }, 5000);
});

$(function () {
  $(".slideshow-slide img").each(function () {
    const img = this;
    if (img.complete) setClass(img);
    else $(img).on("load", function () {
      setClass(img);
    });
  });



  function setClass(img) {
    const $img = $(img);
    const w = img.naturalWidth, h = img.naturalHeight;
    $img.removeClass('is-landscape is-portrait');
    if (w >= h) $img.addClass('is-landscape');
    else $img.addClass('is-portrait');
  }
});
