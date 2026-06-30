import { createSlice } from "@reduxjs/toolkit";

const BooksSlice = createSlice({
    name: 'favoriteBooks',
    initialState: {
        booksList: [],
        quantidadeTotal: 0,
    },
    reducers: {
        // essa ação é usada para adicionar um livro à lista de livros
        addBook(state, action) {
            const newBook = action.payload;
            const existingBook = state.booksList.find(book => book.id === newBook.id);
            if (!existingBook) {
                state.booksList.push(newBook);
                state.quantidadeTotal += 1;
            }
        },
        // essa ação é usada para remover um livro da lista de livros
        removeBook(state, action) {
            const id = action.payload;
            const existingBook = state.booksList.some(book => book.id === id);
            if (existingBook) {
                state.booksList = state.booksList.filter(book => book.id !== id);
                state.quantidadeTotal -= 1;
            }
        },
        // essa ação é usada para atualizar a lista de livros no estado global
        trocarLivrosLista(state, action) {
            const booksList = action.payload;
            state.booksList = booksList;
        }
    }
})

export const { addBook, removeBook, trocarLivrosLista } = BooksSlice.actions;
export default BooksSlice.reducer;