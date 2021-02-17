import { useEffect } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { setBooks } from "../../redux/bookReducer"

const Books = (props) => {
  console.log({ props })
  useEffect(() => {
    axios
      .get("/api/books")
      .then((res) => {
        props.setBooks(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      {props.bookReducer.books.map((e) => (
        <div key={e.book_id}>{e.name}</div>
      ))}
    </div>
  )
}

const mapStateToProps = (store) => {
  return store
  // return {
  //   ...store.bookReducer
  // }
}

export default connect(mapStateToProps, { setBooks })(Books)
