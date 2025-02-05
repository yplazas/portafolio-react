import CardContent from "./CardContent"
import PortadaSvg from "./PortadaSvg"
import RedSocial from "./RedSocial";




export default function HomeContenido() {


    return (
        <section className="home__contenido">
            <CardContent>
                <div className="contenido__inicio-portada">
                    <PortadaSvg />
                    <div className="contenido__inicio-imagen-perfil">
                        <img src="img/me.jpeg" alt="imagen de perfil" />
                    </div>
                </div>

                <div className="contenido__inicio-info">
                    <h1>Ing. Yeison Plazas</h1>
                    <p>
                        Ingeniero de Sistemas | Desarrollador Web | GIT | HTML | CSS |
                        Javascript / Typescript | Node JS | React
                    </p>
                    <RedSocial />
                </div>
            </CardContent>
            <CardContent>
                <h2>SOBRE MI</h2>
                <p>
                    Me considero una persona persistente, responsable, colaborativa
                    y organizada, comprometida a dar siempre el 100% de mi esfuerzo
                    para alcanzar los mejores resultados en cualquier labor que
                    desempeñe.
                </p>
                <br />
                <p>
                    Actualmente, estoy concentrado en ampliar mis habilidades en el
                    ámbito de la programación, especialmente en el desarrollo web.
                    Me encuentro aprendiendo HTML, CSS, JavaScript, Typescript,
                    Node.js, React y Git, junto con otras tecnologías pertinentes. Este
                    enfoque tiene como objetivo complementar y enriquecer mi perfil
                    profesional, permitiéndome estar preparado para desafíos más
                    amplios y contribuir de manera más integral en proyectos
                    futuros.
                </p>
            </CardContent>
        </section>
    )
}
