
import { AboutMe } from '../AboutMe/aboutMe';
import { Projects } from '../Projects/projects';
import { ContactMe } from '../ContactMe/contactme';
import './style.css';

export function Header(props) {

    return(
        <header>
            <h1 class="page-title">Abenezer Merdassa</h1>
            <nav class="fixed-nav">
                <a href='#' onClick={() => props.setPage(<AboutMe />)}>About Me</a>
                <a href='#' onClick={() => props.setPage(<Projects />)}>Projects</a>
                <a href='#' onClick={() => props.setPage(<ContactMe />)}>Contact Me</a>
            </nav>
        </header>
    )
}
