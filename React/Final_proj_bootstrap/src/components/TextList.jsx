
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function TextList({ textList, onItemClick, onEditClick, setInputText }) {
  const sortedList = textList.slice().sort((a, b) => a.localeCompare(b));
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleClick = (text) => {
    onItemClick(text);
  };

  const handleEditClick = (text, index) => {
    setEditIndex(index);
    setShowConfirmation(true);
  };

  const handleConfirmation = (confirmed) => {
    setShowConfirmation(false);
    if (confirmed) {
      setInputText(sortedList[editIndex]);
    }
    setEditIndex(null);
  };

  return (
    <div className="mt-4">
      {sortedList.map((text, index) => (
        <Card
          key={index}
          className="card mb-2"
          style={{ maxWidth: '400px', margin: '0 auto' }}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Card.Body className="card-body d-flex justify-content-between align-items-center">
            <div
              onClick={() => handleClick(text)}
              style={{
                flex: 1,
                cursor: 'pointer',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {index + 1}. {hoveredItem === index ? text : text.slice(0, 50)}
            </div>
            <div className="btn-group">
              <button
                onClick={() => handleEditClick(text, index)}
                className="btn btn-primary mr-2 transition duration-300 ease-in-out"
              >
                Edit
              </button>
              <button
                onClick={() => handleClick(text)}
                className="btn btn-danger transition duration-300 ease-in-out"
              >
                Delete
              </button>
            </div>
          </Card.Body>
        </Card>
      ))}
      {showConfirmation && (
        <ConfirmationPopup
          onConfirm={() => handleConfirmation(true)}
          onCancel={() => handleConfirmation(false)}
        />
      )}
    </div>
  );
}

function ConfirmationPopup({ onConfirm, onCancel }) {
  return (
    <div className="confirmation-popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
      <p className="mb-2">Are you sure you want to edit?</p>
      <Button variant="primary" onClick={onConfirm} className="mr-2">
        Yes
      </Button>
      <Button variant="danger" onClick={onCancel}>
        No
      </Button>
    </div>
  );
}

export default TextList;
