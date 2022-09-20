import React from 'react'
import { Link } from 'react-router-dom'

const Note = ({note}) => {

const clr = note.notes_type === "Important" ? 'bg-red' : note.notes_type === 'Study' ? 'bg-orange':'bg-green'

const sentence = note.description?.length > 200 ? note.description?.slice(0,200) : note.description


  return (
    <Link to={`/Note/${note._id}`} className='NoteConatainer'>
      <div className="titleContanier">
        <p className='text-m'>{note.title}</p>
        <div className={`type ${clr}`}></div>
      </div>
      <div className="timeContanier">
        <p className='text-gl  text-s'>{note.date}</p>
        <p className='text-gl  text-s'>{note.time}</p>
      </div>
      <div className="description">
        <p className='text-gt text-s'>{sentence} ...</p>
      </div>
    </Link>
  )
}

export default Note