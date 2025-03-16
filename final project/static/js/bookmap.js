
let libData= [];
var map = L.map('map').setView([37.8, -122.4], 13);
output = document.getElementById('store-results');


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




function zipSearch() {
	output.innerHTML = '';
	let zipInput = document.querySelector('#zip');
	let zipCode = zipInput.value;

	if (zipCode.length != 5 || !Number.isInteger(Number(zipCode)))
	{
		output.innerHTML += "Please enter a valid zip code";
	} else {
		fetch(`./static/data/libaries.json`)
    		.then(response => response.json())
    			.then(data => {
            		libData = data;
            		libSearch(zipCode);


        		});

	}

}


function libSearch(zipCode){

	libCount = 0;

	for (let lib of libData) {
		zip = lib.ZIP;
		if(zip === Number(zipCode)){
			libCount++
			libTab = makeLibTab(lib);
			output.appendChild(libTab);

		}
	}

	if (libCount === 0) {
		output.innerHTML += "No library found in entered zip code. Please try another";
	}

}

function makeLibTab(lib){
	let libraryTab = document.createElement('div');
	libraryTab.className = 'card';

	let libraryTitle = document.createElement('header');
	libraryTitle.className = 'card-header';

	let library = lib.LIBNAME;
	//let libraryName = library.value;
	libraryTitle.innerHTML += `<p class="card-header-title">${library}</p> <button class="card-header-icon" aria-label="more options"> <span class="icon"> <i class="fas fa-angle-down" aria-hidden="true"></i></span></button>`;
	libraryTab.appendChild(libraryTitle);

	let libraryContent = document.createElement('div');
	libraryContent.className = 'card-content';

	let content = document.createElement('div');
	content.className = "content";


	let address = lib.ADDRESS;
	//let libraryAddress = address.value;

	content.innerHTML +=  "Address: " + address;

	let city = lib.CITY;
	//let libraryCity = city.value;

	content.innerHTML += " " + city;

	let state = lib.STATE;
	//let libState = state.value; 

	content.innerHTML += " ," + state;

	libraryContent.appendChild(content);
	libraryTab.appendChild(libraryContent);

	return libraryTab;

 




}


