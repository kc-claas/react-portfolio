import { Outlet } from "react-router-dom"
import Header from '../components/header'
import Footer from '../components/footer'

function App() {
  return (
    <>
      <header className="header">
        <Header/>
      </header>
      <main className="main container my-5">
        <Outlet/>
      </main>
      <footer className="footer position-relative bottom-0">
        <Footer/>
      </footer>
    </>
  )
}

export default App
