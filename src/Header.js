import React, {useState, useEffect, useRef} from 'react';
import './css/Header.css';

export default function Header() {

    const [open, setOpen] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
            setOpen(false);
            console.log(menuRef.current);
          }      
        };
    
        document.addEventListener("mousedown", handler);
        
    
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
    
            });
    
        
        return (
            <header id="HeaderL1">
                <a id="logo" href="/">CashApp</a>
                <div className="menuBarBtn" ref={menuRef}>
                    <p>MENU</p>
                    <img src={require("./css/svg/MenuIcon.jpg")} alt="MenuIcon" onClick={()=>{setOpen(!open)}}></img>
                </div>
                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                    <ul>
                        <DropdownItem  text = {"Login"}/>
                        <DropdownItem  text = {"Register"}/>
                        <DropdownItem  text = {"About"}/>
                    </ul>
                </div>
            </header>
            
        );

}


function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <a> {props.text} </a>
      </li>
    );
  }
  

{/* <header id="HeaderL1">
                <a id="logo" href="/">CashApp</a>
                <div className="menuBarBtn">
                    <p>MENU</p>
                    <img src={require("./css/img/MenuIcon.jpg")} alt="MenuIcon"></img>
                </div>
            </header> */}