import "./styles.scss";

import classDiagram from "../../../Documentation/CLASS_DIAGRAM.png"
import useCaseDiagram from "../../../Documentation/UC.png"
import useCaseDescriptionDiagram from "../../../Documentation/DESC_UC.png"

const ucDescription = "https://docs.google.com/document/d/1Gmh9i2IhaXiOpuJ1bOBnNenjRdfxV6jK2sRwNl5dC9Q/edit?usp=sharing"
const ucDiagram = ""


const listOfDiagramsImg = [classDiagram, useCaseDiagram, useCaseDescriptionDiagram]

const DiagramsSection = () => {
    return (
        <section id="diagrams" className="section">
            <div className="title__container">
                <h2>Diagramas UML</h2>
                <div className="subtitle__container">
                    <p>Digramas de caso e uso, descrição de caso e uso, classe.</p>
                </div>
            </div>
            <div className="diagrams__container">



                <div className="diagram">
                    <div className="title">
                        <h3>Diagrama de Classe</h3>
                    </div>
                    <div className="img-container">
                        <img src={listOfDiagramsImg[0]} alt="Diagrama de Classe" />
                    </div>
                </div>

                <div className="diagram">
                    <div className="title">
                        <h3>Diagrama de caso de uso</h3>
                    </div>
                    <div className="img-container">
                        <img src={listOfDiagramsImg[1]} alt="Diagrama de caso de uso" />
                    </div>
                </div>

                <div className="diagram">
                    <div className="title">
                        <h3>Descritivo caso de uso</h3>
                    </div>
                    <a href={ucDescription} target="_blank" no-referrer >
                        <div className="img-container">
                            <img src={listOfDiagramsImg[2]} alt="Descrição do diagrama de caso de uso" />
                        </div>
                    </a>
                </div>



            </div>
        </section >
    );
};

export default DiagramsSection;
