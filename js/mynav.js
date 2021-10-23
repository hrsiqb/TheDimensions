$(document).ready(function(){
  
    $(".nav-btn").click(function(){
      console.log($("#nav-btn-span").attr('class'))
      if($("#nav-btn-span").attr('class') == "fa fa-times w-18px"){
        $("#nav-btn-span").removeClass("fa-times");
        $("#nav-btn-span").addClass("fa-bars");
      }else{
        $("#nav-btn-span").removeClass("fa-bars");
        $("#nav-btn-span").addClass("fa-times");
      }
      
      $(".nav-list").toggle("slow");
    });  
});
