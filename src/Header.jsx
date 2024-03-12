import './App.css'
import fondo from './assets/fondo.png'

function Header() {

  return (
    <>
    <header>
        <div className="header__info">
            <div className="info">
                <div className="info__childs">
                    <p className="hello">HELLO</p>
                    <h1>Soy Camilo</h1>
                    <p className="descripcion">Freelance web Designer & <br></br> Mobile UI/UX Designer</p>
                    <button>HERE ME</button>
                </div>
            </div>
        </div>
        <div className="y-container"></div>
        <img className="foto" src={fondo} alt="empresario">

        </img>
    </header>
    </>
  )
}

export default Header
