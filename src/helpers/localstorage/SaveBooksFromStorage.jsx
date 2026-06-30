import {trocarLivrosLista} from "../../redux/slice/LivrosSlice";

export const SaveBooksFromStorage = (favoriteBooks) => {
  return async(dispatch) => {
    localStorage.setItem('books', JSON.stringify(favoriteBooks));
    dispatch(trocarLivrosLista(favoriteBooks));
  }
}