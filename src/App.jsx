import React from "react"
import Primeiro from './components/basicos/Primeiro'
import Comparamentro from './components/basicos/Comparamentro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from './components/layout/Card'
import  './App.css'
import './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
export default _ =>
    <div className="App">
        <h1>Fundamentos react arrow</h1>
        <div className="Cards" >
        <Card titulo="Filhos" color ="#080">
                <Familia/>
            </Card>
            <Card titulo="Desafio Aleatorio" color ="#080">
                <Aleatorio min={1} max={20} />
            </Card>
            <Card titulo="Fragmento" color ="#080">
                <Fragmento />
            </Card>
            <Card titulo="Parametro" color ="#080">
                <Comparamentro titulo="Segundo Componente" subtitulo="muito legal!" />
            </Card>
            <Card titulo="Primeiro" color ="#080">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
