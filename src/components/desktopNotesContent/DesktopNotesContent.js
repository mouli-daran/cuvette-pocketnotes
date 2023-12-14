import React from "react";
import "./DesktopNotesContent.css";

const DesktopNotesContent = ({ note }) => {
  
  return (
    <div className="desktop_notes">
      <div className="desktop_notes_content">
        <div className="desktop_datetime">{note.date}</div>
        <div className="desktop_datetime">{note.time}</div>
      </div>
      <div className="desktop_notes_area">
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default DesktopNotesContent;
