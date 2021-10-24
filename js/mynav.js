$(document).ready(function(){
    $(".top-btn").hide()
    $("#nav-open-btn").hide()
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        $(".top-btn").show("slow");
      } else {
        $(".top-btn").hide("slow")
      }
    });
    $("#nav-open-btn").click(function(){
      // if($("#nav-btn-span").attr('class').includes("fa-times")){
      //   $("#nav-btn-span").removeClass("fa-times");
      //   $("#nav-btn-span").addClass("fa-bars");
      // }else{
      //   $("#nav-btn-span").removeClass("fa-bars");
      //   $("#nav-btn-span").addClass("fa-times");
      // }
      
      $(".nav-div").show("slow");
      $("#nav-open-btn").hide("slow");
      setTimeout(() => {
        $(".nav-list").show("slow");
      },300)
    });  
    $("#nav-close-btn").click(function(){
      $(".nav-list").hide("slow");
      $("#nav-open-btn").hide("slow");
      setTimeout(() => {
        $(".nav-div").hide("slow");
      },300)
      $("#nav-open-btn").show("slow");
    });  
});
