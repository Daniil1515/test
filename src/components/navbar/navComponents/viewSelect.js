import React from 'react';
import '../../../App.scss'
import segment1 from "../../../img/segment1.svg";
import segment2 from "../../../img/segment2.svg";
import rightdrop from "../../../img/rightdrop.svg";
import segment3 from "../../../img/segment3.svg";
import segment4 from "../../../img/segment4.svg";
import preview1 from "../../../img/preview1.svg";
import preview2 from "../../../img/preview2.svg";

const ViewSelect = () => {
    return (
        <div>
            <li className="droppable__menu">
                <a href="#">VIEW <span><svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
									<path d="M4 4.65382L0 0.34613L8 0.34613L4 4.65382Z" fill="#9E9E9E"/>
									</svg>
									</span></a>
                <div className="droppable__box segments__box">
                    <div className="el__drop--box">
                        <p>SEGMENTS</p>
                        <div className="check__drop">
                            <a href="#">
                                            <span className="info__icon"><img src={segment1}
                                                                              alt="segment"/></span>
                                Compact
                                <span className="key__shortcut">Alt+Y</span>
                            </a>

                            <a href="#">
                                            <span className="info__icon"><img src={segment2}
                                                                              alt="segment"/></span>
                                Source
                                <span className="key__shortcut">Alt+V</span>
                            </a>

                            <a href="#" className="droppable__view">
                                <img src={rightdrop} alt="rightddrop"/>
                                <span className="info__icon"><img src={segment3} alt="segment"/></span>
                                Font size
                                <span className="key__shortcut">Alt+U</span>
                            </a>

                            <a href="#">
                                            <span className="info__icon"><img src={segment4}
                                                                              alt="segment"/></span>
                                Dark theme
                                <span className="key__shortcut">Alt+T</span>
                            </a>
                        </div>
                    </div>

                    <div className="el__drop--box">
                        <p>PREVIEW</p>
                        <div className="check__drop ">
                            <a href="#" className="check__active">
                                            <span className="info__icon"><img src={preview1}
                                                                              alt="segment"/></span>
                                Page
                                <span className="key__shortcut">Alt+Y</span>
                            </a>

                            <a href="#" className="check__active">
                                            <span className="info__icon"><img src={preview2}
                                                                              alt="segment"/></span>
                                Thumbnails
                                <span className="key__shortcut">Alt+V</span>
                            </a>

                            <a href="#" className="droppable__view">
                                <img src={rightdrop} alt="rightddrop"/>
                                <span className="info__icon"></span>
                                Origin
                            </a>

                            <a href="#" className="droppable__view">
                                <img src={rightdrop} alt="rightddrop"/>
                                <span className="info__icon"></span>
                                Position
                            </a>

                            <a href="#" className="droppable__view">
                                <img src={rightdrop} alt="rightddrop"/>
                                <span className="info__icon"></span>
                                Orientation
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default ViewSelect;