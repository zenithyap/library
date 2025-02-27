const NUM_READ_OPTIONS = 3;
readOptions = ["Read", "Want to Read", "Currently Reading"];

const myLibrary = [];
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

function display() {
    const library = document.querySelector(".card-container");
    library.innerHTML = "";
    for (const book of myLibrary) {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h2");
        title.textContent = book.title;
        card.appendChild(title);

        const author = document.createElement("p");
        author.textContent = book.author;
        card.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;
        card.appendChild(pages);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const read = document.createElement("button");
        read.classList.add("read-button");
        read.textContent = readOptions[+book.read];
        read.addEventListener("click", () => {
            book.setRead((+book.read + 1) % NUM_READ_OPTIONS);
            read.textContent = readOptions[+book.read];
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "delete";

        deleteButton.addEventListener("click", () => {
            card.remove();
        });

        buttonContainer.appendChild(read);
        buttonContainer.appendChild(deleteButton);
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
    addBookToLibrary(bookName.value, bookAuthor.value, bookPages.value, bookReadStatus.value);
    display();
    dialog.close();
});

addBookToLibrary("Behave", "Robert Sapsolky", "800", 0);
addBookToLibrary("Why We Sleep", "Matthew Walker", "368", 0);
addBookToLibrary("Sapiens", "Yuval Noah Harari", "498", 1);
addBookToLibrary("Atomic Habits", "James Clear", "320", 2);
addBookToLibrary("Thinking, Fast and Slow", "Daniel Kahneman", "499", 1);
addBookToLibrary("The Power of Habit", "Charles Duhigg", "371", 1);
addBookToLibrary("The Subtle Art of Not Giving a F*ck", "Mark Manson", "224", 2);
addBookToLibrary("Deep Work", "Cal Newport", "296", 1);
addBookToLibrary("Meditations", "Marcus Aurelius", "254", 1);

display();
