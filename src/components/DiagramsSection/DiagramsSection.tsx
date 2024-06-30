import "./styles.scss";

import diagrams from "../../../public/assets/json/diagrams.json"

import classDiagram from "../../../Documentation/CLASS_DIAGRAM.png"
import useCaseDiagram from "../../../Documentation/UC.png"
import useCaseDescriptionDiagram from "../../../Documentation/DESC_UC.png"

import entityRelationshipDiagramImage from "../../../Documentation/ER_ICON.png"

const listOfDiagramsImg = [classDiagram, useCaseDiagram, useCaseDescriptionDiagram, entityRelationshipDiagramImage]

const diagramsObject = diagrams[0]

const classDiagramURL = diagramsObject["class-diagram"]
const useCaseDiagramURL = diagramsObject["use-case"]
const ucDescription = diagramsObject["use-case-descritive"]
const entityRelationshipDiagram = diagramsObject["entity-relationship"]

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
                    <a href={classDiagramURL} target="_blank">
                        <div className="img-container">
                            <img src={listOfDiagramsImg[0]} alt="Diagrama de Classe" />
                        </div>
                    </a>
                </div>

                <div className="diagram">
                    <div className="title">
                        <h3>Diagrama de caso de uso</h3>
                    </div>
                    <a href={useCaseDiagramURL} target="_blank" no-referrer >
                        <div className="img-container">
                            <img src={listOfDiagramsImg[1]} alt="Diagrama de caso de uso" />
                        </div>
                    </a>
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

                <div className="diagram">
                    <div className="title">
                        <h3>Entidade relacionamento</h3>
                    </div>
                    <a href={entityRelationshipDiagram} target="_blank" no-referrer >
                        <div className="img-container">
                            <img src={listOfDiagramsImg[3]} alt="Diagrama de entidade e relacionamento" />
                        </div>
                    </a>
                </div>
            </div>
        </section >
    );
};

export default DiagramsSection;
