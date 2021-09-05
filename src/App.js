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
  // eslint-disable-next-line
  const [isCompleted, setIsCompleted] = useState(false);
  const [items, setItems] = useState(getLocalStorage());
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const item = {id: new Date().getTime().toString(), name, isCompleted};
      setItems([...items, item])
      setName('')
    }
  };

  const removeItem = (id) =>{
    setItems(items.filter((item)=> item.id !== id));
  }

  const ind = (id, isCompleted) =>{
    const done = items.map((item)=>{
      item.id === id && (item.isCompleted = !item.isCompleted)
      return item
    })
    setItems(done);
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <React.Fragment>
      <div className="container">
        <i class="fa fa-ban" aria-hidden="true"></i>
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <div className="todo">
              <h1>todo</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input id='name' name='name' type="text" value={name} onChange={(e)=> setName(e.target.value)} className='w-100 input'/>
                <button type='submit'>➕</button>
            </form>
            <div className="bg-white pt-2">
              <div className="m-2">
                {items.map((item)=>{
                  const {id, name, isCompleted} = item;
                  return (
                    <div key={id}>
                      <div className='item'>
                        <span className={isCompleted ? 'ml- over o' : 'ml-2 op'}>{name}</span>
                        <span>
                          <button onClick={()=> ind(id)} disabled={isCompleted === true} className={isCompleted ? "complete completed mr-1" : "mr-1 complete"}>Done</button>
                          <button onClick={()=> removeItem(id)} className='fa'>                      
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                          </button>
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
                <p className='m-0 footer'>
                  <span className="badge">{items.length} duties </span>
                  <span className="right" onClick={()=> setItems([])}>{items.length > 0 ? 'clear all' : null}</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
