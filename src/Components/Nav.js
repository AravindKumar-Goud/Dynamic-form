import {NavLink} from 'react-router-dom'


 const  Nav= () => {
 
    <nav className="">
        <NavLink to="/">Home</NavLink>
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/product'>Product</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        
        
    </nav>
  
}
export default Nav