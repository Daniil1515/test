import React from 'react';
import '../../../App.scss'
import legend1 from "../../../img/legend1.svg";
import legend2 from "../../../img/legend2.svg";
import confirmedround from "../../../img/confirmedround.svg";
import confirmedskiped from "../../../img/confirmedskiped.svg";
import term1 from "../../../img/term1.svg";
import term2 from "../../../img/term2.svg";
import term3 from "../../../img/term2.svg";
import term4 from "../../../img/term3.svg";

const ShortcutsSelect = () => {
    return (
        <div>
            <div className="short__wrapper">
                <a href="#" className="shortcut__button"><span><svg width="23" height="15"
                                                                    viewBox="0 0 23 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
						<path
                            d="M22.9688 13.2656V1.73435C22.9688 1.04529 22.3734 0.482788 21.6422 0.482788H1.32656C0.595312 0.482788 0 1.04529 0 1.73435V13.2656C0 13.9547 0.595312 14.5172 1.32656 14.5172H21.6422C22.3734 14.5172 22.9688 13.9594 22.9688 13.2656ZM1.14844 13.2656V1.73435C1.14844 1.69216 1.21875 1.63123 1.32656 1.63123H21.6422C21.7547 1.63123 21.8203 1.69685 21.8203 1.73435V13.2656C21.8203 13.3078 21.75 13.3687 21.6422 13.3687H1.32656C1.21875 13.3687 1.14844 13.3078 1.14844 13.2656Z"
                            fill="#2D2D2D"/>
						<path
                            d="M4.13906 5.17498C4.53515 5.17498 4.85625 4.85388 4.85625 4.45779C4.85625 4.0617 4.53515 3.7406 4.13906 3.7406C3.74297 3.7406 3.42188 4.0617 3.42188 4.45779C3.42188 4.85388 3.74297 5.17498 4.13906 5.17498Z"
                            fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.7"/>
						<path
                            d="M7.07812 5.17498C7.47421 5.17498 7.79531 4.85388 7.79531 4.45779C7.79531 4.0617 7.47421 3.7406 7.07812 3.7406C6.68203 3.7406 6.36093 4.0617 6.36093 4.45779C6.36093 4.85388 6.68203 5.17498 7.07812 5.17498Z"
                            fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.7"/>
						<path
                            d="M10.0125 5.17498C10.4086 5.17498 10.7297 4.85388 10.7297 4.45779C10.7297 4.0617 10.4086 3.7406 10.0125 3.7406C9.61641 3.7406 9.29532 4.0617 9.29532 4.45779C9.29532 4.85388 9.61641 5.17498 10.0125 5.17498Z"
                            fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.7"/>
						<path
                            d="M12.9516 5.17498C13.3477 5.17498 13.6688 4.85388 13.6688 4.45779C13.6688 4.0617 13.3477 3.7406 12.9516 3.7406C12.5555 3.7406 12.2344 4.0617 12.2344 4.45779C12.2344 4.85388 12.5555 5.17498 12.9516 5.17498Z"
                            fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.7"/>
						<path
                            d="M15.8906 5.17498C16.2867 5.17498 16.6078 4.85388 16.6078 4.45779C16.6078 4.0617 16.2867 3.7406 15.8906 3.7406C15.4945 3.7406 15.1734 4.0617 15.1734 4.45779C15.1734 4.85388 15.4945 5.17498 15.8906 5.17498Z"
                            fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.7"/>
						<path
                            d="M18.8297 5.17498C19.2258 5.17498 19.5469 4.85388 19.5469 4.45779C19.5469 4.0617 19.2258 3.7406 18.8297 3.7406C18.4336 3.7406 18.1125 4.0617 18.1125 4.45779C18.1125 4.85388 18.4336 5.17498 18.8297 5.17498Z"
                            fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.7"/>
						<path
                            d="M5.61092 8.21723C6.00701 8.21723 6.32811 7.89613 6.32811 7.50003C6.32811 7.10394 6.00701 6.78284 5.61092 6.78284C5.21483 6.78284 4.89374 7.10394 4.89374 7.50003C4.89374 7.89613 5.21483 8.21723 5.61092 8.21723Z"
                            fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.7"/>
						<path
                            d="M8.54531 8.21723C8.9414 8.21723 9.2625 7.89613 9.2625 7.50003C9.2625 7.10394 8.9414 6.78284 8.54531 6.78284C8.14922 6.78284 7.82812 7.10394 7.82812 7.50003C7.82812 7.89613 8.14922 8.21723 8.54531 8.21723Z"
                            fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.7"/>
						<path
                            d="M11.4844 8.21723C11.8805 8.21723 12.2016 7.89613 12.2016 7.50003C12.2016 7.10394 11.8805 6.78284 11.4844 6.78284C11.0883 6.78284 10.7672 7.10394 10.7672 7.50003C10.7672 7.89613 11.0883 8.21723 11.4844 8.21723Z"
                            fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.7"/>
						<path
                            d="M14.4188 8.21723C14.8148 8.21723 15.1359 7.89613 15.1359 7.50003C15.1359 7.10394 14.8148 6.78284 14.4188 6.78284C14.0227 6.78284 13.7016 7.10394 13.7016 7.50003C13.7016 7.89613 14.0227 8.21723 14.4188 8.21723Z"
                            fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.7"/>
						<path
                            d="M17.3578 6.78284C16.9594 6.78284 16.6406 7.10628 16.6406 7.50003C16.6406 7.89847 16.9641 8.21723 17.3578 8.21723C17.7562 8.21723 18.075 7.89379 18.075 7.50003C18.075 7.10159 17.7562 6.78284 17.3578 6.78284Z"
                            fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.7"/>
						<path
                            d="M16.6078 9.97028H6.36089C6.04214 9.97028 5.78433 10.2281 5.78433 10.5468C5.78433 10.8656 6.04214 11.1234 6.36089 11.1234H16.6078C16.9265 11.1234 17.1843 10.8656 17.1843 10.5468C17.1843 10.2281 16.9265 9.97028 16.6078 9.97028Z"
                            fill="#2D2D2D" stroke="#2D2D2D" stroke-width="0.7"/>
						</svg></span> Shortcuts</a>
                <div className="hotkeys__wrapper">
                    <div className="hotkeys__tab">
                        <div className="elem__tab  current__tab" data-tab="tab__shortcuts">
                            <a href="#">SHORTCUTS</a>
                        </div>
                        <div className="elem__tab " data-tab="legend__shortcuts">
                            <a href="#">LEGEND</a>
                        </div>
                    </div>
                    <div className="legend__shortcuts hotkeys__container" style={{display:"none"}}>
                        <div className="elem__legend">
                            <p>Translation Status</p>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <span><img src={legend1} alt="legend"/></span>
                                </div>
                                <p>Need attention</p>
                            </div>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <span><img src={legend2} alt="legend"/></span>
                                </div>
                                <p>Draft</p>
                            </div>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <span><img src={confirmedround} alt="legend"/></span>
                                </div>
                                <p>Confirmed</p>
                            </div>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <span><img src={confirmedskiped} alt="legend"/></span>
                                </div>
                                <p>Confirmed skipped TM</p>
                            </div>
                        </div>

                        <div className="elem__legend">
                            <p>Segments status</p>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="legend__complete">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="legend__double">
                                    <p>Completed</p>
                                    <span>Completed or pre-confirmed</span>
                                </div>
                            </div>
                        </div>

                        <div className="elem__legend">
                            <p>Suggestion type</p>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="suggestion__legend suggestion__100">
                                        <span>100</span>
                                    </div>
                                </div>
                                <div className="suggestion__info">
                                    <p>Very good match</p>
                                    <span>100%-102%</span>
                                </div>
                            </div>

                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="suggestion__legend suggestion__75">
                                        <span>75</span>
                                    </div>
                                </div>
                                <div className="suggestion__info">
                                    <p>High fuzzy match</p>
                                    <span>75%-99%</span>
                                </div>
                            </div>


                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="suggestion__legend suggestion__50">
                                        <span>50</span>
                                    </div>
                                </div>
                                <div className="suggestion__info">
                                    <p>Low fuzzy match</p>
                                    <span>50%-74%</span>
                                </div>
                            </div>

                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="suggestion__legend suggestion__translation">
                                        <span>MT</span>
                                    </div>
                                </div>
                                <div className="suggestion__translation">
                                    <p>Machine translation</p>
                                </div>
                            </div>
                        </div>


                        <div className="elem__legend">
                            <p>Pre-translation type</p>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="pre__translate pre__100">
                                        <span>100</span>
                                    </div>
                                </div>
                                <div className="pretranslate__info">
                                    <p>Very good match</p>
                                    <span>100%-102%</span>
                                </div>
                            </div>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="pre__translate pre__75">
                                        <span>75</span>
                                    </div>
                                </div>
                                <div className="pretranslate__info">
                                    <p>High fuzzy match</p>
                                    <span>75%-99%</span>
                                </div>
                            </div>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="pre__translate pre__50">
                                        <span>50</span>
                                    </div>
                                </div>
                                <div className="pretranslate__info">
                                    <p>Low fuzzy match</p>
                                    <span>50%-74%</span>
                                </div>
                            </div>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="pre__translate machine__pre">
                                        <span>MT</span>
                                    </div>
                                </div>
                                <div className="machine__info">
                                    <p>Machine translation</p>
                                </div>
                            </div>
                        </div>


                        <div className="elem__legend">
                            <p>Term type</p>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="term__type term__approved">
                                        <span><img src={term1} alt="term"/></span>
                                    </div>
                                </div>
                                <div className="term__info">
                                    <span className="approved__term">Approved</span>
                                    <p>Correct and approved term translation</p>
                                </div>
                            </div>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="term__type term__not">
                                        <span><img src={term2} alt="term"/></span>
                                    </div>
                                </div>
                                <div className="term__info">
                                    <span className="notapproved__term">Not approved</span>
                                    <p>Term translation not approved yet</p>
                                </div>
                            </div>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="term__type term__forbidden">
                                        <span><img src={term3} alt="term"/></span>
                                    </div>
                                </div>
                                <div className="term__info">
                                    <span className="forbidden__term">Forbidden</span>
                                    <p>Forbidden and approved term translation</p>
                                </div>
                            </div>
                            <div className="legend__info">
                                <div className="legend__placeholder">
                                    <div className="term__type forbidden__not">
                                        <span><img src={term4} alt="term"/></span>
                                    </div>
                                </div>
                                <div className="term__info">
                                    <span className="forbidden__term--not">Forbidden, not approved</span>
                                    <p>Forbidden term translation not approved yet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inner__hotkeys--wrapper tab__shortcuts hotkeys__container">
                        <div className="elem__hotkey">
                            <p>Application shortcuts</p>
                            <div className="wrapper__hotkey">
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+T</span>
                                    </div>
                                    <p>Switch theme</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+G</span>
                                    </div>
                                    <p>Search</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+B</span>
                                    </div>
                                    <p>Search and replace</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+H</span>
                                    </div>
                                    <p>Help</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+Y</span>
                                    </div>
                                    <p>Compact view</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+V</span>
                                    </div>
                                    <p>Columns</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+U</span>
                                    </div>
                                    <p>Font size</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+P</span>
                                    </div>
                                    <p>Show/hide preview</p>
                                </div>
                            </div>
                        </div>


                        <div className="elem__hotkey">
                            <p>Segments shortcuts</p>
                            <div className="wrapper__hotkey">
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Ctrl+Enter</span>
                                    </div>
                                    <p>Save</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+Enter</span>
                                    </div>
                                    <p>Save without TM</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Shift+Enter</span>
                                    </div>
                                    <p>Save as draft</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Ctrl+Up</span>
                                    </div>
                                    <p>Previous</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Ctrl+Down</span>
                                    </div>
                                    <p>Next</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+V</span>
                                    </div>
                                    <p>Columns</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+U</span>
                                    </div>
                                    <p>Font size</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+P</span>
                                    </div>
                                    <p>Show/hide preview</p>
                                </div>
                            </div>
                        </div>


                        <div className="elem__hotkey">
                            <p>EDIT shortcuts</p>
                            <div className="wrapper__hotkey">
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Ctrl+B</span>
                                    </div>
                                    <p>Bold text format</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Ctrl+I</span>
                                    </div>
                                    <p>Italic text format</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Ctrl+U</span>
                                    </div>
                                    <p>Underline text format</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Ctrl+A</span>
                                    </div>
                                    <p>Select all text</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Ctrl+Z</span>
                                    </div>
                                    <p>Undo edit</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Ctrl+Shift+Z</span>
                                    </div>
                                    <p>Redo edit</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>F8</span>
                                    </div>
                                    <p>Insert tag</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>F9</span>
                                    </div>
                                    <p>Insert all tags</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>F10</span>
                                    </div>
                                    <p>Copy source to target</p>
                                </div>
                            </div>
                        </div>


                        <div className="elem__hotkey">
                            <p>Tools shortcuts</p>
                            <div className="wrapper__hotkey">
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+1</span>
                                    </div>
                                    <p>Suggestions</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+2</span>
                                    </div>
                                    <p>Terms</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+3</span>
                                    </div>
                                    <p>History</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+4</span>
                                    </div>
                                    <p>Concordance</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+5</span>
                                    </div>
                                    <p>Symbols</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+6</span>
                                    </div>
                                    <p>QA</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>F8</span>
                                    </div>
                                    <p>Insert tag</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>F9</span>
                                    </div>
                                    <p>Insert all tags</p>
                                </div>
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>F10</span>
                                    </div>
                                    <p>Copy source to target</p>
                                </div>
                            </div>
                        </div>


                        <div className="elem__hotkey">
                            <p>Tools Items</p>
                            <div className="wrapper__hotkey">
                                <div className="hotkey__info">
                                    <div className="hotkey__key">
                                        <span>Alt+1</span>
                                    </div>
                                    <p>*1-9 suggestion, term, history or concordance item</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortcutsSelect;