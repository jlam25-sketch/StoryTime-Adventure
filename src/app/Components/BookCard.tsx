import React from "react";

interface Book {
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="border p-4 rounded-lg shadow bg-purple-200">
      <div className="flex flex-col items-center">
        {/* Book Cover */}
        <img
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "/assets/Placeholder_book.svg" // Placeholder image if cover is not available
          }
          alt={book.title}
          className="mb-4 w-full h-auto rounded"
        />
        {/* Book Title */}
        <h3 className="text-lg font-bold">{book.title}</h3>
        {/* Book Author */}
        {book.author_name && (
          <p className="text-sm">By: {book.author_name.join(", ")}</p>
        )}
        {/* First Publish Year */}
        {book.first_publish_year && (
          <p className="text-sm">First published: {book.first_publish_year}</p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
