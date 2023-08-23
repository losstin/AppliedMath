import React, {useRef } from "react";
import { Link } from "react-router-dom";


const Header = ()=>{

	const navMenu = useRef();

	function mobileMenu(e) {
		e.target.classList.toggle("active");
		navMenu.current.classList.toggle("active");
	}

    return (
        <header className="header">
			<nav className="navbar">
				<div className="top-nav">
					<div className="top-left">
						<span>МАНАС УНИВЕРСИТЕТИ</span>
					</div>
					<div className="top-right">
						<span>КМИ БОЛУМУ</span>
					</div>
				</div>
				<div className="middle-nav">
					<div className="middle-left">
						<Link to="/">Башкы бет</Link>
						<Link to="/about">Биз жөнүндө</Link>
						<Link to="/news">Жадыбал</Link>
					</div>
					<div className="middle-center">
						<div className="logo-box">
							<img src="https://manas.edu.kg/upload/logo/Manas_logo.png" alt=""/>
						</div>
					</div>
					<div className="middle-right">
						<Link to="/students">Студенттер</Link>
						<Link to="/why-ume">Эмне үчүн КМИ?</Link>
						<Link to="http://obis.manas.edu.kg/">Жеке кабинет</Link>
					</div>

					<div className="nav-responsive">
						<ul ref={navMenu} className="nav-menu-responsive">
							<li>
								<Link to="http://obis.manas.edu.kg/">Жеке кабинет</Link>
							</li>
							<li>
								<Link to="/">Башкы бет</Link>
							</li>
							<li>
								<Link to="/about">Биз жөнүндө</Link>
							</li>
							<li>
								<Link to="http://timetable.manas.edu.kg/department">Жадыбал</Link>
							</li>
							<li>
								<Link to="/students">Студенттер</Link>
							</li>
							<li>
								<Link to="/why-ume">Эмне үчүн КМИ?</Link>
							</li>
						</ul>
						<div className="hamburger" onClick={mobileMenu}>
							<span className="bar"></span>
                			<span className="bar"></span>
                			<span className="bar"></span>
						</div>
					</div>
				</div>
				<div className="sub-nav">
					
					<div className="sub-container">
						<i className="fa-solid fa-bars" onclick="showMenu()"></i>

						<Link to="/teachers">Мугалимдер</Link>
						<Link to="/graduates">Бутуруучулор</Link>
						<Link to="https://yordam.manas.edu.kg/yordam/">Онлайн китепкана</Link>
					</div>
				</div>
			</nav>
		</header> 
    )
};

export default Header;