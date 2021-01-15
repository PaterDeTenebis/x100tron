import React from 'react';

/* Icons */ 
import { FaCopy } from "react-icons/fa";

/* Functionals*/ 
import ButtonBlue from './functionals/ButtonBlue';
import Statistics from './functionals/Statistics';
import StatCrowd from './functionals/StatCrowd';
import AvBalance from './functionals/AvBalance';

import { Trans, useTranslation } from "react-i18next";

function Stat () {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <section className="stat">
            <div className="container">
                <div className="stat_heading">
                    <span>{t("statHeading")}</span>
                </div>
                <div className="stat_main">
                    <div className="stat_main_side">
                        <div className="stat_main_side_heading">
                            <span>{t("statPersonal")}</span>
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
                            <span>{t("crowd")}</span>
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
                            <span>{t("avBalance")}</span>
                        </div>
                        <div className="stat_main_side_body" >
                            <AvBalance 
                                avBalance="1.000"
                                val="usd"
                                valNum="24.000"
                            />
                        </div>
                        <ButtonBlue text={t("buttonText")} />
                        <div className="stat_main_side_heading">
                            <span>{t("link")}</span>
                        </div>
                        <div className="stat_main_side_body">
                            <div className="balance_holder">
                                <span className="balance_gray">
                                    https://vk.com/im?sel=252356094
                                </span>
                            </div>
                        </div>
                        <button className="copy">
                        {t("copy")}  <span><FaCopy /></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stat;