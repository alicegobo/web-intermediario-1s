import React, { useEffect } from 'react'
import { NoteProvider } from '../../context/NotesContext'
import AllNotes from '../../components/allNotes/AllNotes'
import "./NotePage.css"
import FormNote from "../../components/formNotes/FormNotes"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function NotePage() {
    const isLogged = useSelector(state => state.user.isLogged);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLogged) {
            navigate("/login");
        }
    }, [isLogged, navigate]);

    
    return ( //dizendo que essa pagina vai usar um dos componentes que esta usando o notecontext
        <NoteProvider>
            <div className='notesPageContainer'>
                <AllNotes></AllNotes>
                <FormNote></FormNote>
            </div>
        </NoteProvider>
    )
}

export default NotePage;