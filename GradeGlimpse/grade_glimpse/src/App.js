import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [grade, setGrade] = useState('');
  const [course, setCourse] = useState('');
  const [type, setType] = useState('Performance');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { grade, course, type}

    setIsPending(true)

    fetch('http://localhost:3000', {
      method : 'POST',
      headers: { "Content-Type": "applications/json " },
      body: JSON.stringify(formData)
    }).then(() => {
      console.log("Grade Added")
      setIsPending(false)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>Grade: </label>
          <input
            type = "number"
            required
            placeholder = "100"
            value = {grade}
            onChange={(e) => setGrade(e.target.value)}
          />
          <br></br>
          <label>Course: </label>
          <input
            type = "text"
            required
            placeholder = "Science"
            value = {course}
            onChange={(e) => setCourse(e.target.value)}
          ></input>
          <br></br>
          <label>Assignment Type</label>
          <select
            value = {type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Performance">Performance</option>
            <option value="Summative">Summative</option>
          </select>
          <br></br>
          {!isPending && <button>Add Grade</button> }
          {isPending && <button>Addding Grade...</button> }
        </form>
        <p> {grade} </p>
        <p> {course} </p>
        <p> {type} </p>
      </header>
    </div>
  );
}

export default App;
