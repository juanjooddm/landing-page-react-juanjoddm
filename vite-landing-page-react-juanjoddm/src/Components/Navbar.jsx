
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid d-flex">
                <div className=" d-flex align-self-start justify-self-start ms-5">
                    <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                </div>
                <div className=" d-flex" id="navbarNav">
                    <div className="nav-items d-flex align-self-end justify-content-end me-5">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-secondary " href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  active text-secondary" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  text-secondary" aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
