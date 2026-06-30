import React, { useContext } from 'react'
import { NotesContext } from '../../context/NotesContext';
import './FormNotes.css'


function FormNote() { // componente montando o formulario das notas
    //Agora o FormNote.jsx vai utilizar as funções do contexto pra criar o note, repare
    //que ele agora checa se está editando ou não para poder trocar o texto do botão:
    const { addNote, note, setNote, isEditing, setEditing, idEdit, setIdEdit, editnote } = useContext(NotesContext);

    const SendNote = (e) => {
        e.preventDefault();
        if (isEditing) {
            editnote(idEdit);
        } else {
            addNote(note.title, note.description);
        }
        setEditing(false);
        setIdEdit("");
        setNote({ title: "", description: "" });

    }

    return (
        <aside className="aside-notes">
            <form id="formNote" onSubmit={SendNote}>
                <label htmlFor="titleNote" className="margin-form">
                    {" "}
                    Título
                </label>
                <input
                    type="text"
                    className="margin-form"
                    value={note.title} // muda aq aula 24
                    onChange={(e) =>     // muda aq aula 24
                        setNote({ ...note, title: e.target.value }) // muda aq aula 24
                    }
                    id="titleNote"
                    placeholder="Título"
                />
                <label htmlFor="descriptionNote" className="margin-form">
                    {" "}
                    Descrição
                </label>
                <input
                    type="text"
                    className="margin-form"
                    value={note.description} // muda aq aula 24
                    onChange={(e) =>
                        setNote({ ...note, description: e.target.value }) // muda aq aula 24
                    }
                    id="descriptionNote"
                    placeholder="Descrição"
                />
                <button type="submit" id="buttonForm" className="margin-form" >
                    {isEditing ? "Editar Anotação" : "Adicionar anotação"}
                </button>
            </form>
        </aside>
    );
}
export default FormNote