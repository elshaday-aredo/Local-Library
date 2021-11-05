function getTotalBooksCount(books) {
 return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let checkedOut = books.filter((book) => book.borrows[0].returned === false)
  return checkedOut.length
}

function getMostCommonGenres(books) {
  const countGenres = books.reduce((acc, {genre}) => {
    if(!acc[genre]){acc[genre] = 0}
    acc[genre]++
    return acc
  } , {})
  const sortedGenres = Object.keys(countGenres) 
  sortedGenres.sort((genreA, genreB) => countGenres[genreA] > countGenres[genreB]? -1: 1)
  const topGenres = sortedGenres.map((genre) => ({name: genre, count: countGenres[genre]}))
  return topGenres.slice(0, 5)
}

function getMostPopularBooks(books) {
  return books
    .map((book) => ({name: book.title, count: book.borrows.length}))
    .sort((bookA,bookB) => bookA.count > bookB.count? -1: 1)
    .slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const countAuthors = books.reduce((acc, {authorId,borrows}) => {
    if(!acc[authorId]){acc[authorId] = 0}
    acc[authorId] += borrows.length 
    return acc
  }, {})
 
  const authorsNameandCount = authors.map((author) => ({name: author.name.first + " " + author.name.last, count: countAuthors[author.id]}))
  
  authorsNameandCount.sort((authorA, authorB) => authorA["count"] >= authorB["count"]? -1: 1)

  return authorsNameandCount.splice(0,5)
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
