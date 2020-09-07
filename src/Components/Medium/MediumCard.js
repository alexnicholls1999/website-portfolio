import React from 'react';
import {Card, CardBody} from 'shards-react';
import ShortenText from './ShortenText';
import ToText from './Totext';

// // import { faUser, faCalendarAlt } from '@fontawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';


export default function MediumCard(props) {
    var shortMonthName = new Intl.DateTimeFormat('en-UK', {
        month: 'short'
    }).format;

    let date = new Date(props.pubDate);
    const publishDate = shortMonthName(date) + ' ' + date.getDate() + ' ' + date.getFullYear();
    
    return (
        <Card small className="card-post card-post--1">
            <div className="card-post__image" style={{ backgroundImage: `url(${props.thumbnail})`}}>
                <div className="card-post__author d-flex">
                    <a href={props.profilelink}
                        target="_blank"
                        className="card-post__author-avatar card-post__author-avatar--small"
                        style={{
                            backgroundImage: `url(${props.avatar})`
                        }}
                        rel="noopener noreferrer"
                    >
                        Written by {props.author}
                    </a>
                </div>
            </div>
            <CardBody>
                <h5 className="card-title">
                    <a href={props.link} target="_blank" className="text-floird-blue" rel="noopener noreferrer">
                        {ShortenText(props.title, 0, 40)}
                    </a>
                </h5>
                <p className="card-text d-inline-block mb-3" style={{color: "black"}}>{ShortenText(ToText(props.content), 0, 120) + '...'}</p>
                <br />
                <span className="text-dark">
                    {props.author}
                </span>
                <br />
                <span className="text-muted">
                    {publishDate}
                </span>
            </CardBody>

        </Card> 
    );
}
