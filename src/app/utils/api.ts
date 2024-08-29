import { Product } from '@types';

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Product Name",
    description: "Product Description",
    price: 99.9,
    currency: "USD",
    image: "https://via.placeholder.com/200",
    rating: 3.5
  },
  {
    id: 2,
    title: "Another Product",
    description: "Another Product Description",
    price: 149.99,
    currency: "USD",
    image: "https://via.placeholder.com/200",
    rating: 2.8
  },
  {
    id: 3,
    title: "Third Product",
    description: "Third Product Description",
    price: 79.99,
    currency: "USD",
    image: "https://via.placeholder.com/200",
    rating: 4.2
  },
  {
    id: 4,
    title: "Fourth Product",
    description: "Fourth Product Description",
    price: 199.99,
    currency: "USD",
    image: "https://via.placeholder.com/200",
    rating: 1.9
  },
  {
    id: 5,
    title: "Fifth Product",
    description: "Fifth Product Description",
    price: 59.99,
    currency: "USD",
    image: "https://via.placeholder.com/200",
    rating: 6.8
  },
  {
    id: 6,
    title: "Sixth Product",
    description: "Sixth Product Description",
    price: 89.99,
    currency: "USD",
    image: "https://via.placeholder.com/200",
    rating: 4.3
  },
  {
    id: 7,
    title: "Seventh Product",
    description: "Seventh Product Description",
    price: 109.99,
    currency: "USD",
    image: "https://via.placeholder.com/200",
    rating: 4.7
  },
  {
    id: 8,
    title: "Eighth Product",
    description: "Eighth Product Description",
    price: 129.99,
    currency: "USD",
    image: "https://via.placeholder.com/200",
    rating: 4.6
  },
  {
    id: 9,
    title: "Ninth Product",
    description: "Ninth Product Description",
    price: 39.99,
    currency: "USD",
    image: "https://via.placeholder.com/200",
    rating: 4.1
  },
  {
    id: 10,
    title: "Tenth Product",
    description: "Tenth Product Description",
    price: 199.99,
    currency: "USD",
    image: "https://via.placeholder.com/200",
    rating: 4.9
  },
  {
    id: 11,
    title: "Eleven Product",
    description: "Eleven Product Description",
    price: 180.75,
    currency: "USD",
    image: "https://via.placeholder.com/200",
    rating: 4.7
  },
  {
    id: 12,
    title: "Twelve Product",
    description: "Twelve Product Description",
    price: 181.85,
    currency: "USD",
    image: "https://via.placeholder.com/200",
    rating: 4.3
  }

];

interface FetchProductsParams {
  page: number;
  limit: number;
  searchTerm?: string;
  sortOption?: string;
}

export const fetchProducts = async (params: FetchProductsParams): Promise<{ products: Product[], totalPages: number }> => {
  const { page, limit, searchTerm = '', sortOption = '' } = params;

  await new Promise(resolve => setTimeout(resolve, 10));

  // Фильтрация по поисковому запросу
  const filteredProducts = mockProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Сортировка
  let sortedProducts = [...filteredProducts];
  if (sortOption === 'price-asc') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-desc') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'rating-asc') {
    sortedProducts.sort((a, b) => a.rating - b.rating);
  } else if (sortOption === 'rating-desc') {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  // Пагинация
  const start = (page - 1) * limit;
  const end = start + limit;
  const products = sortedProducts.slice(start, end);
  const totalPages = Math.ceil(filteredProducts.length / limit);

  return { products, totalPages };
};
