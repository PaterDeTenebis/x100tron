import React from 'react';

function AvBalance (props) {
    return (
        <div className="balance_holder">
            <span className="balance">
            {props.avBalance} trx
            </span>
            <br />
            <span className="balance_gray">
            курс в {props.val}: {props.valNum}р
            </span>
        </div>
    );
}

export default AvBalance;