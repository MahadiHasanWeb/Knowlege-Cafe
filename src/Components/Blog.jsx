import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog }) => {
  console.log(blog);
  const {
    author,
    author_img,
    cover_img,
    posted_date,
    reading_time,
    title,
    // id,
    hashtags,
  } = blog;
  return (
    <div className="my-8 pb-6">
      <img src={cover_img} alt="" className="object-cover mb-5" />
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
          <img
            src={author_img}
            alt="Author Image"
            className="rounded-full w-12 h-12"
          />
          <div className="mx-4">
            <p className="">{author}</p>
            <p className="text-xl">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-xl">{reading_time} min read</div>
          <button>
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl my-3">{title}</h2>
      {hashtags.map((hash, idx) => (
        <span className="me-3" key={idx}>
          <a href="">{hash}</a>
        </span>
      ))}
      <button className="text-xl my-7 underline text-[#6047EC]">
        Mark as read
      </button>
      <hr />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};
export default Blog;
