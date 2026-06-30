import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../../redux/slice/BooksSlice';
import "./Card.css";

export default function Card({ livro }) {
  const dispatch = useDispatch();

  // verifica se este livro já está na lista de favoritos
  const isFavorite = useSelector(state =>
    state.favoriteBooks.booksList.some(book => book.id === livro.id)
  );

  // adiciona ou remove o livro dos favoritos
  function toggleFavorite() {
    if (isFavorite) {
      dispatch(removeBook(livro.id));
    } else {
      dispatch(addBook(livro));
    }
  }

  return (
    <div className='card'>
      <button
        type="button"
        className={`fav-btn ${isFavorite ? 'is-favorite' : ''}`}
        onClick={toggleFavorite}
        aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        {isFavorite ? '♥' : '♡'}
      </button>
      <img src={livro.volumeInfo.imageLinks?.thumbnail} alt={livro.volumeInfo.title}></img>
      <h2>{livro.volumeInfo.title}</h2>
      <p>Autor: {livro.volumeInfo.authors?.join(", ") ?? "Desconhecido"} </p>
      <p>Editora: {livro.volumeInfo.publisher ?? "Não informada"} </p>
      <p>Gênero: {livro.volumeInfo.categories?.join(", ") ?? "Não informado"}</p>
      <p>Data: {livro.volumeInfo.publishedDate?.slice(0, 4) ?? "Sem data"} </p>
    </div>

  )
}