import HeadingSection from "../../components/HeadingSection";



const blogsArr = [
    {
      id: 1,
      image: "/images/blogs/blog1.png",
      category: "Technology",
      title: "How AI is Shaping the Future of Web Development",
      description:
        "Discover how artificial intelligence is transforming the way we build and design websites.",
      authorImage: "/images/authors/author1.png",
      authorName: "John Doe",
      authorRole: "Tech Blogger",
    },
    {
      id: 2,
      image: "/images/blogs/blog2.png",
      category: "Design",
      title: "10 Tips for Creating Stunning UI/UX Designs",
      description:
        "Learn the secrets to designing user interfaces that captivate and convert users.",
      authorImage: "/images/authors/author2.png",
      authorName: "Jane Smith",
      authorRole: "UX Designer",
    },
    {
      id: 3,
      image: "/images/blogs/blog3.png",
      category: "Development",
      title: "Understanding JavaScript Closures in Depth",
      description:
        "A comprehensive guide to one of the most powerful concepts in JavaScript.",
      authorImage: "/images/authors/author3.png",
      authorName: "Mark Johnson",
      authorRole: "Frontend Developer",
    },
    {
      id: 4,
      image: "/images/blogs/blog4.png",
      category: "Business",
      title: "Why Digital Transformation is Essential for Success",
      description:
        "Explore how businesses can thrive by adopting digital transformation strategies.",
      authorImage: "/images/authors/author4.png",
      authorName: "Emily Carter",
      authorRole: "Business Analyst",
    },
  ];

const blogs = () => {
  return (
    <div className="bg-white">
         <div className="max-w-screen-2xl container bg-white mx-auto py-20 px-5 ">
            <HeadingSection subheading="Our Blogs" heading="Latest Articles And Insigts" description=""/>


            {/* Blogs Content */}

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {
            blogsArr.map((blog) =>(
              <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                  <img src={blog.image} alt={blog.title} className="h-48 object-cover w-full hover:scale-110 transform transition" />

                  <div className="p-5">
                    <p className="text-blue-500 font-medium mt-2 uppercase text-sm">{blog.category}</p>
                    <h3 className="text-gray-800 text-xl  mt-5 font-bold">{blog.title}</h3>
                    <p className="mt-2 text-gray-500  text-sm">{blog.description}</p>


                    <div className="mt-5 flex items-center space-x-6">
                      <img src={blog.authorImage}  alt=""  className="size-10 rounded-full  "/>

                      <div>
                        <p className="text-gray-900 text-sm font-bold ">{blog.authorName}</p>
                        <p className="text-gray-600 text-xs">{blog.authorRole}</p>
                      </div>
                    </div>
                  </div>
              </div>
            ))
          }
         </div>
         </div>


         
    </div>
  )
}

export default blogs