import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
  };
  add = () => {
    // console.log("add");
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    // console.log("minus");
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };
  // componentDidMount: component가 처음 render될 때 호출됨
  componentDidMount() {
    console.log("component rendered");
  }
  // componentDidUpdate: component가 업데이트될 때 호출됨
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }

  // 3.2 React Component에서 사용하는 유일한 함수는 render함수.
  render() {
    console.log("I am rendering");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
