import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {characterService} from "../../services/characterService";
import {Character} from "./Character";

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        characterService.getById(id).then(({data})=>setCharacters(data))
    }, [id]);
    return (
        <div>
            <button onClick={()=>navigate(-1)}>back</button>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};