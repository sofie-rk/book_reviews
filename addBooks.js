
// Access components from frontPage.html
const content = document.getElementById("content")



for (let i=0; i<books.length; i++) {

    // Division about the book
    var bookDivision = document.createElement("div")
    bookDivision.setAttribute('class', 'bookDivision')

    // Create left part
    var leftDivision = document.createElement("div")
    leftDivision.setAttribute('class', 'leftDivision')

    // Create right part
    var rightDivision = document.createElement("div")
    rightDivision.setAttribute('class', 'rightDivision')

    // Book title
    var bookTitle = document.createElement("p")
    bookTitle.setAttribute('class', 'bookTitle')
    bookTitle.appendChild(document.createTextNode(books[i].title))

    // Book author
    var bookAuthor = document.createElement("p")
    bookAuthor.setAttribute('class', 'bookInfo')
    bookAuthor.appendChild(document.createTextNode("Author: " + books[i].author))

    // Picture
    var bookImage = document.createElement('img')
    bookImage.setAttribute('src', books[i].imageloc)
    bookImage.setAttribute('alt', 'Book image')
    bookImage.setAttribute('class', 'bookImage')

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

    
    rightDivision.appendChild(bookTitle)
    rightDivision.appendChild(bookAuthor)
    rightDivision.appendChild(bookReview)

    leftDivision.appendChild(bookImage)
    leftDivision.appendChild(bookType)
    leftDivision.appendChild(bookLength)
    leftDivision.appendChild(readWhen)

    bookDivision.appendChild(leftDivision)
    bookDivision.appendChild(rightDivision)
    
    

    content.appendChild(bookDivision)


}