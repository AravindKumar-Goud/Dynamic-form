import React,{useState,useEffect} from 'react'
import {useNavigate,useSearchParams} from 'react-router-dom'
import axios from 'axios'
import {Nav,Modal,Button,Table} from 'react-bootstrap'
import ReactPeginate from 'react-paginate'



function GetContact() {
    const [posts,setPosts]=useState([])
    const[Sparams,setSparams]=useSearchParams()
    const navigate=useNavigate()
    const [show, setShow] = useState(false);
    const [model,setModel]=useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
    useEffect(()=>{
        axios.get("http://192.168.4.109:8080/api/contacts")
        .then((res)=>{
            setPosts(res.data)
        })
        

    },[])

    const getData=()=>{
      axios.get("http://192.168.4.109:8080/api/contacts")
        .then((res)=>{
            setPosts(res.data)
        })

    }

    
    const editT=(id)=>{
      navigate(`postandedit/${id}`)

    }
    const viewT=(id)=>{
      navigate(`${id}`)


    }
    const deleteT=(id)=>{
        axios.delete(`http://192.168.4.109:8080/api/contacts/${id}`)
        .then((res)=>{
          console.log(res)
           alert(`delete the contact`)
          getData()
          
          
            
        })
    }
    //pegination 
    const [pageN,setPageN] =useState(0)
    const rows=5;
    const pagesVisited=pageN*rows;

    const displayUsers=posts.slice(pagesVisited,pagesVisited+rows)
    .map((post)=>{
    return (<tr key={post.id}>
      <td>{post.name}</td>
      <td>{post.phone}</td>
      <td>{post.email}</td>
      <td><button className="btn btn-info m-2" onClick={()=>editT(post.id)}>Edit</button>
      <button className="btn btn-success m-2" onClick={()=>viewT(post.id)}>View</button>
      <button onClick={()=>deleteT(post.id)} >Delete</button>
      {/* <Button className="btn btn-info m-2 text-center" variant="primary" onClick={handleShow} > 
  Delete
</Button>

  <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>Do you want to delete</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={()=>{handleClose();deleteT(post.id);}} >
      yes
    </Button>
  </Modal.Footer>
</Modal> */}



      </td>

      </tr>
      
    )}
    )
    const pageCount=Math.ceil(posts.length/rows)

    const changePage=({selected})=>{
      setPageN(selected)

    }



  return (
    <>
 
 
      <button onClick={()=>{navigate(`postandedit`)}}>Create</button>
      <h1>users </h1>
      <div>
      <Table className='mb-5' hover striped bordered hove >
        <thead>
          <tr>
          <th>Name</th><th>Phone</th><th>email</th><th>Actions</th>
          </tr>
        </thead>
         <tbody>
        {/* {posts.map(post=><tr key={post.id}>
            <td>{post.name}</td>
            <td>{post.phone}</td>
            <td>{post.email}</td>
            <td><button className="btn btn-info m-2" onClick={()=>editT(post.id)}>Edit</button>
            <button className="btn btn-info m-2" onClick={()=>viewT(post.id)}>View</button>
            {/* <button onClick={()=>deleteT(post.id)} >Delete</button> */}
            {/* <Button className="btn btn-info m-2 text-center" variant="primary" onClick={handleShow} > 
        Delete
      </Button>
      
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();deleteT(post.id);}} >
            yes
          </Button>
        </Modal.Footer>
      </Modal>
      


            </td>

            </tr>)}   */}{displayUsers}

        </tbody>
      </Table>
      <ReactPeginate
      previousLabel={"previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"peginationB"}
      previousLinkClassName={"previousB"}
      nextLinkClassName={"nextB"}
      disabledClassName={"disabled"}
      activeClassName={"peginstionActive"}

      
      />

      </div>
      

      
    </>
  )
}

export default GetContact