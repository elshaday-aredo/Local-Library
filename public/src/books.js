function findAuthorById(authors, id) {
  foundAuthor = authors.find((author) => author.id === id)
  return foundAuthor
}

function findBookById(books, id) {
  foundBook = books.find((book) => book.id === id)
  return foundBook
}

function checkedOutBooks(books){
  checkedOut = books.filter((book) => book.borrows[0].returned === false)
  return checkedOut
}
function returnedBooks(books){
  booksReturned = books.filter((book) => book.borrows[0].returned === true)
  return booksReturned
}

function partitionBooksByBorrowedStatus(books) {

  let checkedOutAndReturnedbooks = [checkedOutBooks(books), returnedBooks(books)]
  return checkedOutAndReturnedbooks
}

function getBorrowersForBook(book, accounts) {
  const borrowersId = book.borrows.map((borrow) => borrow.id)
  const accountsThatMatch = accounts.filter((account) => borrowersId.includes(account.id)).slice(0,10)
  const updatedAccounts = accountsThatMatch.map((account, i) => ({...account,...book.borrows[i]}))
  return updatedAccounts
}  

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
