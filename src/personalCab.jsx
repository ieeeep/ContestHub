import React from 'react'
import { useNavigate } from 'react-router-dom';
import './personalCab.css'
import Header from './header';
import { MdAccountCircle } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";

export default function PersonalCab() {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <div className='cabinet-container'>
        <div className='head-acc'>
          <MdAccountCircle className='acc-circle' />
          <div className='user-post'>
            <h4>Пользователь</h4>
            <h5>Почта</h5>
          </div>
        </div>
        <div className='nav-acc-btn'>
          <button className='use-acc'><MdOutlinePerson /> Управление аккаунтом</ button>
          <button foclassNamer='like-acc'><FaRegStar />Избранное</ button>
          <button className='history-acc'><HiOutlineFolderDownload />История</ button>
          <button className='settings-acc'><MdOutlineSettings />Настройки</ button>
          <button className='exit-acc' onClick={() => { navigate('/') }}><IoMdExit />Выход</ button>
        </div>
      </div>
    </div>
  )
}
