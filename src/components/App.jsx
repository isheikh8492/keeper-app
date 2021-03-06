import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList, setNoteList] = React.useState([]);

  function addtoList(inputNote) {
    setNoteList((prevList) => {
      return [...prevList, inputNote];
    })
  }

  function deleteItem(id) {
    setNoteList((prevList) => {
      return prevList.filter((note, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addtoList}/>
      <ul>
        {
            noteList.map((note, index) => (
              <li><Note key={index} id={index} title={note.title} content={note.content} onChecked={deleteItem}/></li>
            )
          )
        }
      </ul>
      <Footer />
    </div>
  );
}

export default App;
