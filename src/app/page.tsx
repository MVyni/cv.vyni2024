import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.gridcontainer}>
    <div className="grid-main">
        <img src="image/vyni02.png" alt="self-image" />
        <h1>Marcus Vynicius Ferreira</h1>
        <p>Developer Junior Front-End</p>
        <h2>Contact-me</h2>
     <p>&#x1F4DE;+361 962 161 662 </p>
     <p>&#x1F4E7;viniciusfla1999pt@gmail.com </p>
     <p><img src="image/linkdin1.png" alt="image-linkdin" /> MVyni </p>
     <p><img src="image/insta1.png" alt="imagem-insta" /> marcusvynicius </p>
    </div>
    <div className="grid-about">
        <h2>About-me</h2>
        <p>I'm Jr developer with a goal of making websites, systems or products easier for the user to view and use. 
        </p>
        <p>I'm always looking for more learning and striving to add to th team.</p>
    </div>

    <div className="grid-skills">
        <h2>Skills</h2>
        <p><img src="image/html.webp" alt="imagem html" />HTML5
        </p>   
        <p><img src="image/css.webp" alt="imagem css" />CSS3</p>   
        <p><img src="image/js.png" alt="imagem JavaScript" />JavaScript</p>
        
    </div>
    
        <div>
     <h2>Professional Experiences:</h2>
    <div className="grid-professional experience">
    <h3>Mascarenhas Barbosa - Brazil, Rio de Janeiro</h3>
    
    <h4>Administrative Assistant</h4>
    <p>January 05, 2015 - November 25, 2015</p>
    <p>I was responsible for serving customers, organizing documents and excel.</p>
    </div>
    </div>
    <div className="grid-academic experience">
        <h2>Academic Experiences:</h2>
    <div className="grid-academic1">
        <h3>Senai - Brazil, Rio de Janeiro</h3>
        <h4>Administrative Assistant</h4>
        <p>January 05, 2015 - November 25, 2015</p>
    </div>
    </div>
    <div className="grid-academic2">
        <h3>Udemy - Porto, Portugal</h3>
        <h4>Web Development Bootcamp</h4>
        <p>Studying</p>
    </div>
    <div className="grid-academic3">
        <h3>Katy Lessons - Brazil, Rio de Janeiro</h3>
        <h4>English Course - A2</h4>
        <p>Studying</p>
    </div>
    </div>
  );
}
