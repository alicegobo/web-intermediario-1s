import React, { useContext } from 'react'
import { NotesContext } from "../../context/NotesContext"
import Note from '../notes/Notes';
import './AllNotes.css'

function AllNotes() {
    const { notes } = useContext(NotesContext);
    return (
        <div className='AllNotes'>
            {notes.map((n) => (
                <Note key={n.id}{...n}/>
            ))}
        </div>
    )
}

export default AllNotes

