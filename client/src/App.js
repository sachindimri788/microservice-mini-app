import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className="App">
      <header className="App-header">Blog app</header>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
