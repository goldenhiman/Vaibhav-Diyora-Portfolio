function myMap() {
    var diyorahome = {lat: 21.2021657, lng: 72.8499207};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: diyorahome
      });
    var marker = new google.maps.Marker({
        position: diyorahome,
        map: map
      });
    
}

$(document).ready(function(){
  $('a.smoothScroll').on('click',function(e){
    $(this).hide();
    $(this).parent().siblings().children('a.smoothScroll').removeClass('active_nav');
  });

  $(window).scroll(function(){
    /* -------------------
    Header Animation
    ---------------------*/
    if ($(this).scrollTop() > 700){  
        $('header').addClass("showhead");
    }
    else{
        $('header').removeClass("showhead")
    }
    
});

  alert('this is working');
});