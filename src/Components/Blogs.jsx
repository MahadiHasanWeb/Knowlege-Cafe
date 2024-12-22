import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blog data from JSON file and update the state when the component mounts or updates
  useEffect(() => {
    fetch("Blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h2 className="text-xl md:text-3xl">
        Blogs {blogs.length}
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </h2>
    </div>
  );
};

export default Blogs;
