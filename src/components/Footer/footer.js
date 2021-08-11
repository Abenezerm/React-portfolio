
import React from 'react';
import linkedin from './linkedin.png';
import github from './github.png';
export function Footer() {
    return(
      <div class="Contact-Me" id="Contact-Me">
            <div class="links">
              <a href="https://www.linkedin.com/in/abenezer-merdassa-055769202/"> <img width="100px" src={linkedin} alt="linkedin"/> </a>
              <a href="https://github.com/Abenezerm"> <img width="100px" src={github} alt="linkednin"/> </a>
            </div>
      </div>
    );
}
