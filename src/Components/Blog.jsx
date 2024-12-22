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
          <div className="mx-4 ">
            <p className="text-xl md:text-2xl">{author}</p>
            <p className="text-base md:text-xl">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-base md:text-xl">{reading_time} min read</div>
          <button>
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="md:text-4xl my-3">{title}</h2>
      <p className="md:flex gap-4 me-10 text-xl md:text-2xl">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <button className="">{hash}</button>
          </span>
        ))}
      </p>
      <button className="text-base md:text-xl my-7 underline text-[#6047EC]">
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
