// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

$(document).ready(function(){
  
    $(".nav-btn").click(function(){

      if($(".nav-btn").text() == "☰"){
        $(".nav-btn").text("🞬");
      }else{
        $(".nav-btn").text("☰");
      }
      
      $(".nav-list").toggle("slow");
    });  
});
