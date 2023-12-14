import React from "react";
import "./MobileNotesContent.css";

const MobileNotesContent = ({ note }) => {
  return (
    <div className="mobile_notes_content">
       <div className="mobile_notesarea">
        <p>{note.content}</p>
      </div>
      <div className="mobile_notes_details">
        <div className="mobile_datetime">{note.date}</div>
        <div className="mobile_datetime">{note.time}</div>
      </div>
     
    </div>
  );
}

export default MobileNotesContent;
