import React from 'react';

interface Props {
  sortOption: string;
  onSortChange: (option: string) => void; // Ожидаем строку как параметр
}

const SortOptions: React.FC<Props> = ({ sortOption, onSortChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value); // Передаем значение строки
  };

  return (
    <div className="mb-4">
      <select
        value={sortOption}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      >
        <option value="">Sort by...</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-asc">Rating: Low to High</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
