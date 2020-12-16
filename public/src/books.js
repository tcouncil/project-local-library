const findAuthorById = (authors, id) => authors.find(author => author.id === id); // Return author object that matches id

const findBookById = (books, id) => books.find(book => book.id === id); // Return book object that matches id

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter(book => !book.borrows[0].returned);
  const returnedBooks = books.filter(book => book.borrows[0].returned);

  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const returnArr = []; // Declare our empty return array
  for (let borrowed in book.borrows) {
    const accountObj = accounts.find(account => account.id === book.borrows[borrowed].id);
    accountObj.returned = book.borrows[borrowed].returned;
    returnArr.push(accountObj);
  }
  return returnArr.slice(0, 10); // Return our array sliced, limited to the first 10 array elements
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};