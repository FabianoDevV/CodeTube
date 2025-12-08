import "./style.css";
import Header from "/src/components/Header/index.js";
import Home from "/src/components/Home/index.js";
import Categoria from "/src/components/Categoria/index.js";
import Cursos from "/src/components/Cursos/index.js";
import Footer from "/src/components/Footer/index.js";

document.getElementById("app").innerHTML = `
  <header id="header"> </header>
  <main>
    <section id="home"></section>
    <section id="categoria"></section>
    <section id="cursos"></section>
  </main>
  <footer id="footer"></footer>
  
`;

document.querySelector("#header").innerHTML = Header();
document.querySelector("#home").innerHTML = Home();
document.querySelector("#categoria").innerHTML = Categoria();
document.querySelector("#cursos").innerHTML = await Cursos();
document.querySelector("#footer").innerHTML = Footer();

document.querySelector("#app");
