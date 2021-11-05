const {findAuthorById} = require("./books.js")

function findAccountById(accounts, id) {
 let foundAccount = accounts.find((account) => account.id === id)
  return foundAccount
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last < accountB.name.last? -1: 1)
  return accounts
}
function countBorrows(borrows, accountId){
let borrowedBooks = borrows.filter((borrow) => borrow.id === accountId)
return borrowedBooks.length
}
function getTotalNumberOfBorrows(account, books) {
  let total = books.reduce((acc, book) => countBorrows(book.borrows,account.id) + acc, 0)
  return total
}

function booksMatchAccountId(books, account) {
  let checkedOutBooksByAccount = books.filter((book) => book.borrows[0].id === account.id && book.borrows[0].returned === false) 
  return checkedOutBooksByAccount
} 

function getBooksPossessedByAccount(account, books, authors) {
  let booksMatched = booksMatchAccountId(books, account)
  let booksCheckedOutWithAuthorInfo = booksMatched.map((book) => ({...book, author: findAuthorById(authors, book.authorId)}))
  return booksCheckedOutWithAuthorInfo 
 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
