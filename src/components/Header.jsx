import React from 'react';

function Header () {
    return (
        <section className="header">
            <div className="container">
                <div className="nav_holder">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        &#9776;
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Главная</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">о проекте</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">инвестировать</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">статистика</a>
                            </li>
                            </ul>
                            
                        </div>
                    </nav>
                    <div className="langs">
                        <span className="select-language">RU</span>
                        <span className="lang-list">
                            <a href="">RU</a>
                            <a href="">EN</a>
                            <a href="">FR</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;