import React from 'react';

import { Trans, useTranslation } from "react-i18next";

function Statistics (props) {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="stat_main_side_body">
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">{t("statActive")}</span>
                <span className="stat_main_side_body_item_white">{props.active} TRX</span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">{t("statVolume")}</span>
                <span className="stat_main_side_body_item_white">{props.activeCoin} TRX / {props.activePeople} чел</span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">{t("statFirstline")}</span>
                <span className="stat_main_side_body_item_white">{props.lineCoin} TRX / {props.linePeople} чел</span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">{t("statAll")}</span>
                <span className="stat_main_side_body_item_white">{props.total} TRX</span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">{t("statClose")}</span>
                <span className="stat_main_side_body_item_white">{props.closeVolume} TRX</span>
            </div>
        </div>
    );
}

export default Statistics;