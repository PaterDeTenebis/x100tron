import React from 'react';

import { Trans, useTranslation } from "react-i18next";

function StatCrowd (props) {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="stat_main_side_body">
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">{t("crowdVolume")}</span>
                <span className="stat_main_side_body_item_white">{props.totalVolume} TRX</span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">{t("crowdWithdraw")}</span>
                <span className="stat_main_side_body_item_white">{props.partnertWithdrawal} TRX </span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">{t("crowdPartners")}</span>
                <span className="stat_main_side_body_item_white">{props.totalPartners} чел</span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">{t("crowdAdress")}</span>
                <span className="stat_main_side_body_item_white">{props.contactAdress}</span>
            </div>
        </div>
    );
}

export default StatCrowd;