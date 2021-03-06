import React, {useState} from "react";

function CreateArea(props) {

  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  })

  function handleOnChange(event) {
    const {name, value} = event.target;

    setInputNote((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(inputNote);
    setInputNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  
  return (
    <div>
      <form>
        <input onChange={handleOnChange} name="title" placeholder="Title" value={inputNote.title}/>
        <textarea onChange={handleOnChange} name="content" placeholder="Take a note..." rows="3" value={inputNote.content}/>
        <button 
          onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
