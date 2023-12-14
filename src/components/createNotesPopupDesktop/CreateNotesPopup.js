import React, { useState } from "react";
import "./CreateNotesPopup.css";

const CreateNotesPopup = ({ groupNamesParent, setGroupNamesParent, onClose }) => {
  const colors = ["pink", "skyblue", "cyan", "gray", "purple", "blue"];

  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState(colors[0]);

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleColor = (color) => {
    setBgColor(color);
  };

  const saveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup_title">Create New Group</div>
      <div className="popup_input">
        <span>Group Name</span>
        <input
          value={groupName}
          onChange={handleGroupName}
          type="text"
          placeholder="Enter Group Name..."
        />
      </div>
      <div className="color-options">
        <h2>Choose Colour</h2>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className={`color-option ${
              bgColor === color ? "selected" : ""
            }`}
            onClick={() => handleColor(color)}
          ></div>
        ))}
      </div>
      <div className="popup_close">
        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateNotesPopup;