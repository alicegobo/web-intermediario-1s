import React,{createContext, useState} from 'react';
import { GenerateId } from '../helpers/GenerateId';
import { MockNotes } from '../mockData/MockNotes' ;
import { GenerateDate } from "../helpers/GenerateDate"

const NotesContext = createContext();

const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState([...MockNotes]);

  const [note, setNote] = useState({title: "", description: ""});
  const [isEditing, setEditing] = useState(false);
  const [idEdit, setIdEdit] = useState("");



  const addNote = (title, description) => {
    setNotes([...notes, {id: GenerateId(), title, description, date: GenerateDate()}])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const editnote = (id) => {
    setNotes(notes.map(note => note.id === id ? {...note, id:id , date: GenerateDate()} : note))
  }


  return (<NotesContext.Provider value={{notes, addNote, deleteNote, note, setNote, isEditing, setEditing, idEdit, setIdEdit, editnote}}> {children} </NotesContext.Provider>)

}

export {NotesContext, NoteProvider};