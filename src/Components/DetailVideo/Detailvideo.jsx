import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoById } from '../../API';
import Cardvideo from '../CardVideo/Cardvideo';
import like from './../../assets/like.png'
import './Detailvideo.css'

const Detailvideo = ({ videos }) => {
    const [videoInfo, setVideoInfo] = useState([])
    const [showDescription, setShowDescription] = useState(false)
    const params = useParams()

    useEffect(() => {
        getVideoById(params.id).then(response => {
            setVideoInfo(response?.data?.items)
        })
    }, [params.id])

    const changeDescription = () => setShowDescription(!showDescription)

    return (
        <div className='details'>
            <div>

                <iframe src={"https://www.youtube.com/embed/" + params.id} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay></iframe>
                {
                    videoInfo.map(el => {
                        return (
                            <div className='detail__video' key={el?.id}>
                                <div>
                                    <h1>{el?.snippet?.title}</h1>
                                    <div className='detail__description'>
                                        <h4>{el?.snippet?.channelTitle}</h4>
                                        <h4 className='views'>Просмотров: {el?.statistics?.viewCount}</h4>
                                        <div className='likes'>
                                            <img width={50} src={like} alt="" />
                                            <h4>{el?.statistics?.likeCount}</h4>
                                        </div>
                                    </div>
                                    <p style={{ display: showDescription ? 'block' : 'none' }}>{el?.snippet?.description}</p>
                                    <button onClick={changeDescription} className='btn__description'>{showDescription ? 'Свернуть' : 'Ещё'}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='card_videos'>
                {
                    videos.map(el => {
                        return <Cardvideo el={el} key={el?.id?.videoId} />
                    })
                }

            </div>
        </div >
    );
};

export default Detailvideo;