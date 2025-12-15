import { Link } from "react-router-dom";
const blogs = [
  {
    id: 1,
    image: "/blogs/Neet - 4.png",
    tag: "Exam Tips",
    title: "Decoding the Latest Exam Pattern",
    author: "Dr. Ramesh Kumar",
    date: "Dec 5, 2025",
    readTime: "8 min read",
  },
  {
    id: 2,
  image: '/blogs/Neet - 5.png',
  tag: 'Motivation',
  title: 'How to Stay Motivated During Tough Study Sessions',
  author: 'Ms. Priya Sharma',
  date: 'Dec 3, 2025',
  readTime: '6 min read',
  },
     {
    id: 3,
  image: '/blogs/Neet - 6.png',
  tag: 'Study Hacks',
  title: 'Revision Made Easy with Time Management',
  author: 'Mr. Vikram Singh',
  date: 'Dec 1, 2025',
  readTime: '7 min read',

  },

];
export default function HomeBlogPreview() {
  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest <span className="text-[#f6821c]">Blogs</span>
        </h2>

        {/* Blog Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((blog) => (
            <Link
              to={`/blog/${blog.id}`}
              key={blog.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition p-4"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-40 w-full object-cover rounded-lg"
              />

              <div className="mt-4">
                <p className="text-sm text-[#f6821c] font-semibold">{blog.tag}</p>

                <h3 className="text-lg font-semibold mt-1 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {blog.date} • {blog.readTime}
                </p>

                <p className="text-[#f6821c] mt-3 font-medium">
                  Read More →
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            to="/blogs"
            className="px-6 py-3 bg-[#f6821c] text-white rounded-lg font-semibold hover:bg-[#d96f14] transition"
          >
            View All Blogs
          </Link>
        </div>

      </div>
    </section>
  );
}
