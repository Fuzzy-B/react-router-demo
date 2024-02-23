import { useState } from 'react' 
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AllUsers from './components/AllUsers'
import SingleUser from './components/SingleUser'
import Nav from './components/Nav'

const users = [
  {id:1, name: "priya"},
  {id:2, name: "joe"},
  {id:3, name: "jack"}
]


function App() { 

  return (
    <> 
    <Nav />
    <main> 
       <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/users' element={<AllUsers users={users}/>}/>
          <Route path='/users/:userId' element={<SingleUser users={users}/>} />
       </Routes>
    </main>
    </>
  )
}

export default App
