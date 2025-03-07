let bookResults = [];
let input = document.getElementById('search-input');
let output = document.getElementById('output');
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
			bookTabDetails.innerHTML += '<div class="Book-tab-title>' + title + '</div>';

			
			

			let authorName = book.author_name;
			bookTabDetails.innerHTML += authorName;

			let yearPub = book.first_publish_year;
			let year = "<bold>" + yearPub + "<bold><br>"
			bookTabDetails.innerHTML += year;



			bookTab.appendChild(bookTabDetails);

			output.appendChild(bookTab);


		});
	}





}
