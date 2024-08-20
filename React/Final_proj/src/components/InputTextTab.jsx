import React from 'react';

function InputTextTab({ value, onAdd, onClear, onAddToList }) {
  const handleChange = (e) => {
    onAdd(e.target.value);
  };

  const handleClear = () => {
    onClear();
  };

  const handleAddToList = () => {
    onAddToList();
  };

  return (
    <div className="flex items-center space-x-4">
      <input type="text" value={value} onChange={handleChange} 
             placeholder="Enter text..." className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>

      <button onClick={handleClear}
        className="px-4 py-2 bg-red-500 text-white rounded-lg focus:outline-none"
        ><h5 class="card-title">Clear</h5>
      </button>

      <button onClick={handleAddToList}
      className="px-4 py-2 bg-green-500 text-white rounded-lg focus:outline-none">
        {value ? 'Update' : 'Add to List'}
      </button>
    </div>
  );
}

export default InputTextTab;
