$(document).ready(function () {
  $(".top-btn").hide()
  if ($(window).width() <= 700) {
    $("#nav-open-btn").show()
    $(".nav-div").hide();
  }
  else {
    $("#nav-open-btn").hide()
    $(".nav-div").show("slow");
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".top-btn").show("slow");
    } else {
      $(".top-btn").hide("slow")
    }
  });
  $("#nav-open-btn").click(function () {
    $(".nav-div").show("slow");
    $("#nav-open-btn").hide("slow");
    setTimeout(() => {
      $(".nav-list").show("slow");
    }, 300)
  });
  $("#nav-close-btn").click(function () {
    $(".nav-list").hide("slow");
    $("#nav-open-btn").hide("slow");
    setTimeout(() => {
      $(".nav-div").hide("slow");
    }, 300)
    $("#nav-open-btn").show("slow");
  });
});
