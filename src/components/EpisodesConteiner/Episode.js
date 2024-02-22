import React from 'react';
import css from './Episode.module.css'
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../hoc/useAppContext";


const Episode = ({episoder}) => {
    const {id, name, air_date, episode, characters} = episoder;
    const navigate = useNavigate();
    const [, setName] = useAppContext();

    function toCharacters() {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        setName(name)
        navigate(`/characters/${ids}`)
    }

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>id-{id}</div>
            <div>name-{name}</div>
            <div>air_date-{air_date}</div>
            <div>episode-{episode}</div>
        </div>
    );
};

export {Episode};