import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const getLocalStorage = () => {
  let items = localStorage.getItem('items');
  if (items) {
    return (items = JSON.parse(localStorage.getItem('items')));
  } else {
    return [];
  }
};

export default function App() {

  const [name, setName] = useState('');
  const [items, setItems] = useState(getLocalStorage());
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const item = {id: new Date().getTime().toString(), name};
      setItems([...items, item])
      setName('')
    }
  };

  const removeItem = (id) =>{
    setItems(items.filter((item)=> item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-11 col-md-6 mx-auto">
            <div className="todo">
              <h1>todo</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input id='name' name='name' type="text" value={name} onChange={(e)=> setName(e.target.value)} className='w-100 input'/>
                <button type='submit'>➕</button>
            </form>
            <div className="m-0">
              {items.map((item)=>{
                const {id, name} = item;
                return (
                  <div key={id}>
                    <div className='m-0 item'>
                      <span>
                        <span className="checkbox">
                          <input type="checkbox"/>
                        </span>
                        <span className='ml-2'>{name}</span>
                      </span>
                      <button onClick={()=> removeItem(id)}>❌</button>
                    </div>
                  </div>
                )
              })}
              <p className='m-0 footer'>
                <span className="badge">{items.length} duties </span>
                <span className="right" onClick={()=> setItems([])}>{items.length === 0 ? 'clear completed' : 'clear all'}</span></p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
