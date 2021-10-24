$(document).ready(function(){
    $(".top-btn").hide()
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        $(".top-btn").show("slow");
      } else {
        $(".top-btn").hide("slow")
      }
    });
    $(".nav-btn").click(function(){
      if($("#nav-btn-span").attr('class').includes("fa-times")){
        $("#nav-btn-span").removeClass("fa-times");
        $("#nav-btn-span").addClass("fa-bars");
      }else{
        $("#nav-btn-span").removeClass("fa-bars");
        $("#nav-btn-span").addClass("fa-times");
      }
      
      $(".nav-list").toggle("slow");
    });  
});
