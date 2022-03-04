import React from 'react';
import { Link } from 'react-router-dom';

const Cardvideo = ({ el }) => {
    return (

        <Link to={'/detailvideo/' + el?.id?.videoId} className='card' >
            <div>
                <img src={el?.snippet?.thumbnails?.medium?.url} alt="" />
            </div>
            <div>
                <h1 title={el?.snippet?.title}>{el?.snippet?.title.length > 40 ? el?.snippet?.title.slice(0, 40) + '...' : el?.snippet?.title}</h1>
                <h4>{el?.snippet?.channelTitle}</h4>
                <h4>{el?.snippet?.publishTime}</h4>
            </div>
        </Link>
    );
};

export default Cardvideo;