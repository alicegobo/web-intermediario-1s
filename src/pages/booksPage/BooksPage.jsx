import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Popup from '../../components/popup/Popup';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';

const API_KEY = "AIzaSyCH0D4rUF74wVm-6nEi4SdmrmvMBj_U2iE";
const TERMOS_ALEATORIOS = ["romance", "ficção científica", "aventura", "mistério", "fantasia", "filosofia", "thriller"];
import "./BooksPage.css"

export default function BooksPage() {
  const [livrosList, setLivrosList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState("");


  useEffect(() => {
    const termoAleatorio = TERMOS_ALEATORIOS[Math.floor(Math.random() * TERMOS_ALEATORIOS.length)];
    buscarLivros(termoAleatorio);
  }, []);



  async function buscarLivros(termo) {
    if (!termo.trim()){
      termo = "Sara Gusela"
    }

    try {
      const { data } = await axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: termo, key: API_KEY } });

      setLivrosList(data.items || []);
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  }


  function QuandoApertoEnter(apertei) {
    if (apertei.key === "Enter") {
      buscarLivros(busca);
    }
  }

  return (
    <div className='books-page'>
      <h1>Livros</h1>

      <div className="barra-busca">
        <Input
          label="Pesquisar livros"
          placeholder="Ex: Harry Potter, Percy Jackson..."
          value={busca}
          onChange={(aperteiOenter) => setBusca(aperteiOenter.target.value)}
          onKeyDown={QuandoApertoEnter}
        />

        <button onClick={() => buscarLivros(busca)}>Buscar</button>

      </div>

      <div className='listadelivros'>
        {livrosList.length > 0 ? < Popup message="Sucesso!" duration={3000} onClose={() => console.log('Fechou')} /> : null}

        {livrosList.map((livro) => (
          <Card key={livro.id} livro={livro}></Card>
        ))}
      </div>
    </div>
  )
}
