import React from 'react';
import Episodes from "../components/EpisodesConteiner/Episodes";
import Pagination from "../components/EpisodesConteiner/Pagination";
import Header from "../components/Header";

const EpisodesPage = () => {
    return (
        <div>
            <Header/>
            <Episodes/>
            <Pagination/>
        </div>
    );
};

export default EpisodesPage;