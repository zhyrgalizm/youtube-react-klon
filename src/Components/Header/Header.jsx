import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllVideoOrByName } from '../../API';
import search from './../../assets/search.png'
import logo from './../../assets/youtube-logo.png'
import './Header.css'



const Header = ({ setVideos }) => {

    const [input, setInput] = useState('')
    return (
        <header>
            <div className='block__img'>
                <Link to='/'><img className='logo__img' src={logo} alt="logo" /></Link>
            </div>

            <div className='search__on__yt'>
                <input type="text" placeholder='Введите запрос' onChange={(event) => setInput(event.target.value)} />
                <button onClick={() => {
                    getAllVideoOrByName(input)
                        .then(response => {
                            setVideos(response.data.items)
                        })
                }}><Link to="/"><img className='search__icon' src={search} alt="search" /></Link></button>
            </div>
        </header>
    );
};

export default Header;