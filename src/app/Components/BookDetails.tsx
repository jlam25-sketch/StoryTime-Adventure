"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import Next.js router

const BookDetails: React.FC = () => {
  const router = useRouter();
  const { olid } = router.query; // Get the 'olid' from the URL
  const [bookDetails, setBookDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (!olid) return; // If no 'olid' is present, don't fetch data

      try {
        setLoading(true);
        // Fetch book details using the Open Library API
        const response = await fetch(
          `https://openlibrary.org/books/${olid}.json`
        );
        const data = await response.json();

        setBookDetails(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [olid]);

  if (loading) return <p>Loading...</p>;

  if (!bookDetails) return <p>Book details not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{bookDetails.title}</h1>
      {/* Display book details here */}
      {bookDetails.cover ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${bookDetails.cover}-L.jpg`}
          alt={bookDetails.title}
        />
      ) : (
        <p>No cover available</p>
      )}
      <p>
        Author:{" "}
        {bookDetails.authors?.map((author: any) => author.name).join(", ")}
      </p>
      <p>First Published: {bookDetails.first_publish_year}</p>
      <p>
        {bookDetails.description
          ? bookDetails.description.value
          : "No description available."}
      </p>
    </div>
  );
};

export default BookDetails;
