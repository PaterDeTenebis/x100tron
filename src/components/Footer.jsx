import React from 'react';

import { Trans, useTranslation } from "react-i18next";

function Footer (props) {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <footer>
            <div className="container">
                <div className="footer_list">
                    <div className="footer_list_item">
                        <a href="#">{t("navFirst")}</a>
                    </div>
                    <div className="footer_list_item">
                        <a href="#">{t("navSecond")}</a>
                    </div>
                    <div className="footer_list_item">
                        <a href="#">{t("navThird")}</a>
                    </div>
                    <div className="footer_list_item">
                        <a href="#">{t("navFourth")}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;