
import './style.css';

export function Projects() {

    return(
      <div class="Projects" id="Projects" >
          <div class="title">
          <h1>Projects</h1>
          </div>
        <div class="project-showcase">
          <a href="https://github.com/Abenezerm/Blog-site" class="project-card">
            <div class="title">
              <h2>📖 Blogger.</h2>
            </div>
            <div class="description">
              <p>A web application for writting blogs. Made following a MVC design pattern. Sql backend, using sequelize as an ORM. The application has authentication, allows user to write, delete and edit posts on the application. </p>
            </div>
          </a>

          <a href="https://github.com/Old-Prego/pet-adoption" class="project-card">
            <div class="title">
              <h2>🐶 Pet finder.</h2>
            </div>
            <div class="description">
              <p>A website for finding pets (Dogs or Cats), within a certain radius of user. Uses the petfinder Api and google maps api.</p>
            </div>
          </a>
          <a href="https://github.com/Abenezerm/Note-Taker" class="project-card">
            <div class="title">
              <h2>✏️ Note taker.</h2>
            </div>
            <div class="description">
              <p>A web application for writting and saving notes. </p>
            </div>
          </a>
        </div>
    </div>
    );
}
