const findAccountById = (accounts, id) => accounts.find(account => account.id === id);  // Return the account with matching id

const sortAccountsByLastName = (accounts) => accounts.sort((wordA, wordB) => wordA.name.last.toLowerCase() > wordB.name.last.toLowerCase() ? 1 : -1); // Return accounts sorted by last name

const numberOfBorrows = (account, books) => books.reduce((acc, borrower) => acc + borrower.borrows.filter(borrowed => borrowed.id === account.id).length, 0); // Returns number of borrows that match account id

function booksInPossession(account, books, authors) {
  const returnArr = []; // Declare our empty return array
  for (let book in books) {
    if (books[book].borrows.some(borrowed => borrowed.id === account.id && !borrowed.returned)) { // If id is a match and item is not returned
      const bookObject = books[book];  // bookObject assigned to book that met condition
      bookObject.author = authors.find(author => author.id === bookObject.authorId); // Author is embedded into our bookObject with matching id
      returnArr.push(bookObject);
    }
  }
  return returnArr; 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};