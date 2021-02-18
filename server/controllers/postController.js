module.exports = {
  getPosts: (req, res) => {
    const db = req.app.get("db")
    db.posts
      .get_posts()
      .then((posts) => res.status(200).send(posts))
      .catch((err) => res.status(500).send(err))
  },
  getPost: async (req, res) => {},
  addPost: async (req, res) => {
    try {
      const db = req.app.get("db")
      const { post_title, post_content } = req.body
      const { user_id } = req.session.user
      await db.posts.create_post(user_id, post_title, post_content)
      const posts = await db.posts.get_posts()
      res.status(200).send(posts)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  editPost: async (req, res) => {},
  deletePost: async (req, res) => {},
}
