import React, { useRef } from "react";

function App() {

  let [item,setItem] = React.useState([]);
  

  let Ref = useRef();

  const clickHandeler=(event)=>{

    let newItem = Ref.current.value;

    setItem(previous=>{
      return [...previous,newItem];
    })
  
    Ref.current.value = "";
  }

const lineHandeler = (event)=>{
 
  let remove =  event.target.innerHTML;

 setItem(previous =>{
   return previous.filter(element => element !== remove);
 })

}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input ref={Ref} type="text" />
        <button onClick={clickHandeler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map(element=>{
            return <li onClick={lineHandeler} key={Math.random()}>{element}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
