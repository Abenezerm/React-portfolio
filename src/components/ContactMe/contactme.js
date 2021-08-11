import './style.css';
import React from 'react';
import linkedin from './linkedin.png';
import github from './github.png';

export function ContactMe() {

    return(
      <div class="Contact-Me" id="Contact-Me">
            <div class="links">
              <a href="https://www.linkedin.com/in/abenezer-merdassa-055769202/"> <img width="200px" src={linkedin} alt="linkedin"/> </a>
              <a href="https://github.com/Abenezerm"> <img width="200px" src={github} alt="linkednin"/> </a>
            </div>

      </div>



    );
}
