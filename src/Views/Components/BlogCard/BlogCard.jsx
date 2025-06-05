import React, { useEffect, useRef, useState } from "react";
import Blog1 from "../../../assets/img/Blogs1.png";
import Button from "../Buttons/Button";
import Blogmeta from "../../Pages/About/Blogs/Blogmeta";
import axios from "axios";

const BlogCard = () => {
  const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;
  const topRef = useRef(null); // Step 1: ref to scroll top

  const fetchingData = async () => {
    try {
      const response = await axios.get("/JSON/Blogs.json");
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setBlog([]);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" }); // Step 2: scroll
    }
  };

  const totalPages = Math.ceil(blog.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blog.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  return (
    <>
      <div ref={topRef}></div> {/* Ref anchor point */}
      {/* Blog Cards */}
      {currentBlogs.map((item, index) => (
        <div className="padding mb-5" key={index}>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-container">
                <img
                  src={item.blogimg}
                  alt={item.blogtitle || "Blog image"}
                  className="img-fluid"
                />
              </div>
              <div className="blog-content">
                <div className="d-flex">
                  <Blogmeta />
                </div>
                <h2 className="blog-title mt-3">{item.blogtitle}</h2>
                <p className="blog-text mt-4">{item.blogtext}</p>
                <div className="mt-4">
                  <Button
                    bgColor="#de0b18"
                    textColor="#fff"
                    text="READ MORE"
                    icon={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {blog.length > blogsPerPage && (
        <div className="col-12">
          <div className="d-flex align-items-center mt-4 mb-5">
            {currentPage > 1 && (
              <button
                className="btn me-2 pagination-button"
                onClick={goToPrevPage}
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
            )}

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  className="btn me-2 pagination-button"
                  onClick={() => handlePageClick(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}

            {currentPage < totalPages && (
              <button className="btn pagination-button" onClick={goToNextPage}>
                <i className="fa-solid fa-angle-right"></i>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
