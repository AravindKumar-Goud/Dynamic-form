import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'

function View() {
    const {viewId}=useParams()
    const navigate=useNavigate()
    const Id=viewId
   
    const [id,setId]=useState([])
    useEffect(()=>{
        axios.get(`http://192.168.4.109:8080/api/contacts/${Id}`)
        .then((res)=>{
            console.log(res)
            setId([res.data])

        })
    },[])
    
    
  return (
    <>
    <button onClick={()=>{navigate(-1)}}>Back</button>
    <h1>user  {Id} </h1>
      <Table striped bordered hove>
        <thead>
          <tr>
          <th>id</th><th>name</th><th>email</th>
          </tr>
        </thead>
        <tbody>
        {id.map((post=><tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.email}</td>
           
            </tr>))}
        </tbody>
      </Table>

       
    </>
  )
}

export default View