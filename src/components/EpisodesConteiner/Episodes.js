import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {episodesActions} from "../../store";
import Episode from "./Episode";
import css from './styleAll.module.css'


const Episodes = () => {

    const [query, ] = useSearchParams({page: '1'});

    const page = query.get('page');

    const dispatch = useDispatch();


    const {episodes} = useSelector(state => state.episodes);

    useEffect(() => {
        dispatch(episodesActions.getAll({page}))
    }, [page]);


    return (
        <div className={css.Episodes}>
            {episodes.map(episode1=><Episode key={episode1.id} episode1={episode1}/>)}
        </div>
    );
};

export default Episodes;