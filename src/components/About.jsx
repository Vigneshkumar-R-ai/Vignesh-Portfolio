import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';    
const About = () => {
  return (
    <>
    <section id='about1'>
     <h2>About Me</h2>
     
     <p>I'm Vignesh Kumar, a passionate MERN Stack Developer dedicated to creating dynamic and user-friendly web applications. I've built several personal projects, focusing on performance and scalability, and am eager to apply my full-stack skills to real-world challenges.</p>
     
    </section>

    <section id='technical'>
     <h2>Technical Skills</h2>
     <div id='list'>
     <ul>
        <li><strong>Frontend:</strong>React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap, jQuery</li>
        <li><strong>Backend:</strong>Node.js, Express.js, REST APIs</li>
        <li><strong>Database:</strong>MongoDB, Mongoose</li>
        <li><strong>Tools:</strong>Git, GitHub, Postman, VS Code, Netlify</li>
        
     </ul>
     </div>
    </section>
          
          <section id='project'>
            <h2>Projects</h2>
            
            <div id='project1'>
                <h3>📝 Tamil Nadu Tourism</h3>
      <p>A simple MERN app about Tamil Nadu Tourism with responsive performance.</p>
      <ul>
        <li><strong>Stack:</strong> React, Bootstrap, GitHub</li>
        <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/Vigneshkumar-R-ai/project1">GitHub Repo</a> | <a target='_blank'rel='noopener noreferrer' href="https://vigneshkumar-r-ai.github.io/project1/">Live Demo</a></li>

      </ul>
            </div>

          <div id='project1'>
                <h3>📝 Weather App </h3>
      <p>A platform simply designed to view the current climate of the cities around the world</p>
      <ul>
        <li><strong>Stack:</strong> React, axios, API, UseState, GitHub</li>
        <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/Vigneshkumar-R-ai/project2_weatherapp">GitHub Repo</a> | <a target='_blank'rel='noopener noreferrer' href="https://vigneshkumar-r-ai.github.io/project2_weatherapp/">Live Demo</a></li>

      </ul>
            </div>

            <div id='project1'>
                <h3>📝 Shopping Cart</h3>
      <p>A comprehensive website created for shopping Products like Fruits</p>
      <ul>
        <li><strong>Stack:</strong> React, Bootstrap, Node, Express, Stripe, GitHub</li>
        <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/Vigneshkumar-R-ai/shoppingcartlive">GitHub Repo</a> | <a target='_blank'rel='noopener noreferrer' href="https://vigneshkumar-r-ai.github.io/shoppingcartlive/">Live Demo</a></li>

      </ul>
            </div>  

          </section>
          <section id='course'>
            <h2>Relevant Course</h2>
            <h5>MERN Stack Developer - Course completion Certificate</h5>
            <h5>Kalvi Institute Karur - October 2025</h5>
            <a type="button" class="btn btn-primary" href="https://drive.google.com/file/d/1Rfjd2HftcIezGcY_Hj52oJ9rovDYEZjg/view" target="_blank" rel="noopener noreferrer">Certificate</a>
          </section>

          <section id='education'>
            <h2>Education</h2>
            <p><strong>B.Tech [Chemical Engineering]</strong> — Kongu Engineering College,Perundurai-2021</p>

          </section>
           <section id='resume'>
    <h2>My Resume</h2>
     <a type="button" class="btn btn-primary" href="https://drive.google.com/file/d/1ok5pQaRf9PEVt3jRfw18Rj9FwSVAG6Y1/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>

  </section>
 <section id="contact">
    <h2>Contact</h2>
    <p>📧 <a href="mailto:vigneshkumarvk1402@gmail.com" target="_blank"  rel='noopener noreferrer'>Mail Me</a></p>
    <p>🔗 <a href="https://www.linkedin.com/in/vignesh-kumar-b6b69b376/" target='_blank' rel='noopener noreferrer'>LinkedIn</a> | 
      <a href="https://github.com/Vigneshkumar-R-ai" target='_blank' rel='noopener noreferrer'>GitHub</a></p>
  </section>
 

          <footer>
            <p>© 2025 Vignesh Kumar | Built using HTML & CSS</p>
          </footer>
    
    
    </>
  )
}

export default About