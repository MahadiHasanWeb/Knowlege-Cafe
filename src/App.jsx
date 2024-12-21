import Blogs from "./Components/Blogs";
import Bookmarks from "./Components/Bookmarks";
import Header from "./Components/Header";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="md:flex m-4 p-4">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
