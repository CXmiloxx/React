import './App.css'
import fondo from './assets/fondo.png'


function Section() {

    return (
        <>
            <main>
                <section>
                    <div className="about-img">
                        <img src={fondo} alt="">
                        </img>
                    </div>
                    <article>
                        <h2>Sobre mi</h2>
                        <p>¡Hola! Soy Camilo, un estudiante en etapa lectiva del SENA con una pasión ardiente por el desarrollo de software. Mi viaje está impulsado por una sed insaciable de conocimiento y una determinación inquebrantable para dominar diversas tecnologías.
                            Con experiencia en Java, C, HTML, CSS, y JavaScript, así como en el uso de Android Studio y NetBeans, he creado aplicaciones móviles y de escritorio que despiertan la imaginación y desafían los límites de la innovación.
                            Fuera del mundo del código, me sumerjo en la riqueza de diferentes culturas a través de la literatura y los viajes, y encuentro inspiración en el mundo del deporte.
                            <br></br>
                            Como estudiante del SENA, estoy listo para abrazar cada nueva experiencia con el entusiasmo de un verdadero buscador de conocimiento y la convicción de un futuro líder en el desarrollo de software.
                            ¡Estoy emocionado por el viaje que está por venir y estoy ansioso por enfrentar nuevos desafíos!
                        </p>              
                            <div className="about-btns">
                                <button>HERE ME</button>
                                <button>DOWNLOAD CV</button>
                            </div>
                        </article>
                            </section>
                            <section>
                                <h2>Services</h2>
                                <p>Desarrollo de aplicaciones móviles y de escritorio.
                                    Diseño de interfaces de usuario.
                                    Experiencia en Java, C, HTML, CSS, JavaScript.
                                    Desarrollo con Android Studio y NetBeans.
                                    Asesoramiento en proyectos de software.
                                    ¡Listo para aportar soluciones innovadoras a tu equipo!</p>
                                <div className="grid-courses">
                                    <div className="grid-course-cont">
                                        <div className="bg-color blue"></div>
                                        <div className="cont ">
                                            <span><i className='bx bx-mobile-alt'></i></span>
                                            <h3>UX Research</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem?</p>
                                        </div>
                                    </div>

                                    <div className="grid-course-cont">
                                        <div className="bg-color yellow" ></div>
                                        <div className="cont ">
                                            <span><i className='bx bx-code-block' ></i></span>
                                            <h3>Web Development</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem?</p>
                                        </div>
                                    </div>
                                    <div className="grid-course-cont">
                                        <div className="bg-color purp"></div>
                                        <div className="cont">
                                            <span><i className='bx bx-code-block' ></i></span>
                                            <h3>App Design</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem?</p>
                                        </div>
                                    </div>
                                    <div className="grid-course-cont">
                                        <div className="bg-color green"></div>
                                        <div className="cont" >
                                            <span><i className='bx bx-code-block' ></i></span>
                                            <h3>Web Design</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, rem?</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                </main>
                    </>
                    )
    }

                    export default Section
