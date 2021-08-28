import React from 'react'
import '../componentcss/Widgets.css'
import NYT from "../images/NYT.png"
import ArticleList from './ArticleList'



export default function Widgets() {
    
    return (
        <div className="widgets">
            <div className="widget__top">
                <h3 className="widget__title">LinkedIn News</h3>
                <a className="widget__img" href="https://developer.nytimes.com/"><img src={NYT} alt="New York Times Logo and Attribute"></img></a>
            </div>
            <br/>
            <div className="widget__bottom text-muted">
                <ArticleList/>
            </div>

        </div>
    )
}
