import React from 'react'

export default function header() {
  return (<>
    <header className="header">
	<div className="container">
		<div className="row-wrap">
			<div className="logo-wrap">
				<span className="logo">LOGO</span>
			</div>
			<div className="nav-wrap">
				<ul className="nav-list">
					<li className="active"><a href="#">About-us</a></li>
					<li><a href="#">Contact-us</a></li>
					<li className="with-submenu">
						<a href="#">Blog</a>
						<div className="submenu">
							<ul className="submenu-inner">
								<li><a href="#">Link1</a></li>
								<li><a href="#">Link2</a></li>
								<li><a href="#">Link3</a></li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
			<div className="hamburger">
				<span className="line"></span>
				<span className="line"></span>
				<span className="line"></span>
			</div>
		</div>
	</div>
</header>
<div className="overlay"></div>
<style jsx>{`
     .sidebar-open {
        overflow: hidden;
    }
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s;
    }
    .sidebar-open .overlay {
        opacity: 1;
        visibility: visible;
    }
    .header {
      
        background-color: #311432;
        box-shadow: 3px 3px 3px #ccc;
        z-index: 99;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    .logo {
        color: #ffffff;
        font-size: 36px;
        font-weight: 700;
    }
    .container {
        padding: 0 15px;
    }
    .row-wrap {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
    .nav-list {
        display: flex;
        align-items: center;
    }
    .nav-list li {
        padding: 0 10px;
    }
    .nav-list li a {
        color: #ffffff;
        font-size: 18px;
        text-decoration: none;
        padding: 10px 0;
        position: relative;
        display: block;
    }
    .nav-list li a::after {
        content: "";
        background-color: #ffffff;
        width: 0;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: 0;
        transition: all 0.3s linear;
    }
    .nav-list li a:hover::after {
        width: 100%;
    }
    .nav-list li.active a::after {
        width: 100%;
    }
    .nav-list li.with-submenu {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .nav-list li.with-submenu > a {
        margin-right: 10px;
    }
    .nav-list li.with-submenu::after {
        content: "";
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        position: absolute;
        width: 5px;
        height: 5px;
        transform: rotate(45deg);
        right: 0;
        margin-bottom: 5px;
        transition: all 0.3s;
    }
    .nav-list li.with-submenu:hover::after {
        transform: rotate(225deg);
        margin-top: 10px;
    }
    .nav-list li.with-submenu .submenu {
        position: absolute;
        left: 50%;
        top: 100%;
        background: #ffffff;
        border-radius: 10px;
        transform: translateX(-50%);
        box-shadow: 2px 2px 1px 2px #ccc;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s ease-in-out;
    }
    .nav-list li.with-submenu:hover .submenu {
        opacity: 1;
        visibility: visible;
    }
    .nav-list li.with-submenu .submenu li {
        padding: 0;
    }
    .nav-list li.with-submenu .submenu a {
        color: #000000;
        display: block;
        padding: 8px 15px;
        transition: all 0.3s;
    }
    
    .nav-list li.with-submenu .submenu a:hover {
        background-color: rgba(49, 20, 50, 0.3);
    }
    /* .nav-list li.with-submenu .submenu a::after {
        display: none;
    } */
    .nav-list li.with-submenu > a {
        position: relative;
        z-index: 1;
    }
    .hamburger {
        display: none;
        z-index: 99;
    }
    .hamburger .line {
        width: 25px;
        height: 1.5px;
        background-color: #ffffff;
        display: block;
        margin: 5px 0;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    .hamburger .line:nth-child(2) {
        width: 15px;
    }
    .hamburger:hover {
        cursor: pointer;
    }
    .hamburger.is-active .line {
        background-color: #311432;
    }
    .hamburger.is-active .line:nth-child(2) {
        opacity: 0;
    }
    .hamburger.is-active .line:nth-child(1) {
        -webkit-transform: translateY(6.5px) rotate(45deg);
        -ms-transform: translateY(6.5px) rotate(45deg);
        -o-transform: translateY(6.5px) rotate(45deg);
        transform: translateY(6.5px) rotate(45deg);
    }
    .hamburger.is-active .line:nth-child(3) {
        -webkit-transform: translateY(-6.5px) rotate(-45deg);
        -ms-transform: translateY(-6.5px) rotate(-45deg);
        -o-transform: translateY(-6.5px) rotate(-45deg);
        transform: translateY(-6.5px) rotate(-45deg);
    }
    @media (max-width: 767px) {
        .header {
            padding: 10px 0;
        }
        .hamburger {
            display: block;
        }
        .nav-wrap {
            position: fixed;
            top: 0;
            right: -100%;
            transform: translateX(100%);
            background-color: #ffffff;
            transition: all 0.5s linear;
            max-width: 300px;
            width: 100%;
            height: 100%;
            box-shadow: 2px -5px 5px 3px #ccc;
            opacity: 0;
            visibility: hidden;
            z-index: 0;
        }
        .nav-wrap.is-open {
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
            right: 0;
            z-index: 9;
        }
        .nav-list {
            flex-direction: column;
            align-items: unset;
            opacity: 0;
            visibility: hidden;
            transition-delay: 0.5s;
            transition-duration: 1s;
            transition-property: all;
            padding: 10px;
        }
        .nav-wrap.is-open .nav-list {
            opacity: 1;
            visibility: visible;
        }
        .nav-list li {
            padding: 7px 10px;
        }
        .nav-list li a {
            color: #311432;
            text-align: left;
            display: inline-block;
            padding: 2px 0;
        }
        .nav-list li a::after {
            background-color: #311432;
        }
        .nav-list li.with-submenu {
            display: block;
        }
        .nav-list li.with-submenu::after {
            border-color: #311432;
            right: 10px;
            top: 12px;
        }
        .nav-list li.with-submenu:hover::after {
            transform: rotate(45deg);
            margin-top: 0;
        }
        .nav-list li.with-submenu.is-open::after {
            transform: rotate(225deg);
            margin-top: 5px;
        }
        .nav-list li.with-submenu .submenu {
            position: static;
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
            box-shadow: none;
            border-radius: 0;
            border-top: 1px solid #ccc;
            display: none;
            transition: auto;
            margin: 10px 0;
        }
        .nav-list li.with-submenu .submenu li {
            padding: 7px 10px;
        }
        .nav-list li.with-submenu .submenu li:hover a {
            background-color: transparent;
        }
        .nav-list li.with-submenu .submenu li a {
            display: inline-block;
            padding: 2px 0;
        }
        .nav-list li.with-submenu .submenu li a::after {
            display: block;
        }
    }
    
    `}</style>
</>
  )
}
