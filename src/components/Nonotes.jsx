import React from 'react'
import know from '../images/knowledge.svg'
const Nonotes = () => {
  return (
    <div className='nonotescontainer'>
    <img src={know} alt="addingNotesimage" />
        <p>No Notes Found  Add your First Note Here...</p>
    </div>
  )
}

export default Nonotes