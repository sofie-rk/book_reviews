
//import {books} from "./books.js"

// Access components from frontPage.html
const content = document.getElementById("content")

// Each book is a JSON-object

const bookTypes = ["Audiobook", "Physical Book"]

const genres = ["Biography/Memoir"]


const murderInLittleEgypt = {
    title: "Murder in Little Egypt",
    type: bookTypes[0],
    length: "13h, 12min",
    author: "Darcy O'Brien",
    read: "May-June 2021",
    genre: genres[0],
    review: "Murder in Little Egypt is a true crime, telling the story of the unimaginable crime of a father murdering his son in. \
            Dr. Cavaness was a well respected doctor living in a small, rural place called Eldorado in Southern Illinois. Despite him being a greedy, drunken, and selfish man, the townpeople of Eldorado worshiped him. He had 4 sons, Mark, Kevin, Sean and Patrick.\
            Murder in Little Egyot is a story of manipulation, hatred, coldness and inhumanity. In the beginning, the reader gets a thourghough introduction to Dr. Cavaness life, long before he murdered his son.\
            I would recommend this book for thos interested in true crime. The book is written on a detective and interpersonal level, without too many gory details.\
            ",
}

const aRipInHeaven = {
    title: "A Rip in Heaven",
    type: bookTypes[0],
    length: "Unknown",
    author: "Jeanine Cummings",
    read: "March-April 2021",
    genre: genres[0],
    review: "True Crime. About the murder of Julie and another girl, and the assualt on the guy. Goes into the storyline and aftermath of the crime.",
}


const books = [murderInLittleEgypt, aRipInHeaven]


for (let i=0; i<books.length; i++) {

    // Division about the book
    var bookDivision = document.createElement("div")
    bookDivision.setAttribute('class', 'bookDivision')

    // Book title
    var bookTitle = document.createElement("p")
    bookTitle.setAttribute('class', 'bookTitle')
    bookTitle.appendChild(document.createTextNode(books[i].title))

    // Book author
    var bookAuthor = document.createElement("p")
    bookAuthor.setAttribute('class', 'bookInfo')
    bookAuthor.appendChild(document.createTextNode("Author: " + books[i].author))

    // Type 
    var bookType = document.createElement("p")
    bookType.setAttribute('class', 'bookInfo')
    bookType.appendChild(document.createTextNode("Type: " + books[i].type))

    // Length
    var bookLength = document.createElement("p")
    bookLength.setAttribute('class', 'bookInfo')
    bookLength.appendChild(document.createTextNode("Length: " + books[i].length))

    // Genre
    var bookGenre = document.createElement("p")
    bookGenre.setAttribute('class', 'bookInfo')
    bookGenre.appendChild(document.createTextNode("Genre: " + books[i].genre))

    // Read when
    var readWhen = document.createElement("p")
    readWhen.setAttribute('class', 'bookInfo')
    readWhen.appendChild(document.createTextNode("Read in " + books[i].read))

    // Review
    var bookReview = document.createElement("p")
    bookReview.setAttribute('class', 'bookReview')
    bookReview.appendChild(document.createTextNode(books[i].review))

    

    bookDivision.appendChild(bookTitle)
    bookDivision.appendChild(bookAuthor)
    bookDivision.appendChild(bookType)
    bookDivision.appendChild(bookLength)
    bookDivision.appendChild(bookGenre)
    bookDivision.appendChild(readWhen)
    bookDivision.appendChild(bookReview)
    
    

    content.appendChild(bookDivision)


}