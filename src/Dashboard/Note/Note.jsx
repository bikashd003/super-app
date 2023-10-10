import React, { useEffect, useState } from "react";

const Note = () => {
  const exitingNotes=localStorage.getItem('notes') || ''
  const [note, setNote] = useState(exitingNotes);
  const notetaking=()=>{
    localStorage.setItem('notes',`${note}`)
  }

useEffect(()=>{
  notetaking();
},[note])

  return (
    <>
      <div className="note">
        <h1>All notes</h1>
        <textarea
          className="note-content"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
    </>
  );
};

export default Note;
