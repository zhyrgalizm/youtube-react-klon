import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div >
            <input id="toggle" type="checkbox" />
            <label htmlFor="toggle" className="btn2">
                <span></span>
            </label>
            <div className='sidebar'>

                <ul>
                    <li>
                        <a className='menu__item ' href="">Главная</a>
                    </li>
                    <li>
                        <a className='menu__item ' href="">Навигатор</a>
                    </li>
                    <li>
                        <a className='menu__item subcription' href="">Подписки</a>
                    </li>
                    <li>
                        <a className='menu__item ' href="">Библиотека</a>
                    </li>
                    <li>
                        <a className='menu__item ' href="">История</a>
                    </li>
                    <li>
                        <a className='menu__item ' href="">Ваши Видео</a>
                    </li>
                    <li>
                        <a className='menu__item ' href="">Смотреть позже</a>
                    </li>
                    <li>
                        <a className='menu__item ' href="">Понравившиеся</a>
                    </li>
                </ul>

            </div>


        </div>
    );
};

export default Sidebar;