import logo from './logo.svg';
import {Routes,Route,NavLink} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GetContact from './Components/GetContact';
import PostName from './Components/PostName';
import View from './Components/View'
import {Card,Button,Nav,} from 'react-bootstrap'
import {useState} from 'react'

function App() {
  // const [home, setHome]=useState(false)
  // const [post, setpost]=useState(false)

  // const a=()=>{
  //   setHome(true)
  //   setpost(false)
  //   console.log(home)
  //   console.log(post)
  // }
  // const b=()=>{
  //   setHome(false)
  //   setpost(true)
  //   console.log(post)

  // }

  // const c=()=>{

  // }
 
  
  return (
    
    <div className="App">
   
    <Nav className="" variant="pills" ActiveKey="/">
      <Nav.Item  >
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="postandedit" eventKey="link-1">Add user</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
   
    
 
  

      <Routes>
      
      <Route path='/' element={<GetContact></GetContact>}/>
      <Route path=':viewId' element={<View/>}/>
      <Route path='postandedit' element={<PostName/>}> </Route>
      <Route path="postandedit/:id" element={<PostName/>}></Route>
      
      

      </Routes>
       
      
     
    </div>
   
  );
}

export default App;
