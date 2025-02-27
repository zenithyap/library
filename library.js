const NUM_READ_OPTIONS = 3;
READ_BG = "#87A791";
TO_READ_BG = "#E08787";
READING_BG =  "#839FD4";
readOptions = ["Read", "Want to Read", "Currently Reading"];

let myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.setRead = function(readStatus) {
    this.read = readStatus;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function setReadStatusBgColor(book, read) {
    if (book.read === 0) {
        read.style.backgroundColor = READ_BG;
    } else if (book.read === 1) {
        read.style.backgroundColor = TO_READ_BG;
    } else if (book.read === 2) {
        read.style.backgroundColor = READING_BG;
    }
}

function createCardElement() {
    const card = document.createElement("div");
    card.classList.add("card");

    return card;
}

function createTitleElement(bookTitle) {
    const title = document.createElement("h2");
    title.textContent = bookTitle;

    return title;
}

function createAuthorElement(bookAuthor) {
    const author = document.createElement("p");
    author.textContent = bookAuthor;

    return author;
}

function createPagesElement(bookPages) {
    const pages = document.createElement("p");
    pages.textContent = `Pages: ${bookPages}`;

    return pages;
}

function createButtonContainer() {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    return buttonContainer;
}

function createReadStatusElement(book) {
    const read = document.createElement("button");
    read.classList.add("read-button");
    read.textContent = readOptions[book.read];
    setReadStatusBgColor(book, read);

    read.addEventListener("click", () => {
        book.setRead((book.read + 1) % NUM_READ_OPTIONS);
        read.textContent = readOptions[book.read];
        setReadStatusBgColor(book, read);
    });

    return read;
}

function createDeleteElement(bookTitle, card) {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
        card.remove();
        myLibrary = myLibrary.filter(b => b.title !== bookTitle);
    });

    return deleteButton;
}

function display() {
    const library = document.querySelector(".card-container");
    library.innerHTML = "";
    for (const book of myLibrary) {
        const card = createCardElement();
        const title = createTitleElement(book.title);
        const author = createAuthorElement(book.author);
        const pages = createPagesElement(book.pages);
        const buttonContainer = createButtonContainer();
        const readStatusButton = createReadStatusElement(book);
        const deleteButton = createDeleteElement(book.title, card);

        buttonContainer.appendChild(readStatusButton);
        buttonContainer.appendChild(deleteButton);

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(buttonContainer);

        library.appendChild(card);
    }
}

const dialog = document.querySelector("#add-book-dialog");
const cancelButton = document.querySelector("#cancel-button");
const newBookButton = document.querySelector("#new-book-button");
const form = document.querySelector("form");
const bookName = document.querySelector("#book-name");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookReadStatus = document.querySelector("#book-read-status");

newBookButton.addEventListener("click", () => {
    dialog.showModal();
});

cancelButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary(bookName.value, bookAuthor.value, bookPages.value, +bookReadStatus.value);
    display();
    dialog.close();
});
