import React, { useEffect, useState } from 'react'
import './header.css'
import { HiOutlineFolderDownload } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { IoMoon } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

export default function Header() {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <header>
            <img src='/pictures/icon.png' className='logo'/>
            <div className='greenHeader'>
                <div className='inputForSearch'>
                    <input className='searchInput' type='text' placeholder='Поиск мероприятий'></input>
                    <button className='searchBut'><IoMdSearch /></button>
                </div>
                <div className='buttons'>
                    <button className='createBut'>
                        <FaPen /> Создать
                    </button>
                    <button className='savesBut'>{<HiOutlineFolderDownload />}</button>
                    <button className='starBut'>{<FaRegStar />}</button>
                    <button>{<MdOutlineNotificationsNone />}</button>
                    <button>{<MdAccountCircle />}</button>
                </div>
                <button
                    onClick={() => setDarkTheme(!darkTheme)}>
                    {darkTheme ? <IoMoon /> : <FiSun />}
                </button>
            </div>
            <div className='lightIcon'></div>
        </header>
    )
}
