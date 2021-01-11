import React from 'react';

function Statistics (props) {
    return (
        <div className="stat_main_side_body">
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">Активных депозитов:</span>
                <span className="stat_main_side_body_item_white">{props.active} TRX</span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">Объем структуры:</span>
                <span className="stat_main_side_body_item_white">{props.activeCoin} TRX / {props.activePeople} чел</span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">объем первой линии:</span>
                <span className="stat_main_side_body_item_white">{props.lineCoin} TRX / {props.linePeople} чел</span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">Всего заработано:</span>
                <span className="stat_main_side_body_item_white">{props.total} TRX</span>
            </div>
            <div className="stat_main_side_body_item">
                <span className="stat_main_side_body_item_gray">До закрытия депозита:</span>
                <span className="stat_main_side_body_item_white">{props.closeVolume} TRX</span>
            </div>
        </div>
    );
}

export default Statistics;