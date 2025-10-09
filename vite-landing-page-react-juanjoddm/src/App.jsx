import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Jumbotron from "./Components/Jumbotron"
const App = () => {

    return (
        <div className="">

            <header className="header">
                <Navbar />
            </header>
            <div className="body d-flex flex-column m-5 ">
                <div className="jumbo ">
                    <Jumbotron />
                </div>
                <div className="row cards d-flex flex-row gap-5 me-0 ms-0">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

export default App