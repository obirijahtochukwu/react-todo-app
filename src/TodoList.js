import React, { useState } from 'react'

export default function TodoList({ id, name, isCompleted, removeItem, ind }) {
 const [readMore, setReadMore] = useState(false);
 return (
  <div>
    <div className='item'>
      <span className={isCompleted ? 'ml- over o' : 'ml-2 op'}> 
        <button onClick={()=> setReadMore(!readMore)} className='accordion' >
          <i class={readMore ? 'fa fa-chevron-up' : "fa fa-chevron-down" } aria-hidden="true"></i>
        </button>
        {name}
      </span>
      <span className='fab'>
        <button onClick={()=> ind(id)} disabled={isCompleted === true} className={isCompleted ? "complete completed mr-1" : "mr-1 complete"}>Done</button>
        <button onClick={()=> removeItem(id)} className='fas'>                      
          <i class="fa fa-trash-o text-danger" aria-hidden="true"></i>
        </button>
      </span>
    </div>
    <div className={readMore ? "readmore open" : 'readmore d-none'}>
      <p className={isCompleted && 'over'}>{readMore ? name : 'error'}</p>
    </div>
  </div>
 )
}
