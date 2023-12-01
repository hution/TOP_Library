const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        const bookInfo = `${title} by ${author}. ${pages} pages, ${read}.`; 
        return bookInfo;
    }
}

function addBookToLibrary(){
    
}

// const book1 = new Book("The Hobbit","J.R.R Tolkien",293,"not yet read");
