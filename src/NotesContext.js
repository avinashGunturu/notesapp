import React, { createContext, useEffect, useReducer, useState } from 'react'


export const NotesProvider = createContext();

const getInitialProducts = () => {
    const savedNotesListRaw = localStorage.getItem('NotestList');
  
    try {
      const Notes = savedNotesListRaw ? JSON.parse(savedNotesListRaw) : [];
      return Notes;
    } catch (err) {
      return [];
    }
  };

const reducer = (NotesList,action) => {
    if(action.type === 'addNotes'){
        NotesList = [...NotesList,action.payload]
         NotesList = [...new Map(NotesList.map(item =>
            [item["_id"], item])).values()];
        return [...NotesList];
    }else if(action.type === 'deleteNotes'){
         NotesList = NotesList.filter((item)=> item._id!==action.payload)
        return [...NotesList]
    }else {
        return [...NotesList]
    }

}


const NotesContext = ({children}) => {

    const[NotesList,dispatch]=useReducer(reducer,getInitialProducts())

    const[searchValue,setSearchvalue]=useState("")
    const[noteTypeValue,setnoteTypeValue]=useState("All")


   useEffect(()=>{
    localStorage.setItem("NotestList",JSON.stringify(NotesList))
   },[NotesList])

  return (
    <NotesProvider.Provider value={{NotesList,dispatch,searchValue,setSearchvalue,noteTypeValue,setnoteTypeValue}}>
   {
    children
   }
    </NotesProvider.Provider>
  )
}

export default NotesContext