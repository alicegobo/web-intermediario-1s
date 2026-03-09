import React, { use, useEffect, useState } from 'react'
import { livros } from './mocks/livros'
import './App.css';
import axios from 'axios';

const API_KEY = "AIzaSyB11x5isZ8FO2Czb5TiSs4BeClvgpidNpo";

export default function () {
  const [livrosList, setLivrosList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  async function buscarLivros() {
    try {
      const { data } = await axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: "Stephen King", key: API_KEY } });

      setLivrosList(data.items || []);
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscarLivros();
  }, [])

  if (loading === true) {
    return <h2>Carregando livros...</h2>
  }

  if (erro) {
    return <h2> Sua pesquisa ou código deu erro: {erro} </h2>
  }

  return (
    <div>
      <h1>Livros</h1>
      <div className='listadelivros'>
        {livrosList.map((livro) => (
          <div key={livro.id} className='card'>
            <img src={livro.volumeInfo.imageLinks?.thumbnail} alt={livro.volumeInfo.title}></img>
            <h2>{livro.volumeInfo.title}</h2>
            <p>Autor: {livro.volumeInfo.authors?.join(", ") ?? "Desconhecido"}</p>
            <p>Editora: {livro.volumeInfo.publisher ?? "Não informada"}</p>
            <p>Data: {livro.volumeInfo.publishedDate?.slice(0, 4) ?? "Sem data"}</p>
            <p>Tradutora: {livro.volumeInfo.categories?.join(", ") ?? "Não informado"}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
