import React from 'react'
import { Link } from 'react-router-dom'
import NodeList from '../components/NotesLists'
const Home = () => {

  return (
    <div className='container main'>
     <NodeList />
     <Link  to="/Note/:id"className="addlist">+</Link>
    </div>
  )
}

export default Home