import React, { useContext, useState } from 'react'
import {  useParams ,useNavigate } from 'react-router-dom'
import leftArrow from '../images/leftarrow.svg'
import Filter from '../components/Filter.jsx'
import addNote from '../images/addnotes.svg'
import { v4 as uuidv4 } from 'uuid';


import {NotesProvider} from '../NotesContext'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const AddNote = () => {

// console.log(ctitle,cdescription,cnotes_type)
const navigate = useNavigate();
  const uid= uuidv4();
  let currentdate = new Date();
  let newDate = currentdate.getDate() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear()
  let newtime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getMinutes()
  const {id} = useParams()


 const {NotesList,dispatch} =useContext(NotesProvider)
  

const [notebyid] = NotesList.filter((note) => note._id === id)

// INPUT VALUE STRUCTURE
let newid = id === ':id' ? uid : id;
let nt = notebyid?.title === undefined ? "":notebyid.title
let nd = notebyid?.description === undefined ? "":notebyid.description
let nty = notebyid?.notes_type === undefined ? "All":notebyid.notes_type

  const [inputValues,setInputValues]=useState({
    _id:newid,
    title:nt,
    description:nd,
    time:newtime,
    date:newDate,
    notes_type:nty
  })

  // console.log(inputValues)

  // SAVING INPUT VALUES FROM USER FUNCTIONS

  const  titleCHange = (e)=>{
    setInputValues({...inputValues,title:e.target.value})
  }
  const notesChange = (e)=>{
    setInputValues({...inputValues,description:e.target.value})

  }
  const nType = (value)=>{
    setInputValues({...inputValues,notes_type:value})
  }
 
// SAVE AND DELETE NOTE FUNCTIONS

const saveNote = ()=>{
     
  toast.success('Note saved successfully !!!',{
    position:toast.POSITION.TOP_RIGHT
  })

    dispatch({type:'addNotes',payload:inputValues})

    setTimeout(() => {
      navigate('/')
      
    }, 2000);
}

const deleteNote = ()=>{
  toast.error('Note Deleted successfully',{
    position:toast.POSITION.TOP_RIGHT
  })
  dispatch({type:"deleteNotes",payload:id})

  setTimeout(() => {
    navigate('/')
    
  }, 2000);
}

const saveandout = ()=>{
  toast.success('Note saved successfully !!!',{
    position:toast.POSITION.TOP_RIGHT
  })

    dispatch({type:'addNotes',payload:inputValues})

    setTimeout(() => {
      navigate('/')
      
    }, 500);
}



  return (
    <div className='container designcoantiner'>
      <div className="navgationContainer">
       
         <img src={leftArrow} alt="LeftArrow" onClick={saveandout}/>
         
         <p className='text-m text-gl'>Add a crispy Tittle and comprehensive notes for Better Reading</p>
      </div>
      <div className="notesContainer">
        <div className="titleFilter">
          <div className="titleC">
            <p className='textw'>Notes Title</p>
            <input type="text" name="title" id="title" className='title' value={inputValues.title} placeholder="Enter a Title..." onChange={titleCHange}/>
          </div>
          <div className="filterContainer">
            <p className='textw'>Notes Type</p>
         <Filter nType={nType} ccnotes_type={inputValues.notes_type}/>
         </div>
         <div className="imgContainer">
          <img src={addNote} alt="notes" />
         </div>
        </div>
        <div className="textareacontainer">
          <textarea name="notes" id="notes" cols="65" rows="22" value={inputValues.description} placeholder="Enter your Notes Here........" onChange={notesChange}></textarea>
        </div>
      </div>
      <div className="actionContainer">
      <button className='bg-green' onClick={saveNote}>save</button>
      <button className='bg-red' onClick={deleteNote}>delete</button>
      <ToastContainer/>
      </div>
      </div>
      
  )
}

export default AddNote