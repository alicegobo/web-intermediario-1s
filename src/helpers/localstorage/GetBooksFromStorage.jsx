import {trocarLivrosLista} from '../../redux/slice/LivrosSlice';

export const GetBooksFromStorage = () => {
  return async(dispatch) => {
    const storedBooks = localStorage.getItem('books');
    if(books){
      let booksObject = JSON.parse(books);
      dispatch(trocarLivrosLista(booksObject));
    }
  }
}