const myLibrary = [
    {title:"The Hobbit",author:"J.R.R Tolkien",pages:293,read:"not yet read"},
    {title:"The Silmarillion",author:"J.R.R Tolkien",pages:365,read:"not yet read"},
    {title:"Angels and Demons",author:"Dan Brown",pages:448,read:"read"}
];

const body = document.querySelector("body");
const bookListContainer = document.querySelector("#bookList");

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

function displayBooks(){
    bookListContainer.append()

    for (var book of myLibrary){
        
        
        
        console.log(`
        Title:${book.title}\n
        Author:${book.author}\n
        Page Count:${book.pages}\n
        Read Status:${book.read}\n
        `)
    }
}

// const book1 = new Book("The Hobbit","J.R.R Tolkien",293,"not yet read");
