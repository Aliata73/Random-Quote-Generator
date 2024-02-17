import { BsTwitterX } from "react-icons/bs";
import { useState, useEffect } from "react"
import GetQuote from "../pages/GetQuote";


const QUOTE_URL = process.env.REACT_APP_QUOTE_URL
const QUOTE_API = process.env.REACT_APP_QUOTE_API

function QuotePage() {

  const [quote, setQuote] = useState([])

  const [randomColor, setRandomColor] = useState('#000000');

  const getQuote = async() =>{
    const response = await fetch(QUOTE_URL, {
      headers: {'X-Api-Key': QUOTE_API}
    })
    const data = await response.json()

    setQuote(data);
  }
  useEffect(() =>{
    getQuote()
  }, [])
 
  const handleClick =(e) => {
    e.preventDefault()
    getQuote()
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setTimeout(() => {
      setRandomColor(color);
    }, 1000) 
  }
  const URL = `https://twitter.com/intent/post?hashtags=quotes&text=${quote.map((item) => item.quote)}`
  document.body.style.backgroundColor = randomColor;
  return (
    <div id="wrapper" className='container d-flex align-items-center justify-content-center bg-white p-0 m-0 rounded w-auto' >
      
      <div id="quote-box" className='d-flex p-5 flex-column text-center
        border rounded shadow mx-auto'>
          <GetQuote quote={quote} key={quote.id} randomColor= {randomColor}/>
          <div className="d-flex justify-content-between mt-3">
              <a id="tweet-quote" target="_blank" rel="noreferrer" href={URL} title="Tweet this quote!" className="border p-2 shadow rounded text-white" style={{backgroundColor:randomColor}}>
              <BsTwitterX  />
              </a>
              <button onClick={handleClick} id="new-quote" className="btn shadow text-white" style={{backgroundColor: randomColor}}>New quote</button>
          </div>
      </div>
    </div>
  )
}

export default QuotePage