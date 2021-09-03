// This component will hold the array of TechArticles from the API and 
// pass data for each TechArticle as a prop into a child component
// Fetch the data from the API --> store it in state when the component is ready
// API Link:
// https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=yourkey

import React from 'react'
import { useEffect } from 'react';
import { ListGroup, Spinner } from "react-bootstrap";
import TechArticle from './TechArticle'
import { useDispatch, useSelector } from 'react-redux'
import { actionSetTechArticles } from '../redux/actions/techarticles';

function TechArticleList() {
    const dispatch = useDispatch()
    const techarticles = useSelector(state => state.techarticles)

    // Same as ComponentDidMount
    useEffect(() => {
        
        fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=ynxSgWAdQkHjVatrspBWvMI3e9WIrWrP')
            .then((res) => res.json())
            .then((data) => {
                // Store results in piece of state
                dispatch(actionSetTechArticles(data.results))
                // Use state to display results on the page
            });
    }, [dispatch]); 
    // empty dependence array to only run once

    if(techarticles === null) {
        return <Spinner animation="border" variant="secondary" role="status" />
    }

    return (
        <ListGroup>
            {techarticles.map((techArticle, index) => {
                return <TechArticle key={index} data={techArticle} />;
            })}
        </ListGroup>
    );
}

export default TechArticleList

// https://developer.nytimes.com/

// data.title
// data.published_date
// data.url
// List Group and list group item like github issues project 







