import React, { useState } from 'react';
import './MobilePopup.css';

const colors = [
  '#FF3366',
  '#FF9900',
  '#FFFF66',
  '#66FF66',
  '#66CCFF',
  '#CC66FF',
];
const MobilePopup = ({ onClose, groupNamesParent, setGroupNamesParent }) => {
  const [groupName, setGroupName] = useState('');
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
      'groupNames',
      JSON.stringify([...groupNamesParent, newGroup])
    );
    onClose();
  };

  return (
    <div className="mobile_popup">
      <div className="mobile_popup_title">Create New Group</div>
      <div className="mobile_popup_input">
        <span>Group Name</span>
        <input
          value={groupName}
          onChange={handleGroupName}
          type="text"
          placeholder="Enter Group Name..."
        />
      </div>
      <div className="mobile_color_options">
        <h2>Choose Colour</h2>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className={`mobile_color_option ${
              bgColor === color ? "selected" : ""
            }`}
            onClick={() => handleColor(color)}
          ></div>
        ))}
      </div>
      <div className="mobile_popup_close">
        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>
      </div>
    </div>
  );
}

export default MobilePopup;