import { useState  } from "react";
import { FaTimes , FaPlus } from "react-icons/fa";
import "./style.css";

function App() {

  const [newItem , setNewItem] = useState("");
  const [items , setItems] = useState([])

  function addItem(){
    
    if(!newItem){
      alert("boş geçme la");
    }

    const item = {
      id: Math.floor(Math.random()*1000),
      value : newItem
    }

    setItems(oldItems => [...oldItems , item])
    setNewItem("");
  }

  function removeItem(id){
    const newArray = items.filter(item =>item.id !==id);
    setItems(newArray)
  }

  return (
    <>
      <div id="toDo">
        <div className="containerTodo">
          <div className="headerTodo">
              <h1>Todo App</h1>
              <input type="text" placeholder="Add a item"
               value={newItem}
               onChange={e => setNewItem(e.target.value)} />
              <button onClick={e => addItem()}><FaPlus className="crossIcon" /></button>
          </div>
          <div className="contentTodo">
           <ul>
            {
              items.map((item) => {
                return (
                  <li  key={item.id}>
                  {item.value}  <span> 
                  <a onClick={() => removeItem(item.id)}><FaTimes /></a> </span> </li>
                )
              })
            }
           </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
