// This component will hold the array of articles from the API and 
// pass data for each article as a prop into a child component
// Fetch the data from the API --> store it in state when the component is ready
// API Link:
// http://api.nytimes.com/svc/semantic/v2/concept/name/<concept_type>/<specific_concept>.json(?optional_parameters)&api-key=your-API-key
// http://api.nytimes.com/svc/semantic/v2/concept/name/nytd_topic/software.json?fields=all&api-key=ynxSgWAdQkHjVatrspBWvMI3e9WIrWrP




import React from 'react'
import { useState, useEffect } from 'react';
import { ListGroup } from "react-bootstrap";
import Article from "./Article"

function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [techArticles, setTechArticles] = useState([])

    
    // Same as ComponentDidMount
    useEffect(() => {

        fetch('http://api.nytimes.com/svc/semantic/v2/concept/name/nytd_des/software.json?fields=all&api-key=ynxSgWAdQkHjVatrspBWvMI3e9WIrWrP')
                .then((res) => res.json())
                .then((data) => {
                    // Store results in piece of state
                    setArticles(data.results[0].article_list.results)
                    console.log(articles)
                    // Use state to display results on the page
                });
        
        fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=ynxSgWAdQkHjVatrspBWvMI3e9WIrWrP')
            .then((res) => res.json())
            .then((data) => {
                // Store results in piece of state
                
                console.log('logging data 2')
                // console.log(data)
                setTechArticles(data.results)
                console.log(techArticles)
                // Use state to display results on the page
            });

            
    }, []); 
    // empty dependence array to only run once





    if(articles === null) {
        return 'loading...'
    }



    return (
        <ListGroup>
            {articles.map((article, index) => {
                return <Article key={index} data={article} />;
            })}
        </ListGroup>
    );
}

export default ArticleList

// https://developer.nytimes.com/

// data.title
// data.published_date
// data.url
// List Group and list group item like github issues project 







