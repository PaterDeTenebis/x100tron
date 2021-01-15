import React from 'react';

import { Trans, useTranslation } from "react-i18next";

function Header () {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <section className="header">
            <div className="container">
                <div className="nav_holder">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        &#9776;
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t("navFirst")}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t("navSecond")}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t("navThird")}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t("navFourth")}</a>
                            </li>
                            </ul>
                            
                        </div>
                    </nav>
                    <div className="langs">
                        <span className="select-language">RU</span>
                        <span className="lang-list">
                            <a onClick={() => changeLanguage("RU")}>RU</a>
                            <a onClick={() => changeLanguage("EN")}>EN</a>
                            <a onClick={() => changeLanguage("FR")}>FR</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;