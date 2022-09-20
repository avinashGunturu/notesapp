import React, { useContext, useEffect, useState } from 'react'
import Note from './Note'
import {NotesProvider} from '../NotesContext'
import Nonotes from './Nonotes'

const NotesLists = () => {
  const {NotesList,noteTypeValue,searchValue} = useContext(NotesProvider)


const [newNoteList,setNweNotelist] = useState(NotesList)
 
useEffect(()=>{
    
  if(noteTypeValue==="All" && searchValue===" "){
    setNweNotelist([...newNoteList]);
  }else{

    // NotesList.filter((item)=> item.title.includes(searchValue) && item.note_type === noteTypeValue)
      
    setNweNotelist([...NotesList.filter((item)=>  ( (item.title.includes(searchValue))  )
    )])

  }

},[NotesList,noteTypeValue,searchValue])



  return (
    <div className='NotesList '>
  
  {newNoteList.length > 0 ? newNoteList?.map((note)=> <Note key={note._id}  note={note}/>) : <Nonotes/>}
  
    </div>
  )



}

export default NotesLists