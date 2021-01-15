import React from 'react';

import { Trans, useTranslation } from "react-i18next";

function AvBalance (props) {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="balance_holder">
            <span className="balance">
            {props.avBalance} trx
            </span>
            <br />
            <span className="balance_gray">
            {t("exchange")} {props.val}: {props.valNum}р
            </span>
        </div>
    );
}

export default AvBalance;