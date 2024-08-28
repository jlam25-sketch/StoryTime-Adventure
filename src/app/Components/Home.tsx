"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Input from "./Input"; // Assuming you have an Input component
import FilterButtons from "./FilterButtons"; // Import the FilterButtons component
import BookCard from "./BookCard"; // Assuming BookCard component is used for rendering book details

export const Home: React.FC = () => {
  const [books, setBooks] = useState([]); // State to hold the fetched books
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [activeFilter, setActiveFilter] = useState<string>(""); // State to manage the active filter

  useEffect(() => {
    fetchBooks(); // Fetch initial set of books on component mount
  }, []);

  // Fetch books based on a search query or filter
  const fetchBooks = async (searchQuery: string = "", filter: string = "") => {
    try {
      setLoading(true); // Start loading

      // Construct the search URL
      let url = `https://openlibrary.org/search.json?subject=children&language=eng`;
      if (searchQuery) {
        url += `&q=${encodeURIComponent(searchQuery)}`;
      } else if (filter) {
        url += `&q=${encodeURIComponent(filter)}`;
      }

      // Fetch data from Open Library API
      const response = await fetch(url);
      const data = await response.json();

      // Process the API data
      const filteredBooks = data.docs.filter((book) => {
        const excludeKeywords = ["baby", "infant", "newborn", "young children"];
        const descriptionExcludesKeywords = !excludeKeywords.some((keyword) => {
          const combinedText = `${book.description || ""} ${
            book.subject ? book.subject.join(" ") : ""
          }`.toLowerCase();
          return combinedText.includes(keyword);
        });

        const publishedAfter1950 =
          book.first_publish_year && book.first_publish_year >= 1950;

        return descriptionExcludesKeywords && publishedAfter1950;
      });

      setBooks(filteredBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  // Handle filter button click
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    fetchBooks("", filter); // Fetch books with the selected filter
  };

  return (
    <>
      <Header />

      {/* Background image with search input */}
      <motion.div
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div
          className="relative w-full h-[50vh] bg-no-repeat bg-cover bg-center flex justify-center items-center"
          style={{
            backgroundImage: "url('/assets/bg.png')",
          }}
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="text-black text-2xl mb-4">Find Your Book</h2>
            <Input onSearch={(query) => fetchBooks(query)} />{" "}
            {/* Update Input to handle search */}
          </div>
        </div>
      </motion.div>

      {/* Filter buttons */}
      <FilterButtons
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Display loading or books */}
      <div className="container mx-auto mt-5">
        {loading ? (
          <p>Loading...</p> // Loading indicator
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {books.map((book, index) => (
              <BookCard key={index} book={book} /> // Render book cards using BookCard component
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
