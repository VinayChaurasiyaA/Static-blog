import React from "react";
import { useState } from "react";
import Blog from "../../components/Home/Blog";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import EmptyList from "../../components/common/EmptyList";
import { blogList } from "../../config/data";

const Home = () => {
  const [blog, setBlog] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");
  // handleSeachKey
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filter = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlog(filter);
  };
  //
  const handleClearSearch = () => {
    setBlog(blogList);
    setSearchKey("");
  };
  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* blogListing */}
      {!blog.length ? <EmptyList /> : <Blog blogs={blogList} />}
      {/* And empty List */}
    </div>
  );
};

export default Home;
