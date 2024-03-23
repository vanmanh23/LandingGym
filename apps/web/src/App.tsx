import Header from "./components/Header"
import IntroCustom from "./components/IntroCustom"
import Introduction from "./components/Introduction"
import Schedule from "./components/Schedule"

function App() {
  const background = "https://bridge153.qodeinteractive.com/wp-content/uploads/2018/02/background-large.jpg"
  return (
    <div style={{ backgroundImage: `url(${background})` }}>    
    <div><Header /></div>
    <div className="w-full relative -top-44">
      <Introduction />
    </div>
    <div>
      <IntroCustom />
    </div>
    <div>
      <Schedule /> 
    </div>
    </div>
  )
}

export default App
