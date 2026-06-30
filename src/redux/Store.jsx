import {configureStore} from '@reduxjs/toolkit';
import UserSlice from './slice/UserSlice';
import LivrosSlice from './slice/LivrosSlice';
import BooksSlice from './slice/BooksSlice'

const store = configureStore({
  reducer:{user: UserSlice, livros: LivrosSlice, favoriteBooks: BooksSlice},
})

export default store;
