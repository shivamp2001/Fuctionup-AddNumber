// import logo from './logo.svg';
// import { useEffect, useState } from "react";
import "./App.css";
// import ABC from './Componenents/Abc';
import { useState } from "react";
// import axios from "axios";

function App() {
  const [inputarr, setInputarr] = useState([]);
  const [inputData, setInputdata] = useState({
    name: "",
  });
  const handleChange = (e) => {
    setInputdata({ ...inputData, [e.target.name]: e.target.value });
  };
  const { name } = inputData;
  const halndlevalue = () => {
    setInputarr([...inputarr, { name }]);
    // console.log(inputarr);
    // console.log(inputData);
    setInputdata({ name: "" });
  };

  return (
    <div>
    <div className="App">
      <p style={{fontSize:20}}>Enter Number</p>
      <input
        type="number"
        name="name"
        value={inputData.name}
        onChange={handleChange}
        style={{padding:4}}
      />
      <button onClick={halndlevalue}>Add Number</button>
      </div>
      <div className="table">
      <table border={1} bgcolor="skyblue" width={"25%"} cellPadding={10}>
        <tr>
          <td>Number</td>
        </tr>
        {
          inputarr.map((num)=>{
            return(
              <tr>
                <td>{num.name}</td>
              </tr>
            )
          })
        }
      </table>
      </div>
      </div>
  );
}

export default App;
