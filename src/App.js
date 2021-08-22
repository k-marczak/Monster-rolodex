import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.components";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <>
        <CardList monsters={this.state.monsters} />
      </>
    );
  }
}

export default App;
