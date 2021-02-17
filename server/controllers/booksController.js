module.exports = {
  getBooks: (req, res) => {
    const db = req.app.get("db")
    db.books
      .get_books()
      .then((books) => res.status(200).send(books))
      .catch((err) => res.status(500).send(err))
  },
}
