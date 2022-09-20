import React, { useContext } from 'react'
import search from '../images/searchimg.svg'
import {NotesProvider} from '../NotesContext'


const Search = () => {

const {searchValue,setSearchvalue} = useContext(NotesProvider)


const changeListHandler = (e)=>{
  setSearchvalue(e.target.value)
}


  return (
    <div>
        <div className="searchContainer">
            <input type="text" placeholder='Search for Note' value={searchValue} onChange={changeListHandler}/>
            <img src={search} alt="Search logo" />
        </div>
    </div>
  )
}

export default Search