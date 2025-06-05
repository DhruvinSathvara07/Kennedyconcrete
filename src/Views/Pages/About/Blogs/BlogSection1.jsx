import React from "react";
import Blog1 from "../../../../assets/img/Blogs1.png";
import Button from "../../../Components/Buttons/Button";
import Blogmeta from "./Blogmeta";
import BlogCard from "../../../Components/BlogCard/BlogCard";
const BlogSection1 = () => {
  return (
    <>
      <section>
        <div className="container-fluid d-flex justify-content-center blogs-main-container">
          <div className="container">
            <div className="row d-flex">
              <div className="col-xxl-8 col-lg-7">
                <BlogCard />
              </div>
              {/* <div className="col-xxl-4 col-lg-5">
                <div className="slidebar-area">
                  <form>
                    <label htmlFor="search" className="search-label">
                      Search
                    </label>
                    <div className="d-flex mt-3">
                      <input type="text" className="inputarea" />
                      <button>Search</button>
                    </div>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection1;
