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

    /* ------------------
    Header Links Color
    -------------------*/
    if($(this).scrollTop() >= ($('#section1').offset().top-54) && $(this).scrollTop() < ($('#section2').offset().top-54)){
      $('a[href="#section1"]').addClass('active_nav');
    }else{
      $('a[href="#section1"]').removeClass('active_nav');
    }

    if($(this).scrollTop() >= ($('#section2').offset().top-54) && $(this).scrollTop() < ($('#section3').offset().top-54)){
      $('a[href="#section2"]').addClass('active_nav');
    }else{
      $('a[href="#section2"]').removeClass('active_nav');
    }

    if($(this).scrollTop() >= ($('#section3').offset().top-54) && $(this).scrollTop() < ($('#section5').offset().top-54)){
      $('a[href="#section3"]').addClass('active_nav');
    }else{
      $('a[href="#section3"]').removeClass('active_nav');
    }

    if($(this).scrollTop() >= ($('#section5').offset().top-54)){
      $('a[href="#section5"]').addClass('active_nav');
    }else{
      $('a[href="#section5"]').removeClass('active_nav');
    }
    
    
  });
});

// cache updation

var appCache = window.applicationCache;

appCache.update(); // Attempt to update the user's cache.

if (appCache.status == window.applicationCache.UPDATEREADY) {
  appCache.swapCache();  // The fetch was successful, swap in the new cache.
}