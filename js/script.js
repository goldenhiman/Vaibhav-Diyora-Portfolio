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