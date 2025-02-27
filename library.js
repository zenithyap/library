const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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

        const read = document.createElement("p");
        read.textContent = book.read;
        card.appendChild(read);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        card.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            card.remove();
        });

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

cancelButton.addEventListener("click", () => {
    dialog.close();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary(bookName.value, bookAuthor.value, bookPages.value, bookReadStatus.value);
    display();
    dialog.close();
});

addBookToLibrary("Behave", "Robert Sapsolky", "800", "reading");
addBookToLibrary("Why We Sleep", "Matthew Walker", "368", "read");
addBookToLibrary("Sapiens", "Yuval Noah Harari", "498", "read");
addBookToLibrary("Atomic Habits", "James Clear", "320", "reading");
addBookToLibrary("Thinking, Fast and Slow", "Daniel Kahneman", "499", "to read");
addBookToLibrary("The Power of Habit", "Charles Duhigg", "371", "read");
addBookToLibrary("The Subtle Art of Not Giving a F*ck", "Mark Manson", "224", "to read");
addBookToLibrary("Deep Work", "Cal Newport", "296", "reading");
addBookToLibrary("Meditations", "Marcus Aurelius", "254", "read");

display();
