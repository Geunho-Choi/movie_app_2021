import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  getMovies = async () => {
    // axios : 땅콩 주위의 초콜릿.
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  // 4.0 axios.get이 완료되기까지 시간이 조금 필요하기 때문에 await을 넣어줌.
  // await과 async는 함께 쓰임.
  componentDidMount() {
    this.getMovies();
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
