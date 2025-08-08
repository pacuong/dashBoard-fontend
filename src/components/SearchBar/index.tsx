import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex items-center">
      <div className="absolute inset-y-0 pl-3 flex items-center cursor-pointer p-5">
        <Search className="h-5 w-5 text-gray-100" />
      </div>
      <input
        type="text"
        placeholder="Search here..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="block w-full pl-14 pr-3 py-4 rounded-lg text-base text-gray-100 bg-white-55 focus:outline-none focus:ring-0 focus:border-0 border-0"
      />
    </div>
  );
};

export default SearchBar;
