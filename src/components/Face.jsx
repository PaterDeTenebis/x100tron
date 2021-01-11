import React from 'react';

import ButtonBlue from './functionals/ButtonBlue';

function Face () {
    return (
        <section className="face">
            <div className="container">
                <div className="face_name">
                    <span>X<span className="tshad">100</span>TRON</span>
                </div>
                <div className="face_slogan">
                    <span>Открытый, честный и профессионально просчитанный <br />
                        Фонд Взаимопомощи на базе Смарт-контракта блокчейна Tron
                    </span>
                </div>
                <div className="face_btn_holder">
                    <ButtonBlue text="открыть депозит" />
                </div>
            </div>
        </section>
    );
}

export default Face;