import {createSlice} from '@reduxjs/toolkit';

const LivrosSlice = createSlice({
  name: 'livros',
  initialState: {
    livros: [],
    quantidadeTotal: 0,
  },
  reducers: {
    substituirLivros: (state, action) => {
      state.quantidadeTotal = action.payload.quantidadeTotal;
      state.livros = action.payload.livros;
    },
    adicionarLivro: (state, action) => {
      const newLivro = action.payload;
      const existingLivro = state.livros.find(livro => livro.mal_id === newLivro.mal_id);
      if (!existingLivro) {
        state.livros.push(newLivro);
        state.quantidadeTotal += 1;
      }
    },
    removerLivro: (state, action) => {
      const id = action.payload;
      const existingLivro = state.livros.find(livro => livro.mal_id === id);
      if (existingLivro) {
        state.livros = state.livros.filter(livro => livro.mal_id !== id);
        state.quantidadeTotal -= 1;
      }
    },
    trocarLivrosLista: (state, action) => {
      const livrosList = action.payload;
      state.livros = livrosList;
    }

  }
});

export const { adicionarLivro, removerLivro, trocarLivrosLista, substituirLivros } = LivrosSlice.actions;
export default LivrosSlice.reducer;

