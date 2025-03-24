import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar/sidebar";
import Main from "./main/main";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const handleAddQuestion = (data) => {
    console.log(questions);
    setQuestions([data, ...questions ]);
  }
  return <div className="container">
    <Sidebar questions = { questions }/>
    <Main onAddQuestion = {handleAddQuestion}/>
  </div>;
}

export default App;