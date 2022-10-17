import React from 'react';
import '../../App.scss'
import updateicon from '../../img/updateicon.svg'
import closesearch from '../../img/closesearch.svg'
import submitsearch from '../../img/submitsearch.svg'
import filterarrow from '../../img/filterarrow.svg'
import searchresult1 from '../../img/searchresult1.svg'
import searchresult2 from '../../img/searchresult2.svg'
import ellipses from '../../img/ellipses.svg'
import spelling from '../../img/spelling.svg'
import commentgreen from '../../img/commentgreen.svg'
import iconsave1 from '../../img/iconsave1.svg'
import doubleicon from '../../img/doubleicon.svg'
import warnicon from '../../img/warnicon.svg'
import commentnew from '../../img/commentnew.svg'
import button1 from '../../img/button1.svg'
import button2 from '../../img/button2.svg'
import button3 from '../../img/button3.svg'
import controls1 from '../../img/controls1.svg'
import controls2 from '../../img/controls2.svg'
import controls3 from '../../img/controls3.svg'
import controls4 from '../../img/controls4.svg'
import controls5 from '../../img/controls5.svg'
import controls6 from '../../img/controls6.svg'
import controlsdots from '../../img/controlsdots.svg'
import saveicon from '../../img/saveicon.svg'
import dropdownarrow from '../../img/dropdownarrow.svg'
import iconsave2 from '../../img/iconsave2.svg'
import iconsave3 from '../../img/iconsave3.svg'
import historyimage from '../../img/historyimage.png'
import closeicon from '../../img/closeicon.svg'
import badgeicon from '../../img/badgeicon.svg'
import identical from '../../img/identical.svg'
import termicon from '../../img/termicon.svg'
import drafticon from '../../img/drafticon.svg'
import commentwatched from '../../img/commentwatched.svg'
import vertified from '../../img/vertified.svg'
import attention from '../../img/attention.svg'


