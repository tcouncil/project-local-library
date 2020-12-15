const findAuthorById = (authors, id) => authors.find(e => e.id === id);

const findBookById = (books, id) => books.find(e => e.id === id);

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter(book => !book.borrows[0].returned);
  const returnedBooks = books.filter(book => book.borrows[0].returned);

  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let returnArr = [];
  for(let key in book.borrows){
    const accountObj = accounts.find(element => element.id === book.borrows[key].id );
    accountObj.returned = book.borrows[key].returned;
    returnArr.push(accountObj);
  }
  return returnArr.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
