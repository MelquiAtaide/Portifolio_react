import React from "react";
import './navBar.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "../../screens/home";

function NavBar() {
    return (
        <Router>
             <header>
                <nav>
                    <ul>
                        <li><Link class="link" to="/">Home</Link></li>
                        <li>Sobre</li>
                        <li>Noções</li>
                        <li>Portfólio</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </header>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
       
    );
}

export default NavBar;