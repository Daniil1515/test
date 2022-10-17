import React from 'react';
import rightdrop from "../../../img/rightdrop.svg";
import logouticon from "../../../img/logouticon.svg";
import '../../../App.scss'


const FileSelect = () => {

    return (
        <div>
            <li className="droppable__menu">
                <a href="#">FILE <span><svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
							<path d="M4 4.65382L0 0.34613L8 0.34613L4 4.65382Z" fill="#9E9E9E"/>
							</svg>
							</span></a>
                <div  className="droppable__box">
                    <ul>
                        <li className="droppable__inner">
                            <a href="#">Package <span className="droppable__arrow"><img
                                src={rightdrop} alt="rightdrop"/></span></a>
                            <div className="droppable__sub">
                                <ul>
                                    <li><a href="#">Download</a></li>
                                    <li><a href="#">Upload</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="droppable__inner">
                            <a href="#">XLIFF <span className="droppable__arrow"><img
                                src={rightdrop} alt="rightdrop"/></span></a>
                            <div className="droppable__sub" style={{display:"none"}}>
                                <ul>
                                    <li><a href="#">Export</a></li>
                                    <li><a href="#">Import</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#"><span className="logout__button"><img src={logouticon}
                                                                              alt="logout"/></span> Logout</a>
                        </li>
                    </ul>
                </div>
            </li>

        </div>
    );
};

export default FileSelect;