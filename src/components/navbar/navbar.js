import React from 'react';
import backicon from '../../img/backicon.svg'
import logoicon from '../../img/logoicon.svg'
import '../../App.scss'
import FileSelect from "./navComponents/fileSelect";
import EditSelect from "./navComponents/editSelect";
import ViewSelect from "./navComponents/viewSelect";
import HelpSelect from "./navComponents/helpSelect";
import ShortcutsSelect from "./navComponents/shortcutsSelect";

const Navbar = () => {
    return (
        <div className="tooltip__app">
            <div className="tooltip__header">
                <div className="left__tooltip">
                    <div className="back__tooltip">
                        <a href="#"><span><img src={backicon} alt="backicon"/></span> Job #111111</a>
                    </div>
                    <div className="tooltip__menu--small">
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                    <div className="tooltip__menu">
                        <ul>
                            <FileSelect/>
                            <EditSelect/>
                            <ViewSelect/>
                            <HelpSelect/>
                        </ul>
                    </div>
                </div>
                <div className="right__tooltip">
                    <div className="right__buttons">
                        <ShortcutsSelect/>


                        <a href="#" className="preview__button"><span><svg width="19" height="11" viewBox="0 0 19 11"
                                                                           fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
					<path
                        d="M9.96875 0.5C6.52966 0.5 3.41091 2.2536 1.10959 5.10192C0.921803 5.33528 0.921803 5.66129 1.10959 5.89465C3.41091 8.7464 6.52966 10.5 9.96875 10.5C13.4078 10.5 16.5266 8.7464 18.8279 5.89808C19.0157 5.66472 19.0157 5.33871 18.8279 5.10535C16.5266 2.2536 13.4078 0.5 9.96875 0.5ZM10.2155 9.02093C7.93254 9.15477 6.0473 7.40117 6.1909 5.27008C6.30873 3.51304 7.83681 2.08888 9.72205 1.97907C12.005 1.84523 13.8902 3.59883 13.7466 5.72992C13.6251 7.48353 12.097 8.90769 10.2155 9.02093ZM10.1013 7.3943C8.87148 7.46637 7.85522 6.52265 7.93622 5.37646C7.99882 4.42931 8.82361 3.66404 9.83988 3.60227C11.0697 3.5302 12.086 4.47392 12.005 5.62011C11.9387 6.57069 11.1139 7.33596 10.1013 7.3943Z"
                        fill="white"/>
					</svg>
					</span> Preview</a>
                    </div>
                    <div className="head__logo">
                        <a href="#">
                            <img src={logoicon} alt="logoicon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;