var map;
var marker;
var curLocation;
var fname;
var lname;
var phone;

function pickMeUp() {
    fname = document.getElementById("firstname").value;
    lname = document.getElementById("lastname").value;
    phone = document.getElementById("phonenum").value;
    query = "fname=" + fname + "&lname=" + lname + "&phone=" + phone + "&currentlat=" + curLocation.lat + "&currentlong=" + curLocation.lng + "&destlat=" + marker.getPosition().lat() + "&destlong=" + marker.getPosition().lng();
    alert(query);
    fetch("http://localhost:7071/api/HttpTrigger?" + query, {
        method: "POST",
        headers: {
            accept: "application/json"
        }
    }).then(function (res) { return res.json() })
        .then(function (res) {

        });
}

function start() {
    initMap();
}

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, error, { enableHighAccuracy: true });
    }
}

function showPosition(position) {
    curLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
    map = new google.maps.Map(document.getElementById('map'), { zoom: 19, center: curLocation });
    var marker1 = new google.maps.Marker({ position: curLocation, map: map, icon: {                             
        url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"                           } });
    marker = new google.maps.Marker({ position: curLocation, map: map });
    map.addListener('click', function (e) {
        changeMarker(e.latLng);
    });
}

function error(err) {
    console.warn("rip");
}

function changeMarker(location) {
    marker.setMap(null);
    marker = new google.maps.Marker({
        position: location,
        map: map
    });
    console.log(marker.getPosition().lat());
    console.log(marker.getPosition().lng());
}