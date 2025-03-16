let bookResults = [];
let input = document.getElementById('search-input');
let output = document.getElementById('output');
let bookShelf = document.getElementById('Book-shelf');
let query;

function bookSearch() {
	let search = document.querySelector('#search_input');
	query = search.value;
	doFetch();

}

function doFetch() {
    const url = 'http://openlibrary.org/search.json?q=' + query + '&limit=5';
    isLoading = true;
    //render();
    console.log('making query to ', url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('data', data);
            bookResults= data.docs;

            console.log('books array', bookResults);
            displayResults();
        });
    console.log(bookResults.length)
    //isLoading = false;
    //render();
}

function displayResults() {
	output.innerHTML = '';

	if (bookResults.length > 1) {
		bookResults.forEach(book => {

			let bookTab = document.createElement('div');
			bookTab.className = 'Book-tab';

			let title = book.title;



			let coverImg = `<img class="Book-tab-img" src="https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg" alt="Cover of ${title}" />`;
			bookTab.innerHTML += coverImg;

			let bookTabDetails = document.createElement('div');
			bookTabDetails.innerHTML += '<div class="Book-tab-title"><b>' + title + '</b></div>';

			let addButton = document.createElement('button');
			

			let authorName = book.author_name;
			bookTabDetails.innerHTML += authorName;

			//let yearPub = book.first_publish_year;
			//let year = "<bold>" + yearPub + "<bold><br>"
			//bookTabDetails.innerHTML += year;


			bookTab.appendChild(bookTabDetails);

			let bookButton = document.createElement('button');
			bookButton.setAttribute("class", "button is-primary is-dark");

			bookButton.textContent = 'Add to bookshelf';
			bookButton.addEventListener('click', () => addBook(bookTab));

			bookTab.appendChild(bookButton);



			output.appendChild(bookTab);


		});
	}
}

function addBook(bookTab) { 

 	let bookButton = bookTab.querySelector('button');
 	bookButton.remove();
 	rateBook(bookTab);

	bookShelf.appendChild(bookTab);



}

function rateBook(bookTab) {

	let activeMenu = document.createElement('div');
	activeMenu.className = "dropdown";

	let rateBox = document.createElement('div');
	rateBox.className = "dropdown-trigger";
	rateBox.innerHTML += `<button class="button" aria-haspopup="true" aria-controls="dropdown-menu3"><span>Rate Book</span><span class="icon is-small"><i class="fas fa-angle-down" aria-hidden="true"></i></span></button>`;

	activeMenu.appendChild(rateBox);

	let menu = document.createElement('div');
	menu.className = "dropdown-menu";

	let menuItems = document.createElement('div');
	menuItems.className = "dropdown-content";

	let zeroStar = document.createElement('button');
	zeroStar.innerHTML += 'Zero &#x2606';
	zeroStar.addEventListener('click', () => addStar(0, bookTab));
	menuItems.appendChild(zeroStar);

	let oneStar = document.createElement('button');
	oneStar.innerHTML += '&#x2606';
	oneStar.addEventListener('click', () => addStar(1, bookTab));
	menuItems.appendChild(oneStar);

	let twoStar = document.createElement('button');
	twoStar.innerHTML += '&#x2606 &#x2606';
	twoStar.addEventListener('click', () => addStar(2, bookTab));
	menuItems.appendChild(twoStar);

	let threeStar = document.createElement('button');
	threeStar.innerHTML += '&#x2606 &#x2606 &#x2606';
	threeStar.addEventListener('click', () => addStar(3, bookTab));
	menuItems.appendChild(threeStar);

	let fourStar = document.createElement('button');
	fourStar.innerHTML += '&#x2606 &#x2606 &#x2606 &#x2606';
	fourStar.addEventListener('click', () => addStar(4, bookTab));
	menuItems.appendChild(fourStar);

	let fiveStar = document.createElement('button');
	fiveStar.innerHTML += '&#x2606 &#x2606 &#x2606 &#x2606 &#x2606';
	fiveStar.addEventListener('click', () => addStar(5, bookTab));
	menuItems.appendChild(fiveStar);




	menu.appendChild(menuItems);
	activeMenu.appendChild(menu);

	bookTab.appendChild(activeMenu);
}

function addStar(num, bookTab) {

	let stars = document.createElement('div');
	stars.className = "star-rating";



}



