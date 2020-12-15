const totalBooksCount = (books) => books.length;

const totalAccountsCount = (accounts) => accounts.length;

function booksBorrowedCount(books) {
  // should return the total number of books that are currently borrowed
  let num = 0;
  for (let key in books) {
    num += books[key].borrows.filter(element => !element.returned).length;
  }
  return num;
}

function mostCommonGenres(books) {
  // should return an ordered list of most common genres
  // should limit the list to the top five
  const counterArr = [];
  const returnArr = [];
  
  // Add genres to array
  for(let key in books){
    const genre = books[key].genre;
    counterArr.push(genre);    
  }
  
  // Combine genres into a nested array
  const compactArr= [];
  for(let genre in counterArr){
        compactArr.push(counterArr.filter(element => element === counterArr[genre]));
  }
  
  // Create object and push to return array while checking if genre exists in the return array
  const existingGenre = [];
  for(let key in compactArr){
    const obj = {};
    if(!existingGenre.some(element => element === compactArr[key][0])){
      obj.name = compactArr[key][0];
      obj.count = compactArr[key].length;
      
      existingGenre.push(compactArr[key][0]); // Add genre to existing genre list
      returnArr.push(obj);
    }
  }
  
  // Return a sorted and spliced array
  return returnArr.sort((a, b) => a.count > b.count ? -1 : 1).splice(0,5);
}

function mostPopularBooks(books) {
  // should return an ordered list of most popular books
  // should limit the list to the top five
  const returnArr = [];
  
  // Get borrows length for each book and assigns key/value pair accordingly
  for(let key in books){
    const obj = {};
    obj.name = books[key].title;
    obj.count = books[key].borrows.length;
    returnArr.push(obj);    
  }
  
  return returnArr.sort((a, b) => a.count > b.count ? -1 : 1).splice(0,5);
}

function mostPopularAuthors(books, authors) {
  // should return an ordered list of most popular authors
  // should limit the list to the top five
  const returnArr = [];
  
  for(let key in books){
    const obj = {};
    const author = authors.find(e => e.id === books[key].authorId);
    
    obj.name = `${author.name.first} ${author.name.last}`;
    obj.count = books[key].borrows.length;
    returnArr.push(obj);    
  }
  return returnArr.sort((a, b) => a.count > b.count ? -1 : 1).splice(0,5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
