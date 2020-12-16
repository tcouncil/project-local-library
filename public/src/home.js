const totalBooksCount = (books) => books.length;  // return length of books array

const totalAccountsCount = (accounts) => accounts.length; // return length of accounts array

const booksBorrowedCount = (books) => books.reduce((acc, book) => acc + book.borrows.filter(book=> !book.returned).length, 0); // Returns number of borrows that haven't been returned

function mostCommonGenres(books) {
  const returnArr = []; // Declare our empty return array

  // Add genres to array
  let genreArr = books.map(book => book.genre);

  // Compact genres into a nested array
  const compactArr = [];
  for (let genre in genreArr) {
    compactArr.push(genreArr.filter(genreElement => genreElement === genreArr[genre]));
  }

  // Create object and push to return array while checking if genre exists in the return array
  const existingGenre = [];
  for (let key in compactArr) {
    if (!existingGenre.some(genre => genre === compactArr[key][0])) {
      existingGenre.push(compactArr[key][0]); // Add genre to existing genre list
      returnArr.push({ name: compactArr[key][0], count: compactArr[key].length });
    }
  }
  return returnArr.sort((gerneA, genreB) => gerneA.count > genreB.count ? -1 : 1).slice(0, 5); // Return our sorted and sliced array
}

function mostPopularBooks(books) {
  const returnArr = []; // Declare our empty return array

  // Get borrows length for each book and assigns key/value pair accordingly
  for (let book in books) {
    returnArr.push({ name: books[book].title, count: books[book].borrows.length });
  }
  return returnArr.sort((popularA, popularB) => popularA.count > popularB.count ? -1 : 1).slice(0, 5); // Return our sorted and sliced array
}

function mostPopularAuthors(books, authors) {
  const returnArr = []; // Declare our empty return array

  for (let author in authors) {
    const currentAuthor = authors[author];  // Assign the current author we're working with 
    const authorBorrowedCount = books.filter(book => book.authorId === currentAuthor.id).reduce((acc, book) => acc + book.borrows.length, 0); // The amount of times the author's books has been borrowed
    returnArr.push({ name: `${currentAuthor.name.first} ${currentAuthor.name.last}`, count: authorBorrowedCount });
  }
  return returnArr.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1).slice(0, 5);  // Return our sorted and sliced array
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};