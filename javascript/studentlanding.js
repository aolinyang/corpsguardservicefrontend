var map;
var marker;
var curLocation;
var name;
var phone;

function pickMeUp() {
    query = "name=" + name + "&phone=" + phone + "&currentlat=" + curLocation.lat + "&currentlong=" + curLocation.lng + "&destlat=" + marker.getPosition().lat() + "&destlong=" + marker.getPosition().lng();
    
    fetch("http://localhost:7000?" + query, {
        method: "PUT",
        headers: {
            accept: "application/json"
        }
    }).then(function(res) {return res.json()})
    .then(function(res) {
        
    });
}

function start() {
	initFields();
	initMap();
}

function initFields() {
	var x = document.createElement("INPUT");
	x.setAttribute("type", "text");
	x.setAttribute("value", "Hello World!");
	document.body.appendChild(x);
}

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    curLocation = {lat: position.coords.latitude, lng: position.coords.longitude};
    map = new google.maps.Map(document.getElementById('map'), {zoom: 19, center: curLocation});
    marker = new google.maps.Marker({position: curLocation, map: map});
    map.addListener('click', function(e) {
        changeMarker(e.latLng);
    });
}

function changeMarker(location) {
    marker.setMap(null);
    marker = new google.maps.Marker({
        position: location,
        map: map
    });
}