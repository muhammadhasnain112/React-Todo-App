import { useState } from "react";
import './index.css'
import trash from './img/trash.png'
import trash_can from './img/trash-can.png'
function App() {
  const [value, updateValue] = useState('')
  const [arr, uparr] = useState([])
  function change(e) {
    updateValue(e.target.value)
  }
  function show() {
    updateValue('')
    uparr([...arr, value])
  }
  function dlt(e) {
    uparr(arr.filter((i) =>
      i !== e))
  }

  function capitalize(input) {
    let value = input.target.value.toLowerCase();
    input.target.value = value.replace(/\b\w/g, char => char.toUpperCase());


  }
  return (
    <>
      <main>
        <h1 className="text-center">TO DO LIST</h1>
        <section className="container">
          <input type="text" onChange={change} value={value} onInput={capitalize} /> <a className="mt-5" onClick={() => { show() }}>+</a>
          <img src={trash_can} className="all-dlt" onClick={() => {
            uparr([])
          }} />
          <ul>
            {arr.map((elem, index) => (
              <li>{elem}
                <img src={trash} className="trash-img" id={index} onClick={() => { dlt(elem) }} /><hr />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <p className="p">Design By Hasnain Aijaz</p>
    </>
  )


}


export default App
