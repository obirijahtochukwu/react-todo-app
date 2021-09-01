import React, {useState} from 'react';
import links from './data';

export default function NavBar() {
 const [isSidebar, setIsSidebar] = useState(false);
 const openNav = () =>{
  setIsSidebar(!isSidebar);
 }
 return (
  <div className="oga">
   <ul className={isSidebar ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>
   
    <button onClick={openNav}>➕</button>
    {links.map((link, index)=>{
     const {url, text} = link;
     return (
      <div className='sidenav'>
       <a key={index} href={url}>
       <h2>{text}</h2>
      </a>
      </div>
     )
    })}
  </ul>
  </div>
 )
}
