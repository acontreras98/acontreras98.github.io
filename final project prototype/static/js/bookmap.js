let map;
let locations = [];
let src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOsXFeFOx6oIrP-9q8IhyeaVgYa1dJKK4&libraries=places">

function makeMap() {

}

function searchStores() {
	document.getElementById("Book-Stores").innerHTML = "";

	let address = document.getElementById("address").value;

	let geocoder = new google.maps.Geocoder();
}