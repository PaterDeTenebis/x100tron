import React from 'react';

function StatCrowd (props) {
    return (
        <div className="stat_main_side_body">
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">Общий объем депозитов:</span>
                <span className="stat_main_side_body_item_white">{props.totalVolume} TRX</span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">Выведено партнёрами:</span>
                <span className="stat_main_side_body_item_white">{props.partnertWithdrawal} TRX </span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">всего партнёров:</span>
                <span className="stat_main_side_body_item_white">{props.totalPartners} чел</span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">Адрес контракта:</span>
                <span className="stat_main_side_body_item_white">{props.contactAdress}</span>
            </div>
        </div>
    );
}

export default StatCrowd;