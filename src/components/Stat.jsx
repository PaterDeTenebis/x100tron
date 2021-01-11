import React from 'react';

/* Icons */ 
import { FaCopy } from "react-icons/fa";

/* Functionals*/ 
import ButtonBlue from './functionals/ButtonBlue';
import Statistics from './functionals/Statistics';
import StatCrowd from './functionals/StatCrowd';
import AvBalance from './functionals/AvBalance';

function Stat () {
    return (
        <section className="stat">
            <div className="container">
                <div className="stat_heading">
                    <span>Статистика x100tron</span>
                </div>
                <div className="stat_main">
                    <div className="stat_main_side">
                        <div className="stat_main_side_heading">
                            <span>персональная</span>
                        </div>
                        <Statistics
                            active="10.000"
                            activeCoin="10.000"
                            activePeople="1000"
                            lineCoin="10.000"
                            linePeople="1000"
                            total="10.000"
                            closeVolume="10.000"
                        />
                        <div className="stat_main_side_heading">
                            <span>общая</span>
                        </div>
                        <StatCrowd
                            totalVolume="10.000"
                            partnertWithdrawal="1.000.000"
                            totalPartners="10.000"
                            contactAdress="HT-LL111110004333"
                        />
                    </div>
                    <div className="stat_main_side">
                        <div className="stat_main_side_heading">
                            <span>доступный баланс</span>
                        </div>
                        <div className="stat_main_side_body" >
                            <AvBalance 
                                avBalance="1.000"
                                val="usd"
                                valNum="24.000"
                            />
                        </div>
                        <ButtonBlue text="открыть депозит" />
                        <div className="stat_main_side_heading">
                            <span>Моя партнёрская ссылка</span>
                        </div>
                        <div className="stat_main_side_body">
                            <div className="balance_holder">
                                <span className="balance_gray">
                                    https://vk.com/im?sel=252356094
                                </span>
                            </div>
                        </div>
                        <button className="copy">
                            скопировать  <span><FaCopy /></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stat;