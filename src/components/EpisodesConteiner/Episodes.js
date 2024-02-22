import React, {useEffect, useState} from 'react';
import {episodesService} from "../../services/episodesService";
import {Episode} from "./Episode";
import css from './Episode.module.css'
import {usePageQuery} from "../../hooks/usePageQuery";


const Episodes = () => {
    const [episodes, setEpisodes] = useState({prev: null, next: null, results: []})
    const {page, prevPage, nextPage} = usePageQuery();
    useEffect(() => {
        episodesService.getAll(page).then(({data}) => setEpisodes(() => {
            const {info: {prev, next}, results} = data;
            return {
                prev,
                next,
                results
            }
        }))
    }, [page]);


    return (
        <div>
        <div className={css.Episodes}>
            {episodes.results.map(episoder => <Episode key={episoder.id} episoder={episoder}/>)}
        </div>
            <div className={css.buttons}>
                <button disabled={!episodes.prev} onClick={prevPage}>Prev</button>
                <button disabled={!episodes.next} onClick={nextPage}>Next</button>
            </div>
        </div>

    );
};

export {Episodes};