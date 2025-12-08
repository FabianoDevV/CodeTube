import "./cursos.css";
import Request from "../resquest/index";

export default async function Cursos() {
  const response = await Request();

  const html = response
    .map((curso) => {
      const {
        canal,
        categoria,
        descricao,
        nivel,
        nota,
        playlist,
        thumbnail,
        titulo,
      } = curso;

      return `
        <div class="cursoCard">
          <a href="${playlist}" target="_blank">
              <div class="imgCurso">
                <img src="${thumbnail}" alt="${titulo}">
              </div>
              <div class="descriptionCards">
                <h4>${titulo}</h4>
                <span class="authorCurso">${canal}</span>
                <div>
                    <span class="categoria">${categoria}</span>
              
                    <span class="nota">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47-80 47ZM480-481Z"/>
                    </svg>
                    ${nota}
                    </span>
              
                </div>
              </div>
          </a>
        </div>
      `;
    })
    .join("");

  return `
    <div class="titleContainerCurso">
        <h3>Cursos</h3>
    </div>

    <div class="listaCursos">
      ${html}
    </div>
  `;
}
