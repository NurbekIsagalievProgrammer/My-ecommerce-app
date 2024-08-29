import React, { useState } from 'react';

interface Props {
  onSearch: (query: string) => void;
  onSort: (criteria: string) => void;
}

const Filters: React.FC<Props> = ({ onSearch, onSort }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('price');

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          onSearch(e.target.value);
        }}
        className="p-2 border rounded"
      />
      <select
        value={sortCriteria}
        onChange={(e) => {
          setSortCriteria(e.target.value);
          onSort(e.target.value);
        }}
        className="p-2 border rounded"
      >
        <option value="price">Sort by price</option>
        <option value="rating">Sort by rating</option>
      </select>
    </div>
  );
};

export default Filters;
