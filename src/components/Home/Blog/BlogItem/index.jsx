import React from "react";
import Chip from "../../../common/Chip";
import './style.css'

import { Link } from "react-router-dom";
// instead of this i could have just done
// blog : {cover, cate , title ... }
const BlogItems = ({ blog }) => {
  return (
    <div className="blogItems-wrap">
      <img className="blogItems-cover" src={blog?.cover} alt="cover" />
      <Chip label={blog?.category} />
      <h2>{blog.title}</h2>
      <p className="blogitem-desc">{blog?.description}</p>

      <footer>
        <div className="blogitem-author">
          <img src={blog?.authorAvatar} alt="author-Avatar" />
          <h6>{blog?.authorName}</h6>
          <p>{blog?.createdAt}</p>
        </div>
        <Link className="blogItems-link" to={`/blog/${blog?.id}`}>
          ➡️
        </Link>
      </footer>
    </div>
  );
};

export default BlogItems;
