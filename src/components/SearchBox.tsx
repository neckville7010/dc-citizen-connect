
import React, { useState, useRef } from "react";
import { Search } from "lucide-react";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const focusSearchBox = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto" onClick={focusSearchBox}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-4 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dc-blue shadow-sm text-lg"
            placeholder="Ask a question about your city..."
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dc-gray hover:text-dc-blue"
          >
            <Search size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
