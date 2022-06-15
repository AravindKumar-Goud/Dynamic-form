import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Form,Card} from 'react-bootstrap'

function PostName() {
    const postname=useParams()
    
    const [name,setName]=useState('')
    const [email,setmail]=useState("")
    const [phone,setphone]=useState("")
    const navigate=useNavigate()

    let Id=(parseInt(postname.id))
    useEffect(()=>{
        axios.get(`http://192.168.4.109:8080/api/contacts/${Id}`)
        .then((res)=>{
            setName(res.data.name)
            setmail(res.data.email)
            setphone(res.data.phone)
        })
        

    },[Id])
   
    let action
   
    if(postname.id!==undefined){
         action="edit";
       
        //  axios.get(`http://192.168.4.109:8080/api/contacts/${Id}`)
        // .then((res)=>{
        //     setName(res.data.name)
        //     setmail(res.data.email)
        //     setphone(res.data.phone)
            

        // })
    
    }
    const postData=(e)=>{
        e.preventDefault();
        
        axios.post("http://192.168.4.109:8080/api/contacts",{
            name,email,phone
        })
        .then((res)=>{
            navigate(-1)
            console.log(res)}
        ).catch((e)=>{
            if(e.response.data.error?.email){
                alert(`${e.response.data.error?.email}`)
            }
            else if (e.response.data.error?.phone){
                alert(`${e.response.data.error?.phone}`)
            }
           
            console.log(e)})
    }
    const edit=(e)=>{
        e.preventDefault();
        console.log({name,email,phone})
        axios.put(`http://192.168.4.109:8080/api/contacts/${Id}`,{
            
            name,email,phone
        })
        .then((res)=>{

            navigate(-1)
            console.log(res)}

        ).catch((e)=>{
            console.log(e)})

    }
    
    




  return (
    <>
        <br></br>
        <button onClick={()=>navigate(-1)}>Back</button>
        <br></br>
        {/* <Form onSubmit={action?edit:postData}>
        <input required className="form-contro" type="text" value={undefined?"":name} placeholder='Enter the name' onChange={(e)=>setName(e.target.value)}/><br></br>
        <input required className="form-contro" type="text" value={undefined?"":email} placeholder="enter the mail" onChange={(e)=>setmail(e.target.value)}/><br></br>
        <input required className="form-contro" type="text" value={undefined?"":phone} placeholder="enter phone number" onChange={(e)=>setphone(e.target.value)}/><br></br>
        <button type='submit'>{action?"edit":"post"}</button>
       
    </Form> */}
    <div >

    <Card className="m-3 p-3 shadow-lg p-3 mb-5 bg-white rounded"   style={{ width: '18rem' }}>
    <Form onSubmit={action?edit:postData}>
    <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control value={name} required onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail1">
    <Form.Label>Email address</Form.Label>
    <Form.Control required  value={email} onChange={(e)=>setmail(e.target.value)} type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword2">
    <Form.Label>Phone number</Form.Label>
    <Form.Control required value={phone} onChange={(e)=>setphone(e.target.value)} type="text" placeholder="Enter phone" />
  </Form.Group>
  <button type='submit'>{action?"edit":"post"}</button>
</Form>
  
</Card>
</div>
    </>
  )
}

export default PostName