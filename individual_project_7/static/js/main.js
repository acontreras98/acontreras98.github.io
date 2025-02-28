const PAGE_SIZE = 10;


// Hint: You can use these for global state variables...
let query = 'the lord of the rings';
let isLoading = false;
let books = [];
let page = 0;
let totalPages = 0;


/*
  doFetch will do the fetch to the API based on state, updating the state with
  the books retrieved.
*/
function doFetch() {
    // TODO: This function will need some updating...
    //console.log('Im fetch');
    const url = 'http://openlibrary.org/search.json?q=' + query + '&limit=10&offset=' + (page * 10);
    isLoading = true;
    render();
    console.log('making query to ', url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('data', data);
            books = data.docs;
            numOfBooks = data.numFound;
            totalPages = Math.ceil(numOfBooks / 10);

            console.log('books array', books);
            isLoading = false
            render();
        });
    //console.log(books.length)
    //isLoading = false;
    //render();
}

function onSearch() {
    //console.log('Im search');
    // TODO: This function will need some updating...
    //isLoading = true;
    let search = document.querySelector('#search_input');
    query = search.value;
    page = 0;

    doFetch();

}


// TODO: This function will need some updating...
function decrementPage() {
    if (page != 0) {
        page--;
        doFetch();

    }

}



// TODO: This function will need some updating...
function incrementPage() {
    if (page != (totalPages - 1)){
        page++;
        doFetch();
    }
}

function render() {
    //console.log('Im render');
    // TODO: This function will need some updating...
    let bookDiv = document.querySelector('#books_div');
    let pagesSpan = document.querySelector('#pages_span');
    let displayPage = page + 1;
    pagesSpan.textContent = displayPage + ' / ' +  totalPages;
    if (isLoading) {
        bookDiv.innerHTML = '<div class="loader">Loading...</div>';
    } else {
        let output = document.querySelector('#books_div');
        output.innerHTML = '';
        console.log(books.length);
        for (let book of books){
            bookElement = makeBookElement(book);
            console.log(bookElement);
            output.appendChild(bookElement);
            
        }


    }
}

function makeBookElement(book){
    let bookClass = document.createElement('div');
    bookClass.className = 'Books-book';
    let coverURL = 'http://covers.openlibrary.org/b/id/' + book.cover_i + '-M.jpg';
    
    let bookImg = document.createElement('img');
    bookImg.setAttribute('src', coverURL);
    bookImg.setAttribute('alt', 'cover');
    bookClass.appendChild(bookImg);

    let bookDetails = document.createElement('div');
    bookDetails.className = 'Books-book-details';
    
    let title = book.title;
    bookDetails.innerHTML += `<div class="Books-book-title">` + title + `</div>`;;

    let authorName = book.author_name;
    let author = `<strong>${'Author: '}</strong>` + authorName + `<br>`;
    bookDetails.innerHTML += author;
    

    let langList = book.language;
    let languages = `<strong>${'Language: '}</strong>` + langList + `<br>`;
    bookDetails.innerHTML += languages;
    

    let yearPub = book.first_publish_year;
    let year = `<strong>${'Year Published: '}</strong>` + yearPub + `<br>`;
    bookDetails.innerHTML += year;

   
    bookClass.appendChild(bookDetails);

    return bookClass;


}
