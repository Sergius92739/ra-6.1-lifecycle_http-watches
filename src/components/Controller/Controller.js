import AddForm from "../AddForm/AddForm";
import { useState } from "react";
import WatchList from "../WatchList/WatchList";


export default function Controller() {
  const [list, setList] = useState([]);

  const addWatch = (watch) => {
    setList((prevList) => [...prevList, watch]);
  }

  const onDelete = (id) => {
    setList(list.filter((el) => el.id !== id))
  }
  
  return (
    <div className="app">
      <AddForm addWatch={addWatch} />
      <WatchList list={list} onDelete={onDelete} />
    </div>
  )
}