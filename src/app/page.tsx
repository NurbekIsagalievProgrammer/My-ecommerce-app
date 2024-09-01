"use client";

import React, { useState, useEffect } from 'react';
import { Product } from '@types';
import { fetchProducts } from './utils/api';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import SortOptions from './components/SortOptions';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import CartSummary from './components/CartSummary';

const ITEMS_PER_PAGE = 10;

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts({ page: currentPage, limit: ITEMS_PER_PAGE, searchTerm, sortOption });
      setProducts(data.products);
      setTotalPages(data.totalPages);
    };

    loadProducts();
  }, [currentPage, searchTerm, sortOption]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  return (
    <Provider store={store}>
      <Head>
        <title>Product List</title>
        <meta name="description" content="List of products available for sale" />
      </Head>
      <div className="container mx-auto px-4 py-6">
        <CartSummary />
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <SortOptions sortOption={sortOption} onSortChange={handleSortChange} />
        <ProductList products={products} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </Provider>
  );
};

export default Page;
