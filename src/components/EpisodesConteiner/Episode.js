import React from 'react';
import css from './styleAll.module.css'
import {useNavigate} from "react-router-dom";

const Episode = ({episode1}) => {
    const {id, name, episode, characters} = episode1;

    const navigate = useNavigate();


    
    function getCharacters () {
        const ids = characters.map(character=>character.split('/').splice(-1)[0]).join(',');
        navigate(`/characters/${ids}`)
    }
    
    return (
        <div className={css.Episode} onClick={getCharacters} >
            <div>id-{id}</div>
            <div>name-{name}</div>
            <div>chapter-{episode}</div>
        </div>
    );
};

export default Episode;