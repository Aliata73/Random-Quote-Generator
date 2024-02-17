import { FaQuoteLeft } from "react-icons/fa";

function GetQuote({quote, randomColor}) {
    


  return (
    <div id="quote-text" className="mb-2  fs-5 fw-medium">
                {quote.map((item) => {
                return (
                  <div  className="d-flex flex-column" style={{color: randomColor}}>
                    <div className="d-inline">
                    <FaQuoteLeft />
                    <span className="ms-2 " id="text" key={item.id}>{item.quote}</span>
                    </div>
                    <span id="author" className="text-end fw-light fs-6 mt-3" key={item.id}>- {item.author}</span>
                  </div>
                )
              })}
          </div>
  )
}

export default GetQuote