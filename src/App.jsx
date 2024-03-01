import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Car from "./components/Car.jsx"
import Card from "./components/Card.jsx" 
import Button from "./components//Button/Button.jsx"
import Button2 from "./components/Button2.jsx"
import Students from "./components/Students.jsx"
import UserGreeting from "./components/UserGreeting.jsx"


function App() {  // app is the parent component
  return( 
    <>
    <Header />
    <Car />
    <Card />
    <Button />
    <Button2 />
    <Students name="John Doe" age={25} course="React" isStudent={true} />
    <Students/>
    <UserGreeting isLoggedIn={true} />



    <Footer />
    </>
  )
}

export default App
