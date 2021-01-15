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

import { Trans, useTranslation } from "react-i18next";

function About () {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <section className="about">
            <div className="container">
                <div className="about_heading">
                    <span>
                    {t("aboutHeading")}
                    </span>
                </div>
                <div className="about_main">
                    <div className="about_main_left">
                        <span>
                        {t("aboutText")}
                        </span>
                        <div className="btn_holder">
                        <button className="btn_holder_item">
                            <FaFilePdf /> <span className="btn_holder_item_span">{t("aboutPDF")}</span> 
                        </button>
                        <button className="btn_holder_item">
                            <FaFileContract /> <span className="btn_holder_item_span">{t("aboutContract")}</span> 
                        </button>
                        <button className="btn_holder_item">
                            <FaFileInvoice /> <span className="btn_holder_item_span">{t("aboutInstruct")}</span> 
                        </button>
                        <button className="btn_holder_item">
                            <FaChartLine /> <span className="btn_holder_item_span">{t("aboutAudit")}</span> 
                        </button>
                        <button className="btn_holder_item">
                            <FaTelegramPlane /> <span className="btn_holder_item_span">{t("aboutChannel")}</span> 
                        </button>
                        <button className="btn_holder_item">
                            <FaTelegramPlane /> <span className="btn_holder_item_span">{t("aboutChat")}</span> 
                        </button>
                        </div>
                    </div>
                    <div className="about_main_right">
                        <img src={illustration} alt="" />
                    </div>
                </div>
                <div className="about_heading">
                    <span>
                        {t("investHeading")}
                    </span>
                </div>
                <div className="about_form">
                    <div className="about_form_heading">
                        <span>{t("investInput")}</span>
                    </div>
                    <input type="number" min="0" className="about_form_input" />
                    <div className="trx">
                        trx
                    </div>
                        <div className="about_btn_holder">
                            <ButtonBlue text={t("buttonText")} />
                        </div>
                    </div>
                    
            </div>
        </section>
    );
}

export default About;