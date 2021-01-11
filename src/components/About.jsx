import React from 'react';

/* Illustrations */
import illustration from '../img/illustration.png';

/* Icons */ 
import { FaFileContract } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

/* Functionals */ 
import ButtonBlue from './functionals/ButtonBlue';

function About () {
    return (
        <section className="about">
            <div className="container">
                <div className="about_heading">
                    <span>
                        О проекте x100tron
                    </span>
                </div>
                <div className="about_main">
                    <div className="about_main_left">
                        <span>
                        Изучите интересующую Вас информацию о проекте и смарт-контракте, <br />
                        добавьтесь в чат и подпишитесь на канал проекта. Воспользуйтесь инструкциями <br />
                        для открытия депозита и вывода средств. Следите за новостями и зарабатывайте <br />
                        неограниченное количество криптовалюты Tron!
                        </span>
                        <div className="btn_holder">
                        <button className="btn_holder_item">
                            <FaFilePdf /> <span className="btn_holder_item_span">pdf-Презентация</span> 
                        </button>
                        <button className="btn_holder_item">
                            <FaFileContract /> <span className="btn_holder_item_span">контракт</span> 
                        </button>
                        <button className="btn_holder_item">
                            <FaFileInvoice /> <span className="btn_holder_item_span">инструкции</span> 
                        </button>
                        <button className="btn_holder_item">
                            <FaChartLine /> <span className="btn_holder_item_span">аудит</span> 
                        </button>
                        <button className="btn_holder_item">
                            <FaTelegramPlane /> <span className="btn_holder_item_span">телеграм-канал</span> 
                        </button>
                        <button className="btn_holder_item">
                            <FaTelegramPlane /> <span className="btn_holder_item_span">телеграм-чат</span> 
                        </button>
                        </div>
                    </div>
                    <div className="about_main_right">
                        <img src={illustration} alt="" />
                    </div>
                </div>
                <div className="about_heading">
                    <span>
                        ИНВЕСТИРОВАТЬ в x100tron
                    </span>
                </div>
                <div className="about_form">
                    <div className="about_form_heading">
                        <span>введите сумму</span>
                    </div>
                    <input type="number" min="0" className="about_form_input" />
                    <div className="trx">
                        trx
                    </div>
                        <div className="about_btn_holder">
                            <ButtonBlue text="открыть депозит" />
                        </div>
                    </div>
                    
            </div>
        </section>
    );
}

export default About;