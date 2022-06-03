import React from "react";
import { blog } from "../../data";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="latest"></div>
      <div className="blog-cart">
        {blog.map((b) => (
          <div className="blog-item">
            <img src={b.img} alt="" className="blog-img" />
            <div className="blog-content">
              <h1> {b.name} </h1>
              <p>
                <b>Date</b>: {b.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
