import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {characterService} from "../../services/characterService";
import {Character} from "./Character";
import {useAppContext} from "../../hoc/useAppContext";

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();
    const [,setName] = useAppContext();

    useEffect(() => {
        characterService.getById(id).then(({data})=>setCharacters(data))
    }, [id]);
    
    const back = () => {
        navigate(-1)
        setName(null)
    }

    return (
        <div>
            <button onClick={back}>back</button>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};