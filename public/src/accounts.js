const findAccountById = (accounts, id) => accounts.find(element => element.id === id);

const sortAccountsByLastName = (accounts) => accounts.sort((wordA, wordB) => wordA.name.last.toLowerCase() > wordB.name.last.toLowerCase() ? 1 : -1);

function numberOfBorrows(account, books) {
  let num = 0;
  for (let key in books) {
    num += books[key].borrows.filter(element => element.id === account.id).length;
  }
  return num;
}

function booksInPossession(account, books, authors) {
  const returnArr = [];
  for (let key in books) {
    if(books[key].borrows.some(element => element.id === account.id && !element.returned)){
      const bookObject = books[key];
      bookObject.author = authors.find(element => element.id === bookObject.authorId);
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
