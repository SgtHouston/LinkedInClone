import React from 'react'
import '../componentcss/Widgets.css'
import NYT from "../images/NYT.png"
import ArticleList from './ArticleList'


export default function Widgets() {
    
    return (
        <div className="widgets">
            <div className="widget__top">
                <h5 className="widget__title">LinkedIn News</h5>
                <a className="widget__img" href="https://developer.nytimes.com/" title="The New York Times Developer Network"><img src={NYT} alt="New York Times Logo and Attribute"></img></a>
            </div>
            <br/>
            <div className="widget__bottom">
                <ArticleList/>
            </div>
        </div>
    )
}
