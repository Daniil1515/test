import React from 'react';
import '../../../App.scss'


const EditSelect = () => {
    return (
        <div>
            <li className="droppable__menu"><a href="#">EDIT <span><svg width="8" height="5"
                                                                        viewBox="0 0 8 5" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
						<path d="M4 4.65382L0 0.34613L8 0.34613L4 4.65382Z" fill="#9E9E9E"/>
						</svg>
						</span></a>

                <div className="droppable__box check__droppable">
                    <ul>
                        <li className="check__active">
                            <a href="#" data-check="search__field">
                                <input className="styled-checkbox" id="dcheck1" type="checkbox"
                                       value="search__input"/>
                                <label htmlFor="dcheck1">Search</label>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <input className="styled-checkbox" id="dcheck2" type="checkbox"
                                       value="value1"/>
                                <label htmlFor="dcheck2">Compact</label>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <input className="styled-checkbox" id="dcheck3" type="checkbox"
                                       value="value1"/>
                                <label htmlFor="dcheck3">Live view</label>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <input className="styled-checkbox" id="dcheck4" type="checkbox"
                                       value="value1"/>
                                <label htmlFor="dcheck4">Source text</label>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </div>
    );
};

export default EditSelect;