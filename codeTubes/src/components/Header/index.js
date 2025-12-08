import "./header.css";

export default function Header() {
  return `
    <span class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
        <path d="M791-55 280-566l-87 87 183 183-56 56L80-480l143-143L55-791l57-57 736 736-57 57Zm-54-282-57-57 87-87-183-183 56-56 240 240-143 143Z"/>
      </svg>
      CodeTube
    </span>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Cursos</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  `;
}
