import React, { useState } from 'react';

function App() {
  const [dialog, setDialog] = useState(false);
  const [short, setShort] = useState(null);
  const [shortPreview, setShortPreview] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setShort(file);
      setShortPreview(URL.createObjectURL(file));
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <button
        type="button"
        onClick={() => setDialog(true)}
        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow"
      >
        Upload Short Video
      </button>

      {dialog && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setDialog(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-center mb-6">Upload Short</h2>

            {/* Video Upload Section */}
            <div className="mb-6 text-center">
              <label
                htmlFor="short"
                className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Select Video
              </label>
              <input
                type="file"
                id="short"
                accept="video/*"
                className="hidden"
                onChange={handleFileChange}
              />

              {shortPreview && (
                <video
                  controls
                  src={shortPreview}
                  className="mt-4 w-full rounded"
                />
              )}
            </div>

            {/* Thumbnail Upload Section */}
            <div className="text-center">
              <label
                htmlFor="thumbnail"
                className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Select Thumbnail
              </label>
              <input
                type="file"
                id="thumbnail"
                accept="image/*"
                className="hidden"
                onChange={handleThumbnailChange}
              />

              {thumbnailPreview && (
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail Preview"
                  className="mt-4 w-full rounded object-cover max-h-[200px]"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
