import React, { useState, useEffect } from "react";
import InputTextTab from "./components/InputTextTab";
import TextList from "./components/TextList";
import Header from "./components/Header";

function App() {
  const [textList, setTextList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTextList = JSON.parse(localStorage.getItem("textList"));
    if (storedTextList) {
      setTextList(storedTextList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("textList", JSON.stringify(textList));
  }, [textList]);

  const handleAdd = (text) => {
    setInputText(text);
  };

  const handleClear = () => {
    setInputText("");
    setEditIndex(null);
  };

  const handleAddToList = () => {
    if (editIndex !== null) {
      const updatedList = [...textList];
      updatedList[editIndex] = inputText;
      setTextList(updatedList);
      setInputText("");
      setEditIndex(null);
    } else {
      setTextList([...textList, inputText]);
      setInputText("");
    }
  };

  const handleItemClick = (text) => {
    setTextList((prevList) => prevList.filter((item) => item !== text));
  };

  const handleEditClick = (text, index) => {
    setInputText(text);
    setEditIndex(index);
  };

  return (
    <div className="bg-blue-200 min-h-screen py-8 px-4">
      <Header />
      <InputTextTab
        value={inputText}
        onAdd={handleAdd}
        onClear={handleClear}
        onAddToList={handleAddToList}
      />
      <TextList
        textList={textList}
        onItemClick={handleItemClick}
        onEditClick={handleEditClick}
      />
    </div>
  );
}

export default App;
