import React from "react"
import './Header.css'
import { OutlinedInput, Button} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

function Header(){
    return(
      <>   
      <nav className="navbar">
        <div className="left-component">
        <h3>dribble</h3>
        <ul >
          <li className="menu-icon"><MenuIcon/></li>
          <li><a href="#">Inspiration</a></li>
          <li><a href="#">Find Work</a></li>
          <li><a  href="#">Learn Design</a></li>
          <li><a href="#">Go Pro</a></li>
          <li><a href="#">Hire Designers</a></li>
        </ul>
        </div>
        <div className="right-component">
          <div><OutlinedInput/></div>
          <div> <AccountCircleIcon style = {{fontSize:"50px"}}/></div>
          <div><Button variant="contained" style = {{fontSize: "20px"}}>Upload</Button></div>
         
        </div>
      </nav>
       <hr></hr>
      </>


    )

}

export default Header;