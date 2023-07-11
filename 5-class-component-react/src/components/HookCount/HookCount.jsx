import { Component } from "react";

class HookCount extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(json => console.log(json));
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(json => console.log(json));
    document.title = `Clicked ${this.state.count} times`;
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <div>Hook UseEffect</div>
        <button onClick={() => this.increment()}>
          Increment - {this.state.count}
        </button>
      </div>
    );
  }
}

export default HookCount;
