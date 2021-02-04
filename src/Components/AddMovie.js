import { Component } from "react"

class AddMovie extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      director: "",
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleDirector = (e) => {
    this.setState({
      director: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={(e) => this.handleName(e)} />
        <input
          value={this.state.director}
          onChange={(e) => this.handleDirector(e)}
        />
        <button
          onClick={() =>
            this.props.addMovie({
              name: this.state.name,
              director: this.state.director,
            })
          }
        >
          Add Movie
        </button>
      </div>
    )
  }
}

export default AddMovie
