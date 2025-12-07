import React from 'react'
import './footer.css'
import { LuTwitter } from "react-icons/lu";
import { RiTelegram2Line } from "react-icons/ri";

export default function Footer() {
    return (
        <div className='footer'>
            <div className='textFoot'>
                <p className='textToFooter'>© УО "Минский государственный колледж цифровых технологий", 2022<br />
                    Администрирование сайта: Картавенко Артем, Галицкий Максим<br />
                    Адрес: 220108, Республика Беларусь, г. Минск, ул. Казинца, 91<br />
                    Телефон: +375 17 374 11 62<br />
                    E-mail: mgke@minskedu.gov.by</p>
            </div>
            <div className='iconsFoot'>
                <LuTwitter />
                <RiTelegram2Line />
            </div>

        </div>
    )
}
