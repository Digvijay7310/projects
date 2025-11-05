import React, { useState, useEffect } from "react";

const allTitles = [
  "boy playing football",
  "boy singing",
  "boy dancing",
  "girl dancing",
  "beautiful sunset",
  "nature video",
  "city view",
];

const SearchWithDebounce = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // 🕒 Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() === "") {
        setSuggestions([]);
        return;
      }
      const filtered = allTitles.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // top 5 suggestions
    }, 400); // 400ms delay

    return () => clearTimeout(handler); // cleanup
  }, [query]);

  return (
    <div className="flex justify-center items-center h-screen" style={{fontFamily: "Poppins" }}>
      <input
        type="text"
        value={query}
        placeholder="Search videos..."
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "2px solid #1e90ff",
          maxWidth: "800px"
        }}
      />

      {/* Suggestion box */}
      {suggestions.length > 0 && (
        <div
          style={{
            background: "white",
            border: "1px solid #ccc",
            borderTop: "none",
            borderRadius: "0 0 8px 8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          {suggestions.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
              onClick={() => {
                setQuery(s);
                setSuggestions([]);
              }}
            >
              🔍 {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchWithDebounce;


