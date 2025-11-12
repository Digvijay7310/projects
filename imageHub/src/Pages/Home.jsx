import React, { useState } from 'react';
import imagesData from '../utils/images'; // your images array
import SearchComponent from '../components/Search/SearchComponent';

function Home() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 10;

  // Filter images based on search query
  const filteredImages = imagesData.filter((img) =>
    img.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLast = currentPage * imagesPerPage;
  const indexOfFirst = indexOfLast - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-4">
      
      <SearchComponent search={search} setSearch={setSearch} />

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentImages.map((img) => (
          <div key={img.id} className="border rounded overflow-hidden shadow hover:shadow-lg transition">
            <img src={img.url} alt={img.title} className="w-full h-48 object-cover" />
            <div className="p-2">
              <h3 className="font-bold">{img.title}</h3>
              <p className="text-gray-600 text-sm">{img.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2">{currentPage} / {totalPages}</span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
