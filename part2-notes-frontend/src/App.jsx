import Note from "./components/Note";
import { useState } from "react";

const App = ({ notes }) => {
  const [notesList, setNotesList] = useState(notes);
  const [newNote, setNewNote] = useState("");

  const processSubmission = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notesList.length + 1,
    };
    setNotesList(notesList.concat(noteObject));
    setNewNote("");
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesList.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={processSubmission}>
        <input value={newNote} onChange={handleChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
