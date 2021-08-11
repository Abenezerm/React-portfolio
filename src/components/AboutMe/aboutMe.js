
import React from 'react';
import portrait from './aben.png';
import './style.css';

export function AboutMe() {
    return(
      <div class="About-me" id="About-me">
      <div class="section-Header">
        <h2>About me</h2>
        <img class ="headshot" src={portrait} alt="Aben's face" height="200px"/>

      </div>
      <div class="bio">
        <p>I am a Full stack web developer. I strive to make appliactions that are proffesional, clean and efficient. In my spare time I love being outdoors, excercising and doing stand-up comedy.</p>
    </div>
      </div>
    )
}
