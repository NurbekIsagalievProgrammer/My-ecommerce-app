import React, { ChangeEvent } from 'react';

interface Props {
  searchTerm: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search products..."
        className="w-full px-4 py-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
