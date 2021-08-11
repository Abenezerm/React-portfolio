import React, { useState } from 'react';
import { Header } from './Header/header';
import { Footer } from './Footer/footer';
import { AboutMe } from './AboutMe/aboutMe';


export function Portfolio() {

    const [page, setPage] = useState(<AboutMe />)

    return (
        <div>
            <Header setPage={setPage}/>
            {page}
            <Footer />
        </div>
    );
}
