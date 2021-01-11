import React from 'react';

function Footer (props) {
    return (
        <footer>
            <div className="container">
                <div className="footer_list">
                    <div className="footer_list_item">
                        <a href="#">главная</a>
                    </div>
                    <div className="footer_list_item">
                        <a href="#">о проекте</a>
                    </div>
                    <div className="footer_list_item">
                        <a href="#">инвестировать</a>
                    </div>
                    <div className="footer_list_item">
                        <a href="#">статистика</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;