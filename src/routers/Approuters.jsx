import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from '../components/Home'
import Resdeatels from '../components/Resdeatels'


export default function Approuters() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                  
                    <Route path='/resDeatels:id' element={<Resdeatels/>}/>
                </Route>
            </Routes>
        </Router>
    </div>
  )
}
