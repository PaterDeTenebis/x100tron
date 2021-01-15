import React from 'react';

import ButtonBlue from './functionals/ButtonBlue';

import { Trans, useTranslation } from "react-i18next";

function Face () {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <section className="face">
            <div className="container">
                <div className="face_name">
                    <span>X<span className="tshad">100</span>TRON</span>
                </div>
                <div className="face_slogan">
                    <span>{t("faceSlogan")}
                    </span>
                </div>
                <div className="face_btn_holder">
                    <ButtonBlue text={t("buttonText")} />
                </div>
            </div>
        </section>
    );
}

export default Face;