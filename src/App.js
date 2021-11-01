import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  componentDidMount() {
    // timeout은 react것이 아니라 JS꺼임.
    // 6초 후에 발생.
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  // 3.2 React Component에서 사용하는 유일한 함수는 render함수.
  render() {
    // 3.3 ES6 문법
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}
// 처음에 우리가 render를 하면 호출되는 life cycle method는 뭘까?-->componentDidMount

export default App;
