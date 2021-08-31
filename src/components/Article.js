// This is the child component of ArticleList
// It will receive issue data as a single prop called data
// The Issue component should show at least:


import React from 'react'
import { ListGroupItem } from "react-bootstrap";
import RelativeTime from "./RelativeTime";
import '../componentcss/Article.css'


function Article(props) {
    // take appropriate info from data being passed to use as variables in return
    const { title, date, url } = props.data

    // Get a random number for the number of readers who have read an article
    const randomReadersEnding = getRandomInt(101, 999 )
    const randomReadersBeginning = getRandomInt(3, 100)

     //The maximum is exclusive and the minimum is inclusive
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <ListGroupItem className="article">
            <div className="article__left">
                <div className="article__bullet">
                    &#8226;
                </div>
            </div>
            <div className="article__right">
                <div className="article__top">
                    <div><a className="article__title" href={url}>{title}</a></div>
                </div>
                <div className="article__bottom">
                    <div className="article__time text-muted"><RelativeTime  date={date}  />  &#8226;</div>
                    <div className="article__counter text-muted">{randomReadersBeginning},{randomReadersEnding} readers</div>
                </div>
            </div>
        </ListGroupItem>
    )
}

export default Article
