// A helper function to randomly assign a status for variety
const statuses = ["available", "available", "borrowed", "reserved"];
const randomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];

// === Book Data (All books in one array) ===
const allBooks = [
    // Featured/Fiction/Science/History/Technology/Biography (Original 12)
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction", status: "available", coverUrl: './coverpage/the great gastsby.webp' },
    { title: "To Kill a Mockingbird", author: "Harper Lee", category: "fiction", status: "borrowed", coverUrl:'https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg' },
    { title: "1984", author: "George Orwell", category: "fiction", status: "available", coverUrl:'https://m.media-amazon.com/images/I/819H+TNH6gL._AC_UF1000,1000_QL80_.jpg' },
    { title: "A Brief History of Time", author: "Stephen Hawking", category: "science", status: "available", coverUrl:'https://0.academia-photos.com/attachment_thumbnails/63247575/mini_magick20220704-11596-159myrb.png?1656953526' },
    { title: "The Origin of Species", author: "Charles Darwin", category: "science", status: "reserved", coverUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1298417570i/22463.jpg' },
    { title: "Sapiens", author: "Yuval Noah Harari", category: "history", status: "available", coverUrl: 'https://covers.storytel.com/jpg-640/9780062796233.04f46c22-d7d4-4df8-9330-6b37903d6543?optimize=high'},
    { title: "The Art of War", author: "Sun Tzu", category: "history", status: "available", coverUrl: 'https://m.media-amazon.com/images/I/51no+g+ttWL._SL500_.jpg' },
    { title: "Clean Code", author: "Robert C. Martin", category: "technology", status: "available", coverUrl: 'https://m.media-amazon.com/images/I/81Rnac2Fq+L._AC_UF1000,1000_QL80_.jpg' },
    { title: "Steve Jobs", author: "Walter Isaacson", category: "biography", status: "borrowed", coverUrl: 'https://m.media-amazon.com/images/I/81J+kkQIMhL._AC_UF1000,1000_QL80_.jpg'},
    { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "fiction", status: "available", coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbx4VXBiZRM11hSqJRrC7f1HLQrCUkgMY8g&s'},
    { title: "Cosmos", author: "Carl Sagan", category: "science", status: "available", coverUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Cosmos_spacetime_odyssey_titlecard.jpg' },
    { title: "The Code Breaker", author: "Walter Isaacson", category: "biography", status: "available", coverUrl:'https://imgv2-2-f.scribdassets.com/img/document/898007621/original/02e2772667/1?v=1'},

    // New Literature Books (8 Books)
    { title: "One Hundred Years of Solitude", author: "G. G. Marquez", category: "literature", status: randomStatus(), coverUrl:'https://m.media-amazon.com/images/I/A1O-TCWZDhL._AC_UF1000,1000_QL80_.jpg' },
    { title: "Pride and Prejudice", author: "Jane Austen", category: "literature", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_FMjpg_UX1000_.jpg' },
    { title: "Moby Dick", author: "Herman Melville", category: "literature", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/M/MV5BZWUyOTgyMzktMjhmNi00NThkLTkxMGEtMGU0ZDEzZWQxNjNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", category: "literature", status: randomStatus(), coverUrl: 'https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg' },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", category: "literature", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/71O2XIytdqL.jpg' },
    { title: "The Odyssey", author: "Homer", category: "literature", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/A1JR2oK-orL.jpg' },
    { title: "Wuthering Heights", author: "Emily Brontë", category: "literature", status: randomStatus(), coverUrl: 'https://imgv2-1-f.scribdassets.com/img/word_document/216441843/original/a8998210eb/1?v=1' },
    { title: "Invisible Man", author: "Ralph Ellison", category: "literature", status: randomStatus(), coverUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/The_Invisible_Man_%282020_film%29_-_release_poster.jpg/250px-The_Invisible_Man_%282020_film%29_-_release_poster.jpg' },

    // New Technology Books (8 Books)
    { title: "The Mythical Man-Month", author: "Frederick Brooks Jr.", category: "technology", status: randomStatus(), coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkAHTixyc6e3PXaS8Zl9fwl7jniAs_4pusw&s'},
    { title: "Code: The Hidden Language", author: "Charles Petzold", category: "technology", status: randomStatus(), coverUrl: 'https://www.yumpu.com/en/image/facebook/69081729.jpg' },
    { title: "The Lean Startup", author: "Eric Ries", category: "technology", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/61lV0GpD3-L._AC_UF1000,1000_QL80_.jpg' },
    { title: "Algorithms to Live By", author: "Brian Christian", category: "technology", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/81EI+ELW9EL.jpg' },
    { title: "Deep Learning with Python", author: "François Chollet", category: "technology", status: randomStatus(), coverUrl: 'https://images.manning.com/book/0/896c69b-c642-42c6-acbc-2a1454802871/Chollet3-720x900.jpg'},
    { title: "Hitchhiker's Guide to AI", author: "Kenji Okumura", category: "technology", status: randomStatus(), coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72yEheNnApTU3g9pgnnwZE0UAdLy6Jg5BQw&s'},
    { title: "Designing Data-Intensive Apps", author: "Martin Kleppmann", category: "technology", status: randomStatus(), coverUrl:'https://m.media-amazon.com/images/I/71YL95jVDpL._AC_UF1000,1000_QL80_.jpg' },
    { title: "The Innovator's Dilemma", author: "Clayton M. Christensen", category: "technology", status: randomStatus(), coverUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ec/The_Innovator%27s_Dilemma.jpg' },

    // New Finance Books (8 Books)
    { title: "The Intelligent Investor", author: "Benjamin Graham", category: "finance", status: randomStatus(), coverUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/3/EB/QY/ND/147952517/the-intelligent-investor-by-benjamin-graham-warren-buffett-.jpeg'},
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "finance", status: randomStatus(), coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD8NS31UH61VD6SV9kLDVWlV5mskj_LA-HQ&s'},
    { title: "A Random Walk Down Wall Street", author: "Burton Malkiel", category: "finance", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/61YEPc3XWlL._AC_UF1000,1000_QL80_.jpg'},
    { title: "The Total Money Makeover", author: "Dave Ramsey", category: "finance", status: randomStatus(), coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSisuKkVdZ2wUCdCkaEiQ3Kqcon3OIhJw6Mng&s' },
    { title: "Security Analysis", author: "Graham and Dodd", category: "finance", status: randomStatus(), coverUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Security_analysis.jpg' },
    { title: "The Millionaire Next Door", author: "Thomas J. Stanley", category: "finance", status: randomStatus(), coverUrl: 'https://rukminim2.flixcart.com/image/480/640/xif0q/book/z/s/z/the-millionaire-next-door-original-imagydfer4twtdbz.jpeg?q=20' },
    { title: "Common Stocks and Uncommon Profits", author: "Philip A. Fisher", category: "finance", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/71IY62ABI9L._AC_UF1000,1000_QL80_.jpg' },
    { title: "Psychology of Money", author: "Morgan Housel", category: "finance", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/81Ng+3k+jbL._UF1000,1000_QL80_.jpg'},

    // New Travel Books (8 Books)
    { title: "Into the Wild", author: "Jon Krakauer", category: "travel", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/91ZBVvIHP0L._AC_UF1000,1000_QL80_.jpg' },
    { title: "Vagabonding", author: "Rolf Potts", category: "travel", status: randomStatus(), coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAal98ljpmJ2LEleyMxQrZR-jOByL153LPOw&s' },
    { title: "The Alchemist", author: "Paulo Coelho", category: "travel", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/81ZtAPCqyGL._AC_UF1000,1000_QL80_.jpg'},
    { title: "Eat Pray Love", author: "Elizabeth Gilbert", category: "travel", status: randomStatus(), coverUrl: 'https://play-lh.googleusercontent.com/2t02H_igfqELfH2gFQx13fYGGY9QVHGMfAr8T-VHl0Hd1_o6rblWkaSKCd8VbB66XkuqZw' },
    { title: "Zen and the Art of Motorcycle Maintenance", author: "Robert M. Pirsig", category: "travel", status: randomStatus(), coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqblQfWMMRbvzHyCmS6IzVIJw1SZEENiXVQ&s' },
    { title: "On the Road", author: "Jack Kerouac", category: "travel", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1682955509i/141158749.jpg'},
    { title: "Neither Here Nor There", author: "Bill Bryson", category: "travel", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/816+jJb0nAL._AC_UF1000,1000_QL80_.jpg' },
    { title: "Seven Years in Tibet", author: "Heinrich Harrer", category: "travel", status: randomStatus(), coverUrl: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19890_p_v10_ap.jpg'  },

    // New Health Books (8 Books)
    { title: "Atomic Habits", author: "James Clear", category: "health", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/61M6KzUbf7L._AC_UF1000,1000_QL80_.jpg' },
    { title: "The Power of Now", author: "Eckhart Tolle", category: "health", status: randomStatus(), coverUrl:'https://media.licdn.com/dms/image/v2/D5612AQHqv-5cHvzT4g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1680597291060?e=2147483647&v=beta&t=mEkx5oJVnJW54qJiP1GFCJg4jU59kDpqzU8a4k3AEmc'  },
    { title: "Why We Sleep", author: "Matthew Walker", category: "health", status: randomStatus(), coverUrl: 'https://images.gatesnotes.com/12514eb8-7b51-008e-41a9-512542cf683b/a1460f50-80d4-456c-b032-9414312b540a/Holida_Books_2019-Image_02-1200px_by_630px-001.jpg' },
    { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", category: "health", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/71rmHeQeuRL._AC_UF1000,1000_QL80_.jpg'},
    { title: "Dare to Lead", author: "Brené Brown", category: "health", status: randomStatus(), coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL71f4S1-KFEBjP_Ly6zox2lGJNDmN1RMdvA&s' },
    { title: "Spark: The Revolutionary New Science", author: "John J. Ratey", category: "health", status: randomStatus(), coverUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1671132079i/33727898.jpg' },
    { title: "The Four Agreements", author: "Don Miguel Ruiz", category: "health", status: randomStatus(), coverUrl: 'https://upload.wikimedia.org/wikipedia/en/5/52/The_Four_Agreements.jpeg' },
    { title: "Change Your Brain, Change Your Life", author: "Daniel Amen", category: "health", status: randomStatus(), coverUrl: 'https://m.media-amazon.com/images/I/812QSv746BL._UF1000,1000_QL80_.jpg'}
];

// Constants for easy filtering
const featuredBooks = allBooks.slice(0, 12);
const catalogBooks = allBooks;

// --- UTILITY FUNCTIONS ---

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('catalog.html')) {
        return 'catalog';
    }
    return 'index';
}

function createBookCard(book) {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";

    bookCard.innerHTML = `
        <div class="book-cover" style="background-image: url('${book.coverUrl}'); background-size: cover; background-position: center;">
            <div style="background: rgba(0,0,0,0.4); padding: 5px 10px; border-radius: 5px;">${book.title.charAt(0)}</div>
        </div>
        <div class="book-info">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
            <div class="book-status status-${book.status}">${book.status}</div>
        </div>
    `;
    return bookCard;
}


// --- MAIN LOGIC FUNCTIONS ---

function loadBooks(category = "all", page = getCurrentPage()) {
    const bookGridId = page === "index" ? "homeBookGrid" : "catalogBookGrid";
    const bookGrid = document.getElementById(bookGridId);
    if (!bookGrid) return; // Exit if the grid element doesn't exist on this page

    bookGrid.innerHTML = "";

    const sourceBooks = page === "index" ? featuredBooks : catalogBooks;

    const filteredBooks = category === "all"
        ? sourceBooks
        : sourceBooks.filter(b => b.category === category);

    if (filteredBooks.length === 0) {
        bookGrid.innerHTML = '<p class="placeholder-text">No books found in this category.</p>';
        return;
    }

    filteredBooks.forEach(book => {
        bookGrid.appendChild(createBookCard(book));
    });
}

function filterBooks(clickedChip, page = getCurrentPage()) {
    const category = clickedChip.getAttribute('data-category');

    // Clear active class ONLY within the correct category container on the current page
    const containerClass = page === 'index' ? '.home-categories' : '.catalog-categories';
    const categoryContainer = document.querySelector(containerClass);
    if (!categoryContainer) return;

    const categoryChips = categoryContainer.querySelectorAll(".category-chip");

    categoryChips.forEach(chip => chip.classList.remove("active"));

    // Set the clicked chip to active
    clickedChip.classList.add("active");

    loadBooks(category, page);
}

// THE MODIFIED SEARCH FUNCTION IS HERE
function searchBooks(page = getCurrentPage()) {
    const query = document.getElementById("searchInput").value.toLowerCase();

    // 1. Determine the source list and target grid
    const sourceList = page === 'index' ? featuredBooks : allBooks;
    const bookGridId = page === 'index' ? "homeBookGrid" : "catalogBookGrid";
    const bookGrid = document.getElementById(bookGridId);

    if (!bookGrid) return; // Safety check

    bookGrid.innerHTML = "";

    // 2. Filter the relevant book list
    const results = sourceList.filter(b =>
        b.title.toLowerCase().includes(query) ||
        b.author.toLowerCase().includes(query)
    );

    // 3. Deactivate all filter chips for a clean search result display
    const categoryContainer = document.querySelector(page === 'index' ? '.home-categories' : '.catalog-categories');
    if (categoryContainer) {
        categoryContainer.querySelectorAll(".category-chip").forEach(chip => chip.classList.remove("active"));
    }

    // 4. Render results or a placeholder message
    if (results.length === 0) {
        let message = `No results found for **"${query}"** in this section.`;
        if (page === 'index') {
            message += ' <a href="catalog.html">Try searching the Full Catalog.</a>';
        }
        bookGrid.innerHTML = `<p class="placeholder-text">${message}</p>`;
        return;
    }

    results.forEach(book => bookGrid.appendChild(createBookCard(book)));
}

// Allows searching by pressing Enter key
function checkEnter(event) {
    if (event.key === 'Enter') {
        searchBooks(getCurrentPage());
    }
}

// === Modals (Unchanged) ===
function showModal(type) {
    document.getElementById(`${type}Modal`).style.display = "block";
}

function hideModal(type) {
    document.getElementById(`${type}Modal`).style.display = "none";
}

// === Initialize (Unchanged) ===
window.onload = () => {
    const page = getCurrentPage();

    if (page === 'index') {
        loadBooks("all", "index");
    } else if (page === 'catalog') {
        loadBooks("all", "catalog");
    }
};