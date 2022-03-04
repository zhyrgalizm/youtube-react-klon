import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAllVideoOrByName } from '../../API';
import Detailvideo from '../DetailVideo/Detailvideo';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        getAllVideoOrByName().then(response => {
            setVideos(response?.data?.items);
        })
    }, [])

    return (
        <div>
            <Header setVideos={setVideos} />
            <div className='content'>

                <Sidebar />
                <Routes>
                    <Route path='/' element={<Home videos={videos} />} />
                    <Route path='/detailvideo/:id' element={<Detailvideo videos={videos} />} />
                </Routes>

            </div>

        </div>
    );
};

export default Main;