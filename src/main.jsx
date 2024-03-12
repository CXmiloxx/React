import React from 'react'
import ReactDOM from 'react-dom/client';
import './App.css'
import Nav from './Nav.jsx'
import Header from './Header.jsx'
import Section from './Section.jsx'
import ScriptLoader from './scriptLoader.jsx';


const handleScriptLoad = () => {
  // Esta función se ejecutará cuando los scripts se hayan cargado
  // Puedes agregar aquí tu lógica adicional si es necesario
  console.log('Scripts cargados');
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Header/>
    <Section/>
    {/* Carga de scripts */}
    <ScriptLoader src="src/dark.js" onLoad={handleScriptLoad}/>
    <ScriptLoader src="src/menu.js" onLoad={handleScriptLoad}/>
  </React.StrictMode>,
);