"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import CustomerCardList from "@components/CustomerCardList";

const CustomerPage = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/customer");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.firstname) ||
        regex.test(item.lastname) ||
        regex.test(item.email)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    
      <section className='feed'>
        <form className='relative w-full flex-center'>
          <input
            type='text'
            placeholder='Search for a tag or a username'
            value={searchText}
            onChange={handleSearchChange}
            required
            className='search_input peer '
          />
        </form>

        {/* All Prompts */}
        {searchText ? (
          <CustomerCardList
            data={searchedResults}
            handleTagClick={handleTagClick}
          />
        ) : (
          <CustomerCardList data={allPosts} handleTagClick={handleTagClick} />
        )}
      </section>
   
  );
};

export default CustomerPage;
