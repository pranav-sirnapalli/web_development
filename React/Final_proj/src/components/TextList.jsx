import React from 'react';

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
        <div key={index} className="flex items-center justify-between cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-100">
          <div onClick={() => handleClick(text)}>
            {index + 1}. {text}
          </div>
          <div className="flex">
            <button onClick={() => handleEditClick(text, index)} className="mr-2 px-2 py-1 bg-blue-500 text-white rounded-lg focus:outline-none">
              Edit
            </button>
            <button onClick={() => handleClick(text)} className="px-2 py-1 bg-red-500 text-white rounded-lg focus:outline-none">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TextList;
