import DisplaySvg from './assets/images/background-pattern-desktop.svg'
import Main from "./components/Main"


const App = () => {
  return (
    <div>
      <img src={DisplaySvg} alt="" width={'100%'}/>
      <Main />
    </div>
  )
}

export default App

