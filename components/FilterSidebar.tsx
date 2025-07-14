import React from 'react';
import { Filters } from '../types';
import { XIcon } from './icons';

interface FilterSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  genres: string[];
  languages: string[];
  servers: string[];
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  setFilters,
  genres,
  languages,
  servers,
  onClose,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: name === 'price' ? Number(value) : value }));
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      genre: 'all',
      language: 'all',
      server: 'all',
      price: 100,
    });
  };

  const FilterGroup: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-orange-400 mb-3 border-b border-gray-700 pb-2">{title}</h3>
      {children}
    </div>
  );

  const SelectInput: React.FC<{ name: string, value: string, options: string[] }> = ({ name, value, options }) => (
    <select
      name={name}
      value={value}
      onChange={handleInputChange}
      className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
    >
      <option value="all">All</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );

  return (
    <div className="p-4 h-full flex flex-col rounded-lg lg:rounded-none">
       <div className="flex justify-between items-center lg:hidden mb-4">
        <h2 className="text-xl font-bold text-white">Filters</h2>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-700">
          <XIcon />
        </button>
      </div>

      <div className="flex-grow overflow-y-auto">
        <FilterGroup title="Search">
          <input
            type="text"
            name="search"
            placeholder="Movie title or server..."
            value={filters.search}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
          />
        </FilterGroup>

        <FilterGroup title="Genre">
          <SelectInput name="genre" value={filters.genre} options={genres} />
        </FilterGroup>

        <FilterGroup title="Language">
          <SelectInput name="language" value={filters.language} options={languages} />
        </FilterGroup>

        <FilterGroup title="IPTV Server">
          <SelectInput name="server" value={filters.server} options={servers} />
        </FilterGroup>
        
        <FilterGroup title="Max Price">
          <div className="flex flex-col">
            <input
              type="range"
              name="price"
              min="0"
              max="100"
              value={filters.price}
              onChange={handleInputChange}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <span className="text-center mt-2 text-gray-300">${filters.price.toFixed(2)}</span>
          </div>
        </FilterGroup>
      </div>

      <button
        onClick={resetFilters}
        className="w-full mt-4 py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition-colors duration-300"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;