/// app/books/[id]/page.tsx or app/books/[olid]/page.tsx
import React, { useEffect, useState } from "react";

const BookDetails = ({ params }: { params: { id: string } }) => {
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://openlibrary.org/works/${params.id}.json`
        );
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [params.id]);

  if (loading) return <p>Loading...</p>;
  if (!book) return <p>Book not found</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description ? book.description : "No description available"}</p>
      <p>
        Author:{" "}
        {book.authors
          ? book.authors.map((a: any) => a.name).join(", ")
          : "Unknown"}
      </p>
      <p>Published: {book.publish_date}</p>
      {book.cover_id && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
          alt={book.title}
        />
      )}
    </div>
  );
};

export default BookDetails;