const Centralpart = () => {
    return (

            <div className="splitter_panel tool__main--">
                <div className="tooltip__main--container right_panel">
                    <div className="tooltip__main">
                        <div className="progress__tooltip">
                            <div className="progress__inner">
                                <p>Translation</p>
                                <div className="progress__bar">
                                    <div className="active__progress" style={{width: '20%'}}/>
                                </div>
                                <div className="progress__percent">
                                    <span>65%</span>
                                </div>
                                <div className="progress__words">
                                    <p>756/1365 words</p>
                                </div>
                                <div className="progress__update">
                                    <a href="#"><img src={updateicon} alt="updateicon"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="search__table--wrapper" style={{display: 'none'}}>
                            <div className="search__head">
                                <div className="seach__elements">
                                    <input type="text" placeholder/>
                                    <a href="#"><img src={closesearch} alt="closesearch"/></a>
                                </div>
                                <div className="search__left">
                                    <input type="text" placeholder="Search English-United Kingdom"/>
                                    <a href="#">
                                        <img src={submitsearch} alt="submitsearch"/>
                                    </a>
                                </div>
                                <div className="search__right">
                                    <input type="text" placeholder="Target Danish"/>
                                    <a href="#">
                                        <img src={submitsearch} alt="submitsearch"/>
                                    </a>
                                </div>
                                <div className="search__filter">
                                    <a href="#"><span><svg width={14} height={15} viewBox="0 0 14 15" fill="none"
                                                           xmlns="http://www.w3.org/2000/svg"><path
                                        d="M13 0.25H1C0.58525 0.25 0.25 0.58525 0.25 1V2.9425C0.25 3.33475 0.40975 3.72025 0.68725 3.99775L4.75 8.0605V13.75C4.75 14.0103 4.885 14.251 5.10625 14.3883C5.22625 14.4625 5.36275 14.5 5.5 14.5C5.61475 14.5 5.7295 14.4738 5.83525 14.4213L8.83525 12.9213C9.0895 12.7938 9.25 12.5343 9.25 12.25V8.0605L13.3127 3.99775C13.5903 3.72025 13.75 3.33475 13.75 2.9425V1C13.75 0.58525 13.4148 0.25 13 0.25ZM7.96975 7.21975C7.82875 7.36 7.75 7.5505 7.75 7.75V11.7865L6.25 12.5365V7.75C6.25 7.5505 6.17125 7.36 6.03025 7.21975L1.75 2.9425V1.75H12.2507L12.2523 2.93725L7.96975 7.21975Z"
                                        fill="#9E9E9E"/></svg></span> Filter <img src={filterarrow} alt="filterarrow"/></a>
                                    <div className="search__dropdown">
                                        <ul>
                                            <li>
                                                <a href="#"><p>All</p> <p><input type="radio" id="check1"
                                                                                 name="radio-group"/><label
                                                    htmlFor="check1"/></p></a>
                                            </li>
                                            <li>
                                                <a href="#"><p>Initial</p> <p><input type="radio" id="check2"
                                                                                     name="radio-group"/><label
                                                    htmlFor="check2"/></p></a>
                                            </li>
                                            <li>
                                                <a href="#"><p>Draft</p> <p><input type="radio" id="check3"
                                                                                   name="radio-group"/><label
                                                    htmlFor="check3"/></p></a>
                                            </li>
                                            <li>
                                                <a href="#"><p>Confirmed</p> <p><input type="radio" id="check4"
                                                                                       name="radio-group"/><label
                                                    htmlFor="check4"/></p></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="search__replace">
                                    <div className="replace__tooltip" style={{display: 'none'}}>
                                        <p>Show replace option</p>
                                    </div>
                                    <a href="#">
                                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.6214 5.67848L14.1499 6.65408L13.2228 6.52684L13.1688 7.64317L15.449 7.95617L16.4323 5.87524L15.4678 5.31063L15.068 6.15673L14.5395 5.18113C13.1816 2.67456 10.2235 1.6393 7.94543 2.87341L8.49268 3.8836C10.2645 2.92375 12.5652 3.72893 13.6214 5.67848Z"
                                                fill="#9E9E9E"/>
                                            <path
                                                d="M4.3741 12.3197L3.8406 11.3469L4.76836 11.4694L4.81658 10.3527L2.5348 10.0515L1.56215 12.1374L2.52958 12.6971L2.92507 11.8489L3.45857 12.8218C4.8293 15.3214 7.79264 16.3414 10.0643 15.0957L9.51193 14.0883C7.74501 15.0572 5.44022 14.2639 4.3741 12.3197Z"
                                                fill="#9E9E9E"/>
                                            <path
                                                d="M7.26743 9.05416L6.30283 6.58007H2.60959L1.66481 9.05416H-0.00012207L3.61383 0.108459H5.33162L8.94557 9.05416H7.26743ZM5.8866 5.32475L4.98146 2.89942C4.91539 2.73692 4.82289 2.48098 4.70397 2.1316C4.58945 1.78222 4.51017 1.52628 4.46612 1.36378C4.3472 1.86347 4.17322 2.40988 3.94418 3.00301L3.07207 5.32475H5.8866Z"
                                                fill="#9E9E9E"/>
                                            <path
                                                d="M11.1821 9.05432H13.9606C15.2495 9.05432 16.1799 9.23381 16.7519 9.59278C17.328 9.95175 17.6161 10.5188 17.6161 11.2938C17.6161 11.8159 17.4753 12.2504 17.1936 12.5971C16.9119 12.9438 16.5064 13.1621 15.9772 13.2518V13.313C16.6345 13.4313 17.1168 13.6659 17.4241 14.0167C17.7356 14.3634 17.8914 14.8346 17.8914 15.4301C17.8914 16.2337 17.5969 16.864 17.0079 17.3208C16.4232 17.7736 15.608 18 14.5624 18H11.1821V9.05432ZM12.7122 12.7501H14.1847C14.8249 12.7501 15.2922 12.6542 15.5867 12.4625C15.8812 12.2667 16.0284 11.9363 16.0284 11.4713C16.0284 11.0511 15.8684 10.7472 15.5483 10.5595C15.2324 10.3719 14.7288 10.2781 14.0374 10.2781H12.7122V12.7501ZM12.7122 13.9371V16.7701H14.3383C14.9785 16.7701 15.4608 16.6539 15.7852 16.4214C16.1138 16.1848 16.2781 15.8136 16.2781 15.3077C16.2781 14.8427 16.1117 14.498 15.7787 14.2737C15.4458 14.0493 14.9401 13.9371 14.2615 13.9371H12.7122Z"
                                                fill="#9E9E9E"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="search__droppable">
                                <div className="replace__fields">
                                    <div className="replace__check">
                                        <ul>
                                            <li>
                                                <input className="styled-checkbox" id="styled-checkbox-1"
                                                       type="checkbox" defaultValue="value1"/>
                                                <label htmlFor="styled-checkbox-1">Whole words</label>
                                            </li>
                                            <li>
                                                <input className="styled-checkbox" id="styled-checkbox-2"
                                                       type="checkbox" defaultValue="value1"/>
                                                <label htmlFor="styled-checkbox-2">Case sensetive</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="replace__form">
                                        <div className="replace__field">
                                            <svg width={18} height={18} viewBox="0 0 18 18" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.6214 5.67848L14.1499 6.65408L13.2228 6.52684L13.1688 7.64317L15.449 7.95617L16.4323 5.87524L15.4678 5.31063L15.068 6.15673L14.5395 5.18113C13.1816 2.67456 10.2235 1.6393 7.94543 2.87341L8.49268 3.8836C10.2645 2.92375 12.5652 3.72893 13.6214 5.67848Z"
                                                    fill="#9E9E9E"/>
                                                <path
                                                    d="M4.3741 12.3197L3.8406 11.3469L4.76836 11.4694L4.81658 10.3527L2.5348 10.0515L1.56215 12.1374L2.52958 12.6971L2.92507 11.8489L3.45857 12.8218C4.8293 15.3214 7.79264 16.3414 10.0643 15.0957L9.51193 14.0883C7.74501 15.0572 5.44022 14.2639 4.3741 12.3197Z"
                                                    fill="#9E9E9E"/>
                                                <path
                                                    d="M7.26743 9.05416L6.30283 6.58007H2.60959L1.66481 9.05416H-0.00012207L3.61383 0.108459H5.33162L8.94557 9.05416H7.26743ZM5.8866 5.32475L4.98146 2.89942C4.91539 2.73692 4.82289 2.48098 4.70397 2.1316C4.58945 1.78222 4.51017 1.52628 4.46612 1.36378C4.3472 1.86347 4.17322 2.40988 3.94418 3.00301L3.07207 5.32475H5.8866Z"
                                                    fill="#9E9E9E"/>
                                                <path
                                                    d="M11.1821 9.05432H13.9606C15.2495 9.05432 16.1799 9.23381 16.7519 9.59278C17.328 9.95175 17.6161 10.5188 17.6161 11.2938C17.6161 11.8159 17.4753 12.2504 17.1936 12.5971C16.9119 12.9438 16.5064 13.1621 15.9772 13.2518V13.313C16.6345 13.4313 17.1168 13.6659 17.4241 14.0167C17.7356 14.3634 17.8914 14.8346 17.8914 15.4301C17.8914 16.2337 17.5969 16.864 17.0079 17.3208C16.4232 17.7736 15.608 18 14.5624 18H11.1821V9.05432ZM12.7122 12.7501H14.1847C14.8249 12.7501 15.2922 12.6542 15.5867 12.4625C15.8812 12.2667 16.0284 11.9363 16.0284 11.4713C16.0284 11.0511 15.8684 10.7472 15.5483 10.5595C15.2324 10.3719 14.7288 10.2781 14.0374 10.2781H12.7122V12.7501ZM12.7122 13.9371V16.7701H14.3383C14.9785 16.7701 15.4608 16.6539 15.7852 16.4214C16.1138 16.1848 16.2781 15.8136 16.2781 15.3077C16.2781 14.8427 16.1117 14.498 15.7787 14.2737C15.4458 14.0493 14.9401 13.9371 14.2615 13.9371H12.7122Z"
                                                    fill="#9E9E9E"/>
                                            </svg>
                                            <input type="text" placeholder="Replace"/>
                                        </div>
                                        <input type="submit" defaultValue="Replace" disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className="content__search--result">
                                <div className="elem__search--result">
                                    <span>2</span>
                                    <div className="search__desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.</p>
                                    </div>
                                    <div className="search__desc search__picked">
                                        <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</span> veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. </p>
                                    </div>
                                    <div className="search__details">
                                        <p><img src={searchresult1} alt="searchresut"/></p>
                                        <span/>
                                        <p><img src={searchresult2} alt="searchresult"/></p>
                                    </div>
                                </div>
                                <div className="elem__search--result">
                                    <span>3</span>
                                    <div className="search__desc">
                                        <p> Lorem ipsum dolor sit amet, </p>
                                    </div>
                                    <div className="search__desc">
                                        <p>Lorem ipsum dolor sit amet, </p>
                                    </div>
                                    <div className="search__details">
                                        <p><img src={searchresult1} alt="searchresut"/></p>
                                        <span/>
                                        <p><img src={searchresult2} alt="searchresult"/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tooltip__table--wrapper">
                            <div className="tooltip__table">
                                <table cellSpacing={0}>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="counter__tooltip"><p>1</p></div>
                                        </td>
                                        <td>
                                            <div className="full__translation">
                                                <div className="full__top">
                                                    <div className="full__top-left">
                                                        <div className="full__left--left">
                                                            <div className="lang__info">
                                                                <span>English  - United Kingdom</span>
                                                                <div className="more__lang">
                                                                    <a href="#" data-more="more1"
                                                                       className="more__button"><img src={ellipses}
                                                                                                     alt="ellipses"/></a>
                                                                    <div className="lang__list" data-more="more1">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div className="list__image">
                                                                                        <img src={spelling}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Check spelling</p>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+J</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="lang__comment">
                                                                                    <div className="list__image">
                                                                                        <img src={commentgreen}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Add comment</p>
                                                                                        <span>	Mark text first</span>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+K</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment__lang" data-more="more1">
                                                                        <form action>
                                                                            <div className="comment__field">
                                                                                <input type="text"
                                                                                       placeholder="Type comment..."/>
                                                                            </div>
                                                                            <div className="comment__list">
                                                                                <p>For whom comment is?</p>
                                                                                <div className="list__comment--inner">
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment1"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"
                                                                                                defaultChecked/>
                                                                                            <label htmlFor="comment1">Justas
                                                                                                J. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Project manager</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment2"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment2">Lukas
                                                                                                B. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Translator</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment3"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment3">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment4"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment4">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment5"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment5">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment6"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment6">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment7"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment7">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment8"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment8">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="comment__controls">
                                                                                    <input type="submit"
                                                                                           defaultValue="Comment"/>
                                                                                    <a href="#">Cancel</a>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="translation__text">
                                                                <p contentEditable="true"><span
                                                                    className="left__quote">1</span>Lorem ipsum dolor
                                                                    sit amet consectetur adipisicing elit. Minima odit
                                                                    nobis fugit debitis consectetur optio, sed, possimus
                                                                    ea quidem incidunt deleniti earum eius cum
                                                                    temporibus nesciunt recusandae accusamus pariatur
                                                                    aperiam ut, aliquid similique. Magnam illum
                                                                    excepturi, rerum deleniti fugit quidem.<span
                                                                        className="right__quote"><span
                                                                        className="quote__right--inner">1 </span><span
                                                                        className="quote__end"><img
                                                                        src="img/quoteicon.svg" alt=""/></span></span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="full__left--right">
                                                            <div className="lang__info">
                                                                <span>Danish </span>
                                                                <div className="more__lang">
                                                                    <a href="#" data-more="more2"
                                                                       className="more__button"><img src={ellipses}
                                                                                                     alt="ellipses"/></a>
                                                                    <div className="lang__list" data-more="more2">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div className="list__image">
                                                                                        <img src={spelling}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Check spelling</p>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+J</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="lang__comment">
                                                                                    <div className="list__image">
                                                                                        <img src={commentgreen}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Add comment</p>
                                                                                        <span>	Mark text first</span>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+K</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment__lang" data-more="more2">
                                                                        <form action>
                                                                            <div className="comment__field">
                                                                                <input type="text"
                                                                                       placeholder="Type comment..."/>
                                                                            </div>
                                                                            <div className="comment__list">
                                                                                <p>For whom comment is?</p>
                                                                                <div className="list__comment--inner">
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment11"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"
                                                                                                defaultChecked/>
                                                                                            <label htmlFor="comment11">Justas
                                                                                                J. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Project manager</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment22"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment22">Lukas
                                                                                                B. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Translator</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment33"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment33">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment44"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment44">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment55"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment55">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment66"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment66">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment77"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment77">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment88"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment88">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="comment__controls">
                                                                                    <input type="submit"
                                                                                           defaultValue="Comment"/>
                                                                                    <a href="#">Cancel</a>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="translation__text">
                                                                <p contentEditable="true"><span
                                                                    className="double__quote"><span
                                                                    className="left__quote">1</span> <span
                                                                    className="right__quote">1</span></span>Lorem ipsum
                                                                    dolor sit amet consectetur adipisicing elit. Minima
                                                                    odit nobis fugit debitis consectetur optio, sed,
                                                                    possimus ea quidem incidunt deleniti earum eius cum
                                                                    temporibus nesciunt recusandae accusamus pariatur
                                                                    aperiam ut, aliquid similique. Magnam illum
                                                                    excepturi, rerum deleniti fugit quidem.<span
                                                                        className="right__quote"><span
                                                                        className="left__quote">2</span><span
                                                                        className="quote__icon"><img
                                                                        src="img/quotered.svg" alt=""/></span></span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="full__top--right">
                                                        <div className="info__top--right">
                                                            <div className="column__info">
                                                                <div className="status__translate">
                                                                    <div className="status__info"
                                                                         style={{display: 'none'}}>
                                                                        <p>Confirmed</p>
                                                                    </div>
                                                                    <img src={iconsave1} alt="confirmedicon"/>
                                                                </div>
                                                                <div className="double__arrow">
                                                                    <a href="#" className="double__bottom">
                                                                        <img src={doubleicon} alt="doubleicon"/>
                                                                    </a>
                                                                    <div className="double__placeholder"
                                                                         style={{display: 'none'}}>
                                                                        <p>2 repetitions</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="column__info">
                                                                <div className="status_col">
                                                                    <span><img src={warnicon} alt="warnicon"/></span>
                                                                </div>
                                                                <div className="status__info status__small">
                                                                    <p>MT</p>
                                                                    <div className="status__float"
                                                                         style={{display: 'none'}}>
                                                                        <p>Machine translation</p>
                                                                    </div>
                                                                </div>
                                                                <div className="status__comment">
                                                                    <a href="#"><img src={commentnew} alt="comment"/>
                                                                        <span>1</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="full__bottom">
                                                    <div className="translate__controls">
                                                        <div className="controls__left">
                                                            <div className="controls__buttons--text">
                                                                <div className="small__tag">
                                                                    <a href="#"><img src={button1} alt="button"/></a>
                                                                    <div className="tag__float">
                                                                        <p>Bold text format <span>Ctrl+B</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#"><img src={button2} alt="button"/></a>
                                                                    <div className="tag__float">
                                                                        <p>Italic text format <span>Ctrl+i</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#"><img src={button3} alt="button"/></a>
                                                                    <div className="tag__float">
                                                                        <p>Underline text format <span>Ctrl+U</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="controls__small">
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls1} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Remove formating <span>F7</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls2} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Insert tag <span>F8</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls3} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Copy source to target <span>F10</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls4} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Remove tags <span>F6</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls5} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Undo edit <span>Ctrl + Z</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#" className="disabled__button">
                                                                        <img src={controls6} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Redo edit <span>Ctrl+Shift+Z</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="controls__more">
                                                                <a href="#" data-preview="controls1">
                                                                    <img src={controlsdots} alt="controls"/>
                                                                </a>
                                                            </div>
                                                            <div className="controls__words">
                                                                <p>69/1024</p>
                                                            </div>
                                                        </div>
                                                        <div className="controls__right">
                                                            <div className="controls__save">
                                                                {/* <a href="#"><span><img src="img/saveicon.svg" alt="save"></span> Save <span class="droppable__controls"><img src="img/dropdownarrow.svg" alt=""></span></a> */}
                                                                <div className="controls__save--button">
                                                                    <a href="#"><img src={saveicon}
                                                                                     alt="saveicon"/> Save</a>
                                                                    <a href="#" className="droppable__controls"><img
                                                                        src={dropdownarrow} alt=""/></a>
                                                                </div>
                                                                <div className="controls__drop">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#" data-src="img/iconsave1.svg"
                                                                               data-text="Saved">
                                                                                <span
                                                                                    className="controls__info"><span><img
                                                                                    src={iconsave1}
                                                                                    alt="iconsave"/></span> Save</span>
                                                                                <span className="hotkey__controls">Ctrl + Enter</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" data-src="img/iconsave2.svg"
                                                                               data-text="Saved without TM">
                                                                                <span
                                                                                    className="controls__info"><span><img
                                                                                    src={iconsave2}
                                                                                    alt="iconsave"/></span> Save without TM</span>
                                                                                <span className="hotkey__controls">Alt + Enter</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" data-src="img/iconsave3.svg"
                                                                               data-text="Draft">
                                                                                <span
                                                                                    className="controls__info"><span><img
                                                                                    src={iconsave3}
                                                                                    alt="iconsave"/></span> Save as draft</span>
                                                                                <span className="hotkey__controls">Shift + Enter</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="controls__errors">
                                                                <div className="elem__error">
                                                                    <p><span><img src={warnicon} alt=""/></span> 2</p>
                                                                </div>
                                                                <div className="elem__error">
                                                                    <p><span><img src={warnicon} alt=""/></span> Missing
                                                                        formattings</p>
                                                                </div>
                                                                <div className="elem__error">
                                                                    <p><span><img src={warnicon}
                                                                                  alt=""/></span> Identical text</p>
                                                                </div>
                                                                <div className="elem__error">
                                                                    <p><span><img src={warnicon} alt=""/></span> text
                                                                        info 3</p>
                                                                </div>
                                                                <div className="elem__error">
                                                                    <p><span><img src={warnicon} alt=""/></span>text
                                                                        info 20</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="translate__details details__active">
                                                        <a href="#">Show less</a>
                                                    </div>
                                                    <div className="translate__suggestions">
                                                        <ul>
                                                            <li><a href="#"
                                                                   data-switcher="suggestions__table">SUGGESTIONS <span>2</span></a>
                                                            </li>
                                                            <li><a href="#"
                                                                   data-switcher="term__wrapper">TERM <span>2</span></a>
                                                            </li>
                                                            <li><a href="#"
                                                                   data-switcher="history__wrapper">HISTORY <span>2</span></a>
                                                            </li>
                                                            <li><a href="#"
                                                                   data-switcher="concordance__wrapper">CONCORDANCE</a>
                                                            </li>
                                                            <li><a href="#" data-switcher="symbols__wrapper">SYMBOLS</a>
                                                            </li>
                                                            <li><a href="#" data-switcher="qa__block">QA <span>17</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="history__wrapper" style={{display: 'none'}}>
                                                        <div className="elem__history">
                                                            <div className="history__number">
                                                                <span>1</span>
                                                            </div>
                                                            <div className="history__info">
                                                                <div className="history__image">
                                                                    <img src={historyimage} alt="historyimage"/>
                                                                </div>
                                                                <div className="history__details">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur <span
                                                                        className="history__approved">ipsum</span> <span
                                                                        className="history__not--approved">amet</span> sed
                                                                        do eiusmod tempor incididunt ut labore et dolore
                                                                        magna aliqua. Ut enim ad minim veniam, quis
                                                                        nostrud</p>
                                                                    <span>Nov 25. 2019, 1:29 PM posteditin LW internal</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="elem__history">
                                                            <div className="history__number">
                                                                <span>2</span>
                                                            </div>
                                                            <div className="history__info">
                                                                <div className="history__image">
                                                                    <img src={historyimage} alt="historyimage"/>
                                                                </div>
                                                                <div className="history__details">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit, </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="concordance__wrapper" style={{display: 'none'}}>
                                                        <form action>
                                                            <div className="concordance__search">
                                                                <input type="text" placeholder="Source"/>
                                                                <input type="submit" defaultValue/>
                                                                <a href="#">
                                                                    <img src={closeicon} alt="closeicon"/>
                                                                </a>
                                                            </div>
                                                            <div className="concordance__container">
                                                                <div className="concordance__elem">
                                                                    <div className="el__half">
                                                                        <span>1</span>
                                                                        <p><span className="searched__span">Translation memory</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="el__half">
                                                                        <p>Lorem ipsum dolor sit a</p>
                                                                    </div>
                                                                </div>
                                                                <div className="concordance__elem">
                                                                    <div className="el__half">
                                                                        <span>2</span>
                                                                        <p><span className="numb__span">1</span><span
                                                                            className="numb__span">2</span> A FAST <span
                                                                            className="searched__span">TRANSLATION</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="el__half">
                                                                        <p><span className="numb__span">1</span><span
                                                                            className="numb__span">2</span> Lorem ipsum
                                                                            dolor sit a</p>
                                                                    </div>
                                                                </div>
                                                                <div className="concordance__elem">
                                                                    <div className="el__half">
                                                                        <span>1</span>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur sed
                                                                            do eiusmod tempor incididunt ut labore et
                                                                            dolore magna aliqua. Ut enim ad minim
                                                                            veniam, quis nostrud</p>
                                                                    </div>
                                                                    <div className="el__half">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur sed
                                                                            do eiusmod tempor incididunt ut labore et
                                                                            dolore magna aliqua. Ut enim ad minim
                                                                            veniam, quis nostrud</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="qa__block" style={{display: 'none'}}>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched trailing punctuation</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched trailing punctuation</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched trailing white spaces</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched multiple white spaces</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched numbers</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={identical} alt="badge"/></span>
                                                                <p>Identical text</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Repeated words</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="suggestions__table" style={{display: 'none'}}>
                                                        <div className="suggestion__elem">
                                                            <div className="suggestion__left">
                                                                <div className="suggest__el">
                                                                    <span>1</span>
                                                                    <p>Sitecore</p>
                                                                </div>
                                                                <div className="suggest__el">
                                                                    <p>Sitecore</p>
                                                                </div>
                                                            </div>
                                                            <div className="suggestion__right">
                                                                <div className="suggestion__info">
                                                                    <span>MT</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="term__wrapper">
                                                        <div className="term__elem">
                                                            <div className="term__double">
                                                                <div className="el__term">
                                                                    <div className="term__left">
                                                                        <span>1</span>
                                                                        <p><span
                                                                            className="term__approved">Translation</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="term__right">
                                                                        <div className="term__status">
                                                                            <p>Approved</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="el__term">
                                                                    <div className="term__left">
                                                                        <p><span
                                                                            className="term__approved">Translation</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="term__right">
                                                                        <div className="term__status">
                                                                            <p>Approved</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="term__status">
                                                                <div className="term__status--info">
                                                                    <img src={termicon} alt="termicon"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="symbols__wrapper" style={{display: 'none'}}>
                                                        <div className="symbols__elem">
                                                            <div className="symbols__head">
                                                                <span>Extended Latin</span>
                                                            </div>
                                                            <div className="symbols__container">
                                                                <div className="el__symbol">
                                                                    <span>Ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="symbols__elem">
                                                            <div className="symbols__head">
                                                                <span>Signs</span>
                                                            </div>
                                                            <div className="symbols__container">
                                                                <div className="el__symbol">
                                                                    <span>-</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>—</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>§</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>©</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>™</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>®</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>¿</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>:</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>«</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>»</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>“</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>„</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="symbols__elem">
                                                            <div className="symbols__head">
                                                                <span>Currencies</span>
                                                            </div>
                                                            <div className="symbols__container">
                                                                <div className="el__symbol">
                                                                    <span>€</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>¢</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>₤</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>Ұ</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="counter__tooltip"><p>2</p></div>
                                        </td>
                                        <td>
                                            <div className="full__translation">
                                                <div className="full__top">
                                                    <div className="full__top-left">
                                                        <div className="full__left--left">
                                                            <div className="lang__info">
                                                                <span>English  - United Kingdom </span>
                                                                <div className="more__lang">
                                                                    <a href="#" data-more="more3"
                                                                       className="more__button"><img src={ellipses}
                                                                                                     alt="ellipses"/></a>
                                                                    <div className="lang__list" data-more="more3">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div className="list__image">
                                                                                        <img src={spelling}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Check spelling</p>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+J</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="lang__comment">
                                                                                    <div className="list__image">
                                                                                        <img src={commentgreen}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Add comment</p>
                                                                                        <span>	Mark text first</span>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+K</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment__lang" data-more="more3">
                                                                        <form action>
                                                                            <div className="comment__field">
                                                                                <input type="text"
                                                                                       placeholder="Type comment..."/>
                                                                            </div>
                                                                            <div className="comment__list">
                                                                                <p>For whom comment is?</p>
                                                                                <div className="list__comment--inner">
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment111"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"
                                                                                                defaultChecked/>
                                                                                            <label htmlFor="comment111">Justas
                                                                                                J. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Project manager</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment222"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment222">Lukas
                                                                                                B. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Translator</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment333"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment333">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment444"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment444">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment555"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment555">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment666"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment666">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment777"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment777">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment888"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment888">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="comment__controls">
                                                                                    <input type="submit"
                                                                                           defaultValue="Comment"/>
                                                                                    <a href="#">Cancel</a>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="translation__text">
                                                                <p contentEditable="true">Lorem ipsum dolor sit amet
                                                                    consectetur adipisicing elit. Minima odit nobis
                                                                    fugit debitis consectetur optio, sed, possimus ea
                                                                    quidem incidunt deleniti earum eius cum temporibus
                                                                    nesciunt recusandae accusamus pariatur aperiam ut,
                                                                    aliquid similique. Magnam illum excepturi, rerum
                                                                    deleniti fugit quidem.</p>
                                                            </div>
                                                        </div>
                                                        <div className="full__left--right">
                                                            <div className="lang__info">
                                                                <span>Danish </span>
                                                                <div className="more__lang">
                                                                    <a href="#" data-more="more4"
                                                                       className="more__button"><img src={ellipses}
                                                                                                     alt="ellipses"/></a>
                                                                    <div className="lang__list" data-more="more4">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div className="list__image">
                                                                                        <img src={spelling}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Check spelling</p>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+J</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="lang__comment">
                                                                                    <div className="list__image">
                                                                                        <img src={spelling}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Add comment</p>
                                                                                        <span>	Mark text first</span>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+K</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment__lang" data-more="more4">
                                                                        <form action>
                                                                            <div className="comment__field">
                                                                                <input type="text"
                                                                                       placeholder="Type comment..."/>
                                                                            </div>
                                                                            <div className="comment__list">
                                                                                <p>For whom comment is?</p>
                                                                                <div className="list__comment--inner">
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment1111"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"
                                                                                                defaultChecked/>
                                                                                            <label
                                                                                                htmlFor="comment1111">Justas
                                                                                                J. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Project manager</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment2222"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment2222">Lukas
                                                                                                B. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Translator</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment3333"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment3333">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment4444"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment4444">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment5555"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment5555">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment6666"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment6666">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment7777"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment7777">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment8888"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment8888">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="comment__controls">
                                                                                    <input type="submit"
                                                                                           defaultValue="Comment"/>
                                                                                    <a href="#">Cancel</a>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="translation__text">
                                                                <p contentEditable="true">Lorem ipsum dolor sit amet
                                                                    consectetur adipisicing elit. Minima odit nobis
                                                                    fugit debitis consectetur optio, sed, possimus ea
                                                                    quidem incidunt deleniti earum eius cum temporibus
                                                                    nesciunt recusandae accusamus pariatur aperiam ut,
                                                                    aliquid similique. Magnam illum excepturi, rerum
                                                                    deleniti fugit quidem.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="full__top--right">
                                                        <div className="info__top--right">
                                                            <div className="column__info">
                                                                <div className="status__translate">
                                                                    <div className="status__info"
                                                                         style={{display: 'none'}}>
                                                                        <p>Draft</p>
                                                                    </div>
                                                                    <img src={drafticon} alt="confirmedicon"/>
                                                                </div>
                                                                <div className="double__arrow">
                                                                    <a href="#" className="double__bottom">
                                                                        <img src={doubleicon} alt="doubleicon"/>
                                                                    </a>
                                                                    <div className="double__placeholder"
                                                                         style={{display: 'none'}}>
                                                                        <p>2 repetitions</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="column__info">
                                                                <div className="status_col">
                                                                    <span><img src={warnicon} alt="warnicon"/></span>
                                                                </div>
                                                                <div className="status__info status__small">
                                                                    <p>MT</p>
                                                                    <div className="status__float"
                                                                         style={{display: 'none'}}>
                                                                        <p>Machine translation</p>
                                                                    </div>
                                                                </div>
                                                                <div className="status__comment comment__old">
                                                                    <a href="#"><img src={commentwatched}
                                                                                     alt="comment"/> <span>1</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="full__bottom">
                                                    <div className="translate__controls">
                                                        <div className="controls__left">
                                                            <div className="controls__buttons--text">
                                                                <div className="small__tag">
                                                                    <a href="#"><img src={button1} alt="button"/></a>
                                                                    <div className="tag__float">
                                                                        <p>Bold text format <span>Ctrl+B</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#"><img src={button2} alt="button"/></a>
                                                                    <div className="tag__float">
                                                                        <p>Italic text format <span>Ctrl+i</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#"><img src={button3} alt="button"/></a>
                                                                    <div className="tag__float">
                                                                        <p>Underline text format <span>Ctrl+U</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="controls__small">
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls1} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Remove formating <span>F7</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls2} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Insert tag <span>F8</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls3} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Copy source to target <span>F10</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls4} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Remove tags <span>F6</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls5} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Undo edit <span>Ctrl + Z</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#" className="disabled__button">
                                                                        <img src={controls6} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Redo edit <span>Ctrl+Shift+Z</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="controls__more">
                                                                <a href="#" data-preview="controls1">
                                                                    <img src={controlsdots} alt="controls"/>
                                                                </a>
                                                            </div>
                                                            <div className="controls__words">
                                                                <p>69/1024</p>
                                                            </div>
                                                        </div>
                                                        <div className="controls__right">
                                                            <div className="verified__info">
                                                                <span><img src={vertified} alt="verified"/> 1</span>
                                                            </div>
                                                            <div className="controls__save">
                                                                {/* <a href="#"><span><img src="img/saveicon.svg" alt="save"></span> Save <span class="droppable__controls"><img src="img/dropdownarrow.svg" alt=""></span></a> */}
                                                                <div className="controls__save--button">
                                                                    <a href="#"><img src={saveicon}
                                                                                     alt="saveicon"/> Save</a>
                                                                    <a href="#" className="droppable__controls"><img
                                                                        src={dropdownarrow} alt=""/></a>
                                                                </div>
                                                                <div className="controls__drop">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#" data-src="img/iconsave1.svg"
                                                                               data-text="Saved">
                                                                                <span
                                                                                    className="controls__info"><span><img
                                                                                    src={iconsave1}
                                                                                    alt="iconsave"/></span> Save</span>
                                                                                <span className="hotkey__controls">Ctrl + Enter</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" data-src="img/iconsave2.svg"
                                                                               data-text="Saved without TM">
                                                                                <span
                                                                                    className="controls__info"><span><img
                                                                                    src={iconsave2}
                                                                                    alt="iconsave"/></span> Save without TM</span>
                                                                                <span className="hotkey__controls">Alt + Enter</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" data-src="img/iconsave3.svg"
                                                                               data-text="Draft">
                                                                                <span
                                                                                    className="controls__info"><span><img
                                                                                    src={iconsave3}
                                                                                    alt="iconsave"/></span> Save as draft</span>
                                                                                <span className="hotkey__controls">Shift + Enter</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="translate__details details__active">
                                                        <a href="#">Show less</a>
                                                    </div>
                                                    <div className="translate__suggestions">
                                                        <ul>
                                                            <li><a href="#"
                                                                   data-switcher="suggestions__table">SUGGESTIONS <span>2</span></a>
                                                            </li>
                                                            <li><a href="#"
                                                                   data-switcher="term__wrapper">TERM <span>2</span></a>
                                                            </li>
                                                            <li><a href="#"
                                                                   data-switcher="history__wrapper">HISTORY <span>2</span></a>
                                                            </li>
                                                            <li><a href="#"
                                                                   data-switcher="concordance__wrapper">CONCORDANCE</a>
                                                            </li>
                                                            <li><a href="#" data-switcher="symbols__wrapper">SYMBOLS</a>
                                                            </li>
                                                            <li><a href="#" data-switcher="qa__block">QA <span>17</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="history__wrapper" style={{display: 'none'}}>
                                                        <div className="elem__history">
                                                            <div className="history__number">
                                                                <span>1</span>
                                                            </div>
                                                            <div className="history__info">
                                                                <div className="history__image">
                                                                    <img src={historyimage} alt="historyimage"/>
                                                                </div>
                                                                <div className="history__details">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur <span
                                                                        className="history__approved">ipsum</span> <span
                                                                        className="history__not--approved">amet</span> sed
                                                                        do eiusmod tempor incididunt ut labore et dolore
                                                                        magna aliqua. Ut enim ad minim veniam, quis
                                                                        nostrud</p>
                                                                    <span>Nov 25. 2019, 1:29 PM posteditin LW internal</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="elem__history">
                                                            <div className="history__number">
                                                                <span>2</span>
                                                            </div>
                                                            <div className="history__info">
                                                                <div className="history__image">
                                                                    <img src={historyimage} alt="historyimage"/>
                                                                </div>
                                                                <div className="history__details">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit, </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="concordance__wrapper" style={{display: 'none'}}>
                                                        <form action>
                                                            <div className="concordance__search">
                                                                <input type="text" placeholder="Source"/>
                                                                <input type="submit" defaultValue/>
                                                                <a href="#">
                                                                    <img src={closeicon} alt="closeicon"/>
                                                                </a>
                                                            </div>
                                                            <div className="concordance__container">
                                                                <div className="concordance__elem">
                                                                    <div className="el__half">
                                                                        <span>1</span>
                                                                        <p><span className="searched__span">Translation memory</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="el__half">
                                                                        <p>Lorem ipsum dolor sit a</p>
                                                                    </div>
                                                                </div>
                                                                <div className="concordance__elem">
                                                                    <div className="el__half">
                                                                        <span>2</span>
                                                                        <p><span className="numb__span">1</span><span
                                                                            className="numb__span">2</span> A FAST <span
                                                                            className="searched__span">TRANSLATION</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="el__half">
                                                                        <p><span className="numb__span">1</span><span
                                                                            className="numb__span">2</span> Lorem ipsum
                                                                            dolor sit a</p>
                                                                    </div>
                                                                </div>
                                                                <div className="concordance__elem">
                                                                    <div className="el__half">
                                                                        <span>1</span>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur sed
                                                                            do eiusmod tempor incididunt ut labore et
                                                                            dolore magna aliqua. Ut enim ad minim
                                                                            veniam, quis nostrud</p>
                                                                    </div>
                                                                    <div className="el__half">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur sed
                                                                            do eiusmod tempor incididunt ut labore et
                                                                            dolore magna aliqua. Ut enim ad minim
                                                                            veniam, quis nostrud</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="qa__block" style={{display: 'none'}}>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched trailing punctuation</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched trailing punctuation</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched trailing white spaces</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched multiple white spaces</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched numbers</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={identical} alt="badge"/></span>
                                                                <p>Identical text</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Repeated words</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="suggestions__table" style={{display: 'none'}}>
                                                        <div className="suggestion__elem">
                                                            <div className="suggestion__left">
                                                                <div className="suggest__el">
                                                                    <span>1</span>
                                                                    <p>Sitecore</p>
                                                                </div>
                                                                <div className="suggest__el">
                                                                    <p>Sitecore</p>
                                                                </div>
                                                            </div>
                                                            <div className="suggestion__right">
                                                                <div className="suggestion__info">
                                                                    <span>MT</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="term__wrapper">
                                                        <div className="term__elem">
                                                            <div className="term__double">
                                                                <div className="el__term">
                                                                    <div className="term__left">
                                                                        <span>1</span>
                                                                        <p><span
                                                                            className="term__approved">Translation</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="term__right">
                                                                        <div className="term__status">
                                                                            <p>Approved</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="el__term">
                                                                    <div className="term__left">
                                                                        <p><span
                                                                            className="term__approved">Translation</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="term__right">
                                                                        <div className="term__status">
                                                                            <p>Approved</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="term__status">
                                                                <div className="term__status--info">
                                                                    <img src={termicon} alt="termicon"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="symbols__wrapper" style={{display: 'none'}}>
                                                        <div className="symbols__elem">
                                                            <div className="symbols__head">
                                                                <span>Extended Latin</span>
                                                            </div>
                                                            <div className="symbols__container">
                                                                <div className="el__symbol">
                                                                    <span>Ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="symbols__elem">
                                                            <div className="symbols__head">
                                                                <span>Signs</span>
                                                            </div>
                                                            <div className="symbols__container">
                                                                <div className="el__symbol">
                                                                    <span>-</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>—</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>§</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>©</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>™</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>®</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>¿</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>:</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>«</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>»</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>“</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>„</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="symbols__elem">
                                                            <div className="symbols__head">
                                                                <span>Currencies</span>
                                                            </div>
                                                            <div className="symbols__container">
                                                                <div className="el__symbol">
                                                                    <span>€</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>¢</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>₤</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>Ұ</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="counter__tooltip"><p>3</p></div>
                                        </td>
                                        <td>
                                            <div className="full__translation">
                                                <div className="full__top">
                                                    <div className="full__top-left">
                                                        <div className="full__left--left">
                                                            <div className="lang__info">
                                                                <span>English  - United Kingdom </span>
                                                                <div className="more__lang">
                                                                    <a href="#" data-more="more5"
                                                                       className="more__button"><img src={ellipses}
                                                                                                     alt="ellipses"/></a>
                                                                    <div className="lang__list" data-more="more5">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div className="list__image">
                                                                                        <img src={spelling}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Check spelling</p>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+J</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="lang__comment">
                                                                                    <div className="list__image">
                                                                                        <img src={commentgreen}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Add comment</p>
                                                                                        <span>	Mark text first</span>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+K</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment__lang" data-more="more5">
                                                                        <form action>
                                                                            <div className="comment__field">
                                                                                <input type="text"
                                                                                       placeholder="Type comment..."/>
                                                                            </div>
                                                                            <div className="comment__list">
                                                                                <p>For whom comment is?</p>
                                                                                <div className="list__comment--inner">
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment11111"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"
                                                                                                defaultChecked/>
                                                                                            <label
                                                                                                htmlFor="comment11111">Justas
                                                                                                J. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Project manager</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment22222"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment22222">Lukas
                                                                                                B. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Translator</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment33333"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment33333">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment44444"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment44444">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment55555"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment55555">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment66666"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment66666">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment77777"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment77777">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment88888"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label
                                                                                                htmlFor="comment88888">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="comment__controls">
                                                                                    <input type="submit"
                                                                                           defaultValue="Comment"/>
                                                                                    <a href="#">Cancel</a>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="translation__text">
                                                                <p contentEditable="true">Lorem ipsum dolor sit amet
                                                                    consectetur adipisicing elit. Minima odit nobis
                                                                    fugit debitis consectetur optio, sed, possimus ea
                                                                    quidem incidunt deleniti earum eius cum temporibus
                                                                    nesciunt recusandae accusamus pariatur aperiam ut,
                                                                    aliquid similique. Magnam illum excepturi, rerum
                                                                    deleniti fugit quidem.</p>
                                                            </div>
                                                        </div>
                                                        <div className="full__left--right">
                                                            <div className="lang__info">
                                                                <span>Danish </span>
                                                                <div className="more__lang">
                                                                    <a href="#" data-more="more6"
                                                                       className="more__button"><img src={ellipses}
                                                                                                     alt="ellipses"/></a>
                                                                    <div className="lang__list" data-more="more6">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div className="list__image">
                                                                                        <img src={spelling}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Check spelling</p>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+J</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="lang__comment">
                                                                                    <div className="list__image">
                                                                                        <img src={commentgreen}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Add comment</p>
                                                                                        <span>	Mark text first</span>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+K</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment__lang" data-more="more6">
                                                                        <form action>
                                                                            <div className="comment__field">
                                                                                <input type="text"
                                                                                       placeholder="Type comment..."/>
                                                                            </div>
                                                                            <div className="comment__list">
                                                                                <p>For whom comment is?</p>
                                                                                <div className="list__comment--inner">
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment61"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"
                                                                                                defaultChecked/>
                                                                                            <label htmlFor="comment61">Justas
                                                                                                J. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Project manager</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment62"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment62">Lukas
                                                                                                B. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Translator</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment63"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment63">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment64"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment64">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment65"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment65">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment66"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment66">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment67"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment67">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment68"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment68">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="comment__controls">
                                                                                    <input type="submit"
                                                                                           defaultValue="Comment"/>
                                                                                    <a href="#">Cancel</a>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="translation__text">
                                                                <p contentEditable="true">Lorem ipsum dolor sit amet
                                                                    consectetur adipisicing elit. Minima odit nobis
                                                                    fugit debitis consectetur optio, sed, possimus ea
                                                                    quidem incidunt deleniti earum eius cum temporibus
                                                                    nesciunt recusandae accusamus pariatur aperiam ut,
                                                                    aliquid similique. Magnam illum excepturi, rerum
                                                                    deleniti fugit quidem.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="full__top--right">
                                                        <div className="info__top--right">
                                                            <div className="column__info">
                                                                <div className="status__translate">
                                                                    <div className="status__info"
                                                                         style={{display: 'none'}}>
                                                                        <p>Attention</p>
                                                                    </div>
                                                                    <img src={attention} alt="confirmedicon"/>
                                                                </div>
                                                                <div className="double__arrow">
                                                                    <a href="#" className="double__bottom">
                                                                        <img src={doubleicon} alt="doubleicon"/>
                                                                    </a>
                                                                    <div className="double__placeholder"
                                                                         style={{display: 'none'}}>
                                                                        <p>2 repetitions</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="column__info">
                                                                <div className="status_col">
                                                                    <span><img src={warnicon} alt="warnicon"/></span>
                                                                </div>
                                                                <div className="status__info status__small">
                                                                    <p>MT</p>
                                                                    <div className="status__float"
                                                                         style={{display: 'none'}}>
                                                                        <p>Machine translation</p>
                                                                    </div>
                                                                </div>
                                                                <div className="status__comment comment__old">
                                                                    <a href="#"><img src={commentwatched}
                                                                                     alt="comment"/> <span>1</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="full__bottom">
                                                    <div className="translate__controls">
                                                        <div className="controls__left">
                                                            <div className="controls__buttons--text">
                                                                <div className="small__tag">
                                                                    <a href="#"><img src={button1} alt="button"/></a>
                                                                    <div className="tag__float">
                                                                        <p>Bold text format <span>Ctrl+B</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#"><img src={button2} alt="button"/></a>
                                                                    <div className="tag__float">
                                                                        <p>Italic text format <span>Ctrl+i</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#"><img src={button2} alt="button"/></a>
                                                                    <div className="tag__float">
                                                                        <p>Underline text format <span>Ctrl+U</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="controls__small">
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls1} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Remove formating <span>F7</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls2} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Insert tag <span>F8</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls3} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Copy source to target <span>F10</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls4} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Remove tags <span>F6</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls5} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Undo edit <span>Ctrl + Z</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#" className="disabled__button">
                                                                        <img src={controls6} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Redo edit <span>Ctrl+Shift+Z</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="controls__more">
                                                                <a href="#" data-preview="controls1">
                                                                    <img src={controlsdots} alt="controls"/>
                                                                </a>
                                                            </div>
                                                            <div className="controls__words">
                                                                <p>69/1024</p>
                                                            </div>
                                                        </div>
                                                        <div className="controls__right">
                                                            <div className="controls__save">
                                                                {/* <a href="#"><span><img src="img/saveicon.svg" alt="save"></span> Save <span class="droppable__controls"><img src="img/dropdownarrow.svg" alt=""></span></a> */}
                                                                <div className="controls__save--button">
                                                                    <a href="#"><img src={saveicon}
                                                                                     alt="saveicon"/> Save</a>
                                                                    <a href="#" className="droppable__controls"><img
                                                                        src="img/dropdownarrow.svg" alt=""/></a>
                                                                </div>
                                                                <div className="controls__drop">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#" data-src="img/iconsave1.svg"
                                                                               data-text="Saved">
                                                                                <span
                                                                                    className="controls__info"><span><img
                                                                                    src={iconsave1}
                                                                                    alt="iconsave"/></span> Save</span>
                                                                                <span className="hotkey__controls">Ctrl + Enter</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" data-src="img/iconsave2.svg"
                                                                               data-text="Saved without TM">
                                                                                <span
                                                                                    className="controls__info"><span><img
                                                                                    src={iconsave2}
                                                                                    alt="iconsave"/></span> Save without TM</span>
                                                                                <span className="hotkey__controls">Alt + Enter</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" data-src="img/iconsave3.svg"
                                                                               data-text="Draft">
                                                                                <span
                                                                                    className="controls__info"><span><img
                                                                                    src={iconsave3}
                                                                                    alt="iconsave"/></span> Save as draft</span>
                                                                                <span className="hotkey__controls">Shift + Enter</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="translate__details details__active">
                                                        <a href="#">Show less</a>
                                                    </div>
                                                    <div className="translate__suggestions">
                                                        <ul>
                                                            <li><a href="#"
                                                                   data-switcher="suggestions__table">SUGGESTIONS <span>2</span></a>
                                                            </li>
                                                            <li><a href="#"
                                                                   data-switcher="term__wrapper">TERM <span>2</span></a>
                                                            </li>
                                                            <li><a href="#"
                                                                   data-switcher="history__wrapper">HISTORY <span>2</span></a>
                                                            </li>
                                                            <li><a href="#"
                                                                   data-switcher="concordance__wrapper">CONCORDANCE</a>
                                                            </li>
                                                            <li><a href="#" data-switcher="symbols__wrapper">SYMBOLS</a>
                                                            </li>
                                                            <li><a href="#" data-switcher="qa__block">QA <span>17</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="history__wrapper" style={{display: 'none'}}>
                                                        <div className="elem__history">
                                                            <div className="history__number">
                                                                <span>1</span>
                                                            </div>
                                                            <div className="history__info">
                                                                <div className="history__image">
                                                                    <img src={historyimage} alt="historyimage"/>
                                                                </div>
                                                                <div className="history__details">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur <span
                                                                        className="history__approved">ipsum</span> <span
                                                                        className="history__not--approved">amet</span> sed
                                                                        do eiusmod tempor incididunt ut labore et dolore
                                                                        magna aliqua. Ut enim ad minim veniam, quis
                                                                        nostrud</p>
                                                                    <span>Nov 25. 2019, 1:29 PM posteditin LW internal</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="elem__history">
                                                            <div className="history__number">
                                                                <span>2</span>
                                                            </div>
                                                            <div className="history__info">
                                                                <div className="history__image">
                                                                    <img src={historyimage} alt="historyimage"/>
                                                                </div>
                                                                <div className="history__details">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit, </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="concordance__wrapper" style={{display: 'none'}}>
                                                        <form action>
                                                            <div className="concordance__search">
                                                                <input type="text" placeholder="Source"/>
                                                                <input type="submit" defaultValue/>
                                                                <a href="#">
                                                                    <img src={closeicon} alt="closeicon"/>
                                                                </a>
                                                            </div>
                                                            <div className="concordance__container">
                                                                <div className="concordance__elem">
                                                                    <div className="el__half">
                                                                        <span>1</span>
                                                                        <p><span className="searched__span">Translation memory</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="el__half">
                                                                        <p>Lorem ipsum dolor sit a</p>
                                                                    </div>
                                                                </div>
                                                                <div className="concordance__elem">
                                                                    <div className="el__half">
                                                                        <span>2</span>
                                                                        <p><span className="numb__span">1</span><span
                                                                            className="numb__span">2</span> A FAST <span
                                                                            className="searched__span">TRANSLATION</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="el__half">
                                                                        <p><span className="numb__span">1</span><span
                                                                            className="numb__span">2</span> Lorem ipsum
                                                                            dolor sit a</p>
                                                                    </div>
                                                                </div>
                                                                <div className="concordance__elem">
                                                                    <div className="el__half">
                                                                        <span>1</span>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur sed
                                                                            do eiusmod tempor incididunt ut labore et
                                                                            dolore magna aliqua. Ut enim ad minim
                                                                            veniam, quis nostrud</p>
                                                                    </div>
                                                                    <div className="el__half">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur sed
                                                                            do eiusmod tempor incididunt ut labore et
                                                                            dolore magna aliqua. Ut enim ad minim
                                                                            veniam, quis nostrud</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="qa__block" style={{display: 'none'}}>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched trailing punctuation</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched trailing punctuation</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched trailing white spaces</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched multiple white spaces</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched numbers</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={identical} alt="badge"/></span>
                                                                <p>Identical text</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Repeated words</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="suggestions__table" style={{display: 'none'}}>
                                                        <div className="suggestion__elem">
                                                            <div className="suggestion__left">
                                                                <div className="suggest__el">
                                                                    <span>1</span>
                                                                    <p>Sitecore</p>
                                                                </div>
                                                                <div className="suggest__el">
                                                                    <p>Sitecore</p>
                                                                </div>
                                                            </div>
                                                            <div className="suggestion__right">
                                                                <div className="suggestion__info">
                                                                    <span>MT</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="term__wrapper">
                                                        <div className="term__elem">
                                                            <div className="term__double">
                                                                <div className="el__term">
                                                                    <div className="term__left">
                                                                        <span>1</span>
                                                                        <p><span
                                                                            className="term__approved">Translation</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="term__right">
                                                                        <div className="term__status">
                                                                            <p>Approved</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="el__term">
                                                                    <div className="term__left">
                                                                        <p><span
                                                                            className="term__approved">Translation</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="term__right">
                                                                        <div className="term__status">
                                                                            <p>Approved</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="term__status">
                                                                <div className="term__status--info">
                                                                    <img src={termicon} alt="termicon"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="symbols__wrapper" style={{display: 'none'}}>
                                                        <div className="symbols__elem">
                                                            <div className="symbols__head">
                                                                <span>Extended Latin</span>
                                                            </div>
                                                            <div className="symbols__container">
                                                                <div className="el__symbol">
                                                                    <span>Ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="symbols__elem">
                                                            <div className="symbols__head">
                                                                <span>Signs</span>
                                                            </div>
                                                            <div className="symbols__container">
                                                                <div className="el__symbol">
                                                                    <span>-</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>—</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>§</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>©</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>™</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>®</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>¿</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>:</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>«</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>»</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>“</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>„</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="symbols__elem">
                                                            <div className="symbols__head">
                                                                <span>Currencies</span>
                                                            </div>
                                                            <div className="symbols__container">
                                                                <div className="el__symbol">
                                                                    <span>€</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>¢</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>₤</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>Ұ</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="counter__tooltip"><p>4</p></div>
                                        </td>
                                        <td>
                                            <div className="full__translation">
                                                <div className="full__top">
                                                    <div className="full__top-left">
                                                        <div className="full__left--left">
                                                            <div className="lang__info">
                                                                <span>English  - United Kingdom </span>
                                                                <div className="more__lang">
                                                                    <a href="#" data-more="more7"
                                                                       className="more__button"><img src={ellipses}
                                                                                                     alt="ellipses"/></a>
                                                                    <div className="lang__list" data-more="more7">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div className="list__image">
                                                                                        <img src={spelling}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Check spelling</p>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+J</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="lang__comment">
                                                                                    <div className="list__image">
                                                                                        <img src={commentgreen}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Add comment</p>
                                                                                        <span>	Mark text first</span>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+K</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment__lang" data-more="more7">
                                                                        <form action>
                                                                            <div className="comment__field">
                                                                                <input type="text"
                                                                                       placeholder="Type comment..."/>
                                                                            </div>
                                                                            <div className="comment__list">
                                                                                <p>For whom comment is?</p>
                                                                                <div className="list__comment--inner">
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment71"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"
                                                                                                defaultChecked/>
                                                                                            <label htmlFor="comment71">Justas
                                                                                                J. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Project manager</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment72"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment72">Lukas
                                                                                                B. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Translator</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment73"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment73">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment74"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment74">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment75"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment75">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment76"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment76">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment77"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment77">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment78"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment78">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="comment__controls">
                                                                                    <input type="submit"
                                                                                           defaultValue="Comment"/>
                                                                                    <a href="#">Cancel</a>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="translation__text">
                                                                <p contentEditable="true">Lorem ipsum dolor sit amet
                                                                    consectetur adipisicing elit. Minima odit nobis
                                                                    fugit debitis consectetur optio, sed, possimus ea
                                                                    quidem incidunt deleniti earum eius cum temporibus
                                                                    nesciunt recusandae accusamus pariatur aperiam ut,
                                                                    aliquid similique. Magnam illum excepturi, rerum
                                                                    deleniti fugit quidem.</p>
                                                            </div>
                                                        </div>
                                                        <div className="full__left--right">
                                                            <div className="lang__info">
                                                                <span>Danish </span>
                                                                <div className="more__lang">
                                                                    <a href="#" data-more="more8"
                                                                       className="more__button"><img src={ellipses}
                                                                                                     alt="ellipses"/></a>
                                                                    <div className="lang__list" data-more="more8">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <div className="list__image">
                                                                                        <img src={spelling}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Check spelling</p>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+J</span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#" className="lang__comment">
                                                                                    <div className="list__image">
                                                                                        <img src={commentgreen}
                                                                                             alt="spelling"/>
                                                                                    </div>
                                                                                    <div className="list__info">
                                                                                        <p> Add comment</p>
                                                                                        <span>	Mark text first</span>
                                                                                    </div>
                                                                                    <span
                                                                                        className="hotkeys__float">Ctrl+K</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="comment__lang" data-more="more8">
                                                                        <form action>
                                                                            <div className="comment__field">
                                                                                <input type="text"
                                                                                       placeholder="Type comment..."/>
                                                                            </div>
                                                                            <div className="comment__list">
                                                                                <p>For whom comment is?</p>
                                                                                <div className="list__comment--inner">
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment81"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"
                                                                                                defaultChecked/>
                                                                                            <label htmlFor="comment81">Justas
                                                                                                J. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Project manager</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment82"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment82">Lukas
                                                                                                B. <span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Translator</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment83"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment83">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment84"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment84">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment85"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment85">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment86"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment86">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment87"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment87">Dalia
                                                                                                M.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elem__comment--lang">
                                                                                        <div>
                                                                                            <input
                                                                                                className="styled-checkbox"
                                                                                                id="comment88"
                                                                                                type="checkbox"
                                                                                                defaultValue="search__input"/>
                                                                                            <label htmlFor="comment88">Ausra
                                                                                                D.<span
                                                                                                    className="spacer__lang"/><span
                                                                                                    className="comment__status">Creative proofreader</span></label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="comment__controls">
                                                                                    <input type="submit"
                                                                                           defaultValue="Comment"/>
                                                                                    <a href="#">Cancel</a>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="translation__text">
                                                                <p contentEditable="true">Lorem ipsum dolor sit amet
                                                                    consectetur adipisicing elit. Minima odit nobis
                                                                    fugit debitis consectetur optio, sed, possimus ea
                                                                    quidem incidunt deleniti earum eius cum temporibus
                                                                    nesciunt recusandae accusamus pariatur aperiam ut,
                                                                    aliquid similique. Magnam illum excepturi, rerum
                                                                    deleniti fugit quidem.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="full__top--right">
                                                        <div className="info__top--right">
                                                            <div className="column__info">
                                                                <div className="status__translate">
                                                                    <div className="status__info"
                                                                         style={{display: 'none'}}>
                                                                        <p>Attention</p>
                                                                    </div>
                                                                    <img src={attention} alt="confirmedicon"/>
                                                                </div>
                                                            </div>
                                                            <div className="column__info">
                                                                <div className="status_col">
                                                                    <span><img src={warnicon} alt="warnicon"/></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="full__bottom">
                                                    <div className="translate__controls">
                                                        <div className="controls__left">
                                                            <div className="controls__buttons--text">
                                                                <div className="small__tag">
                                                                    <a href="#"><img src={button1} alt="button"/></a>
                                                                    <div className="tag__float">
                                                                        <p>Bold text format <span>Ctrl+B</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#"><img src={button2} alt="button"/></a>
                                                                    <div className="tag__float">
                                                                        <p>Italic text format <span>Ctrl+i</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#"><img src={button3} alt="button"/></a>
                                                                    <div className="tag__float">
                                                                        <p>Underline text format <span>Ctrl+U</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="controls__small">
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls1} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Remove formating <span>F7</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls2} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Insert tag <span>F8</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls3} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Copy source to target <span>F10</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls4} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Remove tags <span>F6</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#">
                                                                        <img src={controls5} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Undo edit <span>Ctrl + Z</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="small__tag">
                                                                    <a href="#" className="disabled__button">
                                                                        <img src={controls6} alt=""/>
                                                                    </a>
                                                                    <div className="tag__float">
                                                                        <p>Redo edit <span>Ctrl+Shift+Z</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="controls__more">
                                                                <a href="#" data-preview="controls1">
                                                                    <img src={controlsdots} alt="controls"/>
                                                                </a>
                                                            </div>
                                                            <div className="controls__words">
                                                                <p>69/1024</p>
                                                            </div>
                                                        </div>
                                                        <div className="controls__right">
                                                            <div className="controls__save">
                                                                {/* <a href="#"><span><img src="img/saveicon.svg" alt="save"></span> Save <span class="droppable__controls"><img src="img/dropdownarrow.svg" alt=""></span></a> */}
                                                                <div className="controls__save--button">
                                                                    <a href="#"><img src={saveicon}
                                                                                     alt="saveicon"/> Save</a>
                                                                    <a href="#" className="droppable__controls"><img
                                                                        src={dropdownarrow} alt=""/></a>
                                                                </div>
                                                                <div className="controls__drop">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#" data-src="img/iconsave1.svg"
                                                                               data-text="Saved">
                                                                                <span
                                                                                    className="controls__info"><span><img
                                                                                    src={iconsave1}
                                                                                    alt="iconsave"/></span> Save</span>
                                                                                <span className="hotkey__controls">Ctrl + Enter</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" data-src="img/iconsave2.svg"
                                                                               data-text="Saved without TM">
                                                                                <span
                                                                                    className="controls__info"><span><img
                                                                                    src={iconsave2}
                                                                                    alt="iconsave"/></span> Save without TM</span>
                                                                                <span className="hotkey__controls">Alt + Enter</span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" data-src="img/iconsave3.svg"
                                                                               data-text="Draft">
                                                                                <span
                                                                                    className="controls__info"><span><img
                                                                                    src={iconsave3}
                                                                                    alt="iconsave"/></span> Save as draft</span>
                                                                                <span className="hotkey__controls">Shift + Enter</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="translate__details details__active">
                                                        <a href="#">Show less</a>
                                                    </div>
                                                    <div className="translate__suggestions">
                                                        <ul>
                                                            <li><a href="#"
                                                                   data-switcher="suggestions__table">SUGGESTIONS <span>2</span></a>
                                                            </li>
                                                            <li><a href="#"
                                                                   data-switcher="term__wrapper">TERM <span>2</span></a>
                                                            </li>
                                                            <li><a href="#"
                                                                   data-switcher="history__wrapper">HISTORY <span>2</span></a>
                                                            </li>
                                                            <li><a href="#"
                                                                   data-switcher="concordance__wrapper">CONCORDANCE</a>
                                                            </li>
                                                            <li><a href="#" data-switcher="symbols__wrapper">SYMBOLS</a>
                                                            </li>
                                                            <li><a href="#" data-switcher="qa__block">QA <span>17</span></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="history__wrapper" style={{display: 'none'}}>
                                                        <div className="elem__history">
                                                            <div className="history__number">
                                                                <span>1</span>
                                                            </div>
                                                            <div className="history__info">
                                                                <div className="history__image">
                                                                    <img src={historyimage} alt="historyimage"/>
                                                                </div>
                                                                <div className="history__details">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur <span
                                                                        className="history__approved">ipsum</span> <span
                                                                        className="history__not--approved">amet</span> sed
                                                                        do eiusmod tempor incididunt ut labore et dolore
                                                                        magna aliqua. Ut enim ad minim veniam, quis
                                                                        nostrud</p>
                                                                    <span>Nov 25. 2019, 1:29 PM posteditin LW internal</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="elem__history">
                                                            <div className="history__number">
                                                                <span>2</span>
                                                            </div>
                                                            <div className="history__info">
                                                                <div className="history__image">
                                                                    <img src={historyimage} alt="historyimage"/>
                                                                </div>
                                                                <div className="history__details">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur
                                                                        adipiscing elit, </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="concordance__wrapper" style={{display: 'none'}}>
                                                        <form action>
                                                            <div className="concordance__search">
                                                                <input type="text" placeholder="Source"/>
                                                                <input type="submit" defaultValue/>
                                                                <a href="#">
                                                                    <img src={closeicon} alt="closeicon"/>
                                                                </a>
                                                            </div>
                                                            <div className="concordance__container">
                                                                <div className="concordance__elem">
                                                                    <div className="el__half">
                                                                        <span>1</span>
                                                                        <p><span className="searched__span">Translation memory</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="el__half">
                                                                        <p>Lorem ipsum dolor sit a</p>
                                                                    </div>
                                                                </div>
                                                                <div className="concordance__elem">
                                                                    <div className="el__half">
                                                                        <span>2</span>
                                                                        <p><span className="numb__span">1</span><span
                                                                            className="numb__span">2</span> A FAST <span
                                                                            className="searched__span">TRANSLATION</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="el__half">
                                                                        <p><span className="numb__span">1</span><span
                                                                            className="numb__span">2</span> Lorem ipsum
                                                                            dolor sit a</p>
                                                                    </div>
                                                                </div>
                                                                <div className="concordance__elem">
                                                                    <div className="el__half">
                                                                        <span>1</span>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur sed
                                                                            do eiusmod tempor incididunt ut labore et
                                                                            dolore magna aliqua. Ut enim ad minim
                                                                            veniam, quis nostrud</p>
                                                                    </div>
                                                                    <div className="el__half">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur sed
                                                                            do eiusmod tempor incididunt ut labore et
                                                                            dolore magna aliqua. Ut enim ad minim
                                                                            veniam, quis nostrud</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="qa__block" style={{display: 'none'}}>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched trailing punctuation</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched trailing punctuation</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched trailing white spaces</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched multiple white spaces</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Missmatched numbers</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={identical} alt="badge"/></span>
                                                                <p>Identical text</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="elem__qa">
                                                            <div className="qa__info">
                                                                <span><img src={badgeicon} alt="badge"/></span>
                                                                <p>Repeated words</p>
                                                            </div>
                                                            <div className="qa__switcher">
                                                                <span>Warning</span>
                                                                <label className="switch">
                                                                    <input type="checkbox"/>
                                                                    <span className="slider round"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="suggestions__table" style={{display: 'none'}}>
                                                        <div className="suggestion__elem">
                                                            <div className="suggestion__left">
                                                                <div className="suggest__el">
                                                                    <span>1</span>
                                                                    <p>Sitecore</p>
                                                                </div>
                                                                <div className="suggest__el">
                                                                    <p>Sitecore</p>
                                                                </div>
                                                            </div>
                                                            <div className="suggestion__right">
                                                                <div className="suggestion__info">
                                                                    <span>MT</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="term__wrapper">
                                                        <div className="term__elem">
                                                            <div className="term__double">
                                                                <div className="el__term">
                                                                    <div className="term__left">
                                                                        <span>1</span>
                                                                        <p><span
                                                                            className="term__approved">Translation</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="term__right">
                                                                        <div className="term__status">
                                                                            <p>Approved</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="el__term">
                                                                    <div className="term__left">
                                                                        <p><span
                                                                            className="term__approved">Translation</span>
                                                                        </p>
                                                                    </div>
                                                                    <div className="term__right">
                                                                        <div className="term__status">
                                                                            <p>Approved</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="term__status">
                                                                <div className="term__status--info">
                                                                    <img src={termicon} alt="termicon"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="symbols__wrapper" style={{display: 'none'}}>
                                                        <div className="symbols__elem">
                                                            <div className="symbols__head">
                                                                <span>Extended Latin</span>
                                                            </div>
                                                            <div className="symbols__container">
                                                                <div className="el__symbol">
                                                                    <span>Ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>ā</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="symbols__elem">
                                                            <div className="symbols__head">
                                                                <span>Signs</span>
                                                            </div>
                                                            <div className="symbols__container">
                                                                <div className="el__symbol">
                                                                    <span>-</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>—</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>§</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>©</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>™</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>®</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>¿</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>:</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>«</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>»</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>“</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>„</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="symbols__elem">
                                                            <div className="symbols__head">
                                                                <span>Currencies</span>
                                                            </div>
                                                            <div className="symbols__container">
                                                                <div className="el__symbol">
                                                                    <span>€</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>¢</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>₤</span>
                                                                </div>
                                                                <div className="el__symbol">
                                                                    <span>Ұ</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};


export default Centralpart;