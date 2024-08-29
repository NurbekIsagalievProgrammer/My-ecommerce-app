import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
}

interface ProductsState {
  items: Product[];
  searchQuery: string;
  sortBy: 'price' | 'rating';
}

const initialState: ProductsState = {
  items: [],
  searchQuery: '',
  sortBy: 'price',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action: PayloadAction<'price' | 'rating'>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setProducts, setSearchQuery, setSortBy } = productsSlice.actions;
export default productsSlice.reducer;
