$(function() {
    var lnb = $("#lnb-container").offset().top;
   
    $(window).scroll(function() {
     
      var window = $(this).scrollTop();
      
      if(lnb <= window) {
        $("#lnb-container").addClass("fixed");
      }else{
        $("#lnb-container").removeClass("fixed");
      }
    })
  });

function toggleMenu() {
    let toggleButton = document.querySelector("#gnb-toggle-btn");
    let toggleMenu = document.querySelector("#gnb-toggle-container");
    toggleMenu.classList.toggle("toggle");
    toggleButton.classList.toggle("toggle");
}