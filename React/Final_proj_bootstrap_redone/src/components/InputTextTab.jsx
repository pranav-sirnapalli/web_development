
import React, { useRef } from 'react';

function InputTextTab({ value, onAdd, onClear, onAddToList }) {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/[^a-zA-Z ]/g, ''); // Only allow letters and spaces
    onAdd(newValue);
    //onAdd(e.target.value);
    adjustInputSize();
  };

  const handleClear = () => {
    onClear();
    adjustInputSize();
  };

  const handleAddToList = () => {
    onAddToList();
    adjustInputSize();
  };

  const adjustInputSize = () => {
    if (inputRef.current) {
      inputRef.current.style.width = 'auto';
      inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
    }
  };

  return (
    <div className="input-group mb-3 justify-content-center">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        className="form-control"
        placeholder="Enter text..."
        style={{ minWidth: '200px', maxWidth: '400px' }}
      />

      <div className="input-group-append">
        <button onClick={handleClear} className="btn btn-outline-danger transition-opacity duration-300 ease-in-out" type="button">
          <i className="bi bi-x"></i> Clear
        </button>
        <button onClick={handleAddToList} className="btn btn-outline-success transition-opacity duration-300 ease-in-out" type="button">
          {value ? 'Update' : 'Add to List'}<i className="bi bi-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default InputTextTab;
