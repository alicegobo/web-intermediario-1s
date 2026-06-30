import React, {useState, useEffect} from 'react'
import "./FavoritePage.css"
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {SaveBooksFromStorage} from "../../helpers/localstorage/SaveBooksFromStorage";
import Popup from '../../components/popup/Popup';
import Card from '../../components/card/Card';

function FavoritePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.user.isLogged);
    const favoriteList = useSelector(state => state.favoriteBooks.booksList);
    const [isHovering, setIsHovering] = useState(false);
    const [popupMessage, setPopupMessage] = useState({message: '', color: ''});
    const [showPopup, setShowPopup] = useState(false);

    // essa função é usada para mostrar e esconder o popup
    function showAndHidePopup(message, color) {
        setPopupMessage({message, color});
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    }
    // essa função é usada para verificar se o usuário está logado
    useEffect(() => {
        if (!isLogged) {
            navigate('/login');
        }
    }, [isLogged, navigate]);

    function saveBooks(){
        try {
            dispatch(SaveBooksFromStorage(favoriteList));
            showAndHidePopup('Livros salvos com sucesso!', 'green');
        } catch (error) {
            showAndHidePopup('Erro ao salvar livros!', 'red');
        }
    }
  return (
    <div>
        <div className='favorite-page'>
            {favoriteList.map((book) => ( <Card key={book.id} livro={book} /> ))}
        </div>
        <div id="saveFavorite" style={
            isHovering
                ? {fontSize: "1rem",borderRadius:"25px"}
                : {fontSize: "0.8rem",borderRadius:"25px"}
            }
            onMouseEnter={()=>setIsHovering(true)}
            onMouseLeave={()=>setIsHovering(false)}
            className={isHovering ? "animation-button": ""}
            onClick={()=> saveBooks()}
        >
            {isHovering ? "Salvar os favoritos": "+"}
        </div>
        {showPopup?(<Popup message={popupMessage.message} color={popupMessage.color}/>):null}
    </div>
  )
}

export default FavoritePage;