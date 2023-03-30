import React from "react";
import { Button } from '@mui/material';
import foto from '../../assets/imgs/el_gato.png'
import './home.css';
import { HiDownload } from "react-icons/hi";

function Home() {
    return (
        <div class="home">
            <img src={foto} alt="foto_perfil" class="foto"/>
            <div>
                <h1>Nome Completo</h1>
                <h2>nickName</h2>
                <Button variant="contained">
                    <HiDownload size={20}/>Curriculo</Button>
            </div>
        </div>
    );
}

export default Home;