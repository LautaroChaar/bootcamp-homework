import { Component } from "react";

class HookState extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isActive: false, name: "Freddy" };
  }

  add() {
    this.setState({ count: this.state.count + 1 });
  }

  isOnline(value) {
    this.setState({ isActive: value });
  }

  render() {
    return (
      <div>
        <p>Hook UseState</p>
        <button onClick={() => this.add()}>Count - {this.state.count}</button>
        <button onClick={() => this.isOnline(!this.state.isActive)}>
          IsActive - {this.state.isActive ? "True" : "False"}
        </button>
        {this.state.isActive ? <p>{this.state.name}</p> : null}
      </div>
    );
  }
}

export default HookState;
