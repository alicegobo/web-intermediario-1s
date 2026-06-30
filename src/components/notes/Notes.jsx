import React, { useContext } from 'react'
import "./Notes.css"
import { FaRegTrashAlt } from "react-icons/fa";
import { NotesContext } from "../../context/NotesContext"
import { HiOutlinePencilSquare } from "react-icons/hi2";



function Note({ title, description, date, id }) {
    const { deleteNote, setEditing, setNote, setIdEdit } = useContext(NotesContext);
    function SubmitToEdit() {
        setEditing(true);
        setNote({ title, description });
        setIdEdit(id);
    }
    return (
        <div className='noteContainer'>

            <div className='title'>{title}</div>

            <div className='description'>{description}</div>

            <div className='edit' onClick={() => SubmitToEdit()}>
                <HiOutlinePencilSquare fontSize={23} color='yellow' />
            </div>

            <div className='delete' onClick={() => deleteNote(id)}>
                <FaRegTrashAlt fontSize={23} color='red' />
            </div>

            <div className='date'>{date}</div>

        </div>
    )
}

export default Note;
