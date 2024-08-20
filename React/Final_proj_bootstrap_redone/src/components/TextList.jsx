import React from 'react';
import { Card, OverlayTrigger, ToolTip } from 'react-bootstrap';

function TextList({ textList, onItemClick, onEditClick }) {
  const sortedList = textList.slice().sort((a, b) => a.localeCompare(b)); // Sort the list alphabetically

  const handleClick = (text) => {
    onItemClick(text);
  };

  const handleEditClick = (text, index) => {
    onEditClick(text, index);
  };

  return (
    <div className="mt-4">
      {sortedList.map((text, index) => (
        


        <Card key={index} className="card mb-2" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <Card.Body className="card-body d-flex justify-content-between align-items-center">
            <div onClick={() => handleClick(text)} style={{ flex: 1, cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {index + 1}. {text}
            </div>
            <div className="btn-group">
              <button onClick={() => handleEditClick(text, index)} className="btn btn-primary mr-2 transition duration-300 ease-in-out">
                <i className="bi bi-pencil"></i>
                Edit
              </button>
              <button onClick={() => handleClick(text)} className="btn btn-danger transition duration-300 ease-in-out">
                <i className="bi bi-trash"></i>
                Delete
              </button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TextList;
