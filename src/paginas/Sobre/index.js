import './index.css'
import foto from './fotoPerfil.jpg'
import esporte from './esporte.jpg'
import redacao from './redacao.jpg'
import jogos from './jogos.jpg'


function Sobre() {
    return (
        <main>
            <header>
                <h1>Sobre</h1>
            </header>
            <section>
                <div className="boxfotoPerfil">
                    <img className="imgfotoPerfil" src={foto} />
                    <p className='meuNome'>Leonardo Ito Salles Felipe</p>
                </div>
                <div className="habilidades">
                    <article>
                        <h2>Esporte</h2>
                        <img className="esporte" src={esporte} />
                        <p className="Descrição">
                            Gosto de praticar esportes, como tenis de mesa, futebol.
                            </p>
                    </article>
                    <article>
                        <h2>Redação</h2>
                        <img className="redacao" src={redacao} />
                        <p className="Descrição">
                            Gosto de criar redações pois me ajuda a aprender e desenvolver a criatividade.
                        </p>
                    </article>
                    <article>
                        <h2>Jogos</h2>
                        <img className="jogos" src={jogos} />
                        <p className="Descrição">
                            Jogo jogos, pois melhora habilidades de cooperação e pensamento estratégico.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Sobre;