import React from 'react';
import Cardvideo from '../CardVideo/Cardvideo';
import './Home.css'

const Home = ({ videos }) => {
    return (
        <div className='info'>

            {
                videos.map(el => {
                    return (
                        <Cardvideo el={el} key={el?.id?.videoId} />
                    )
                })
            }

        </div>
    );
};

export default Home;