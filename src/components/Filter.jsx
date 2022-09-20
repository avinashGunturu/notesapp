import React, { useState } from 'react'
import downarrow from '../images/downarrow.svg'












const Filter = ({nType,ccnotes_type}) => {


  const [click,setClick]=useState(false);
  const [NoteType,setNoteType]=useState(ccnotes_type)


const setNoteTypeClick =(e)=>{
    setClick(!click);
    setNoteType(e.target.innerText)
    nType(e.target.innerText)
}


  return (
    <div>
      <div className="filterconataner flex">

        
        {NoteType === 'All' ? <p>{NoteType}</p> : NoteType === 'Important' ? <p className='text-red'>{NoteType}</p> : NoteType === "Study" ?  <p className='text-orange'>{NoteType}</p>: <p className='text-green'>{NoteType}</p> }

      
        <img src={downarrow} alt="downArrow"  className={`${click ? "active" : ""}`} onClick={()=> setClick(!click)}/>
      </div>

      {
        click ? <div className="filterContents">
          <p onClick={setNoteTypeClick} className='px'>All</p>
        <p className='text-red' onClick={setNoteTypeClick}>Important</p>
        <p className='text-orange' onClick={setNoteTypeClick}>Study</p>
        <p className='noborder text-green py' onClick={setNoteTypeClick}>Need to Study</p>
      </div> : ""
      }
    </div>
  )
}

export default Filter