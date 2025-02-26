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
    console.log(library);
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
        pages.textContent = `pages: ${book.pages}`;
        card.appendChild(pages);

        const read = document.createElement("p");
        read.textContent = book.read;
        card.appendChild(read);

        library.appendChild(card);
    }
}

const dialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#new-book-button");
const closeButton = document.querySelector("form button");

newBookButton.addEventListener("click", () => {
    dialog.showModal();
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
addBookToLibrary("The 48 Laws of Power", "Robert Greene", "452", "to read");
addBookToLibrary("Grit", "Angela Duckworth", "352", "reading");
addBookToLibrary("Outliers", "Malcolm Gladwell", "336", "read");
addBookToLibrary("The Alchemist", "Paulo Coelho", "208", "to read");
addBookToLibrary("Dune", "Frank Herbert", "688", "reading");
addBookToLibrary("The Psychology of Money", "Morgan Housel", "256", "read");
addBookToLibrary("The Four Agreements", "Don Miguel Ruiz", "160", "to read");
addBookToLibrary("Can't Hurt Me", "David Goggins", "364", "reading");
addBookToLibrary("Man's Search for Meaning", "Viktor E. Frankl", "200", "read");
addBookToLibrary("Zero to One", "Peter Thiel", "224", "to read");
addBookToLibrary("The Lean Startup", "Eric Ries", "336", "reading");
addBookToLibrary("The Art of War", "Sun Tzu", "273", "read");
addBookToLibrary("The Courage to Be Disliked", "Ichiro Kishimi, Fumitake Koga", "288", "to read");

display();
