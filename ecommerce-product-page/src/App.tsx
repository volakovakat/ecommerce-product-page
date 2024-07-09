import { useState } from 'react'
import './App.css'
import {Product} from "./components/Product";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Product/>
          <div className="attribution">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
              Coded by <a href="https://www.linkedin.com/in/katerinavolakova/" target="_blank">Kateřina N. Voláková</a>.
          </div>
      </>
  )
}

export default App
