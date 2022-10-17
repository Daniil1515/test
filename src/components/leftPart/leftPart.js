import React from 'react';
import '../../App.scss'
import refreshicon from '../../img/refreshicon.svg'
import refreshicon2 from '../../img/refreshicon2.svg'
import controlswhite from '../../img/controlswhite.svg'
import rightdrop from '../../img/rightdrop.svg'
import source1 from '../../img/source1.svg'
import leftsource from '../../img/leftsource.svg'
import rightsourse from '../../img/rightsource.svg'
import verticalicon from '../../img/verticalicon.svg'
import horizontalicon from '../../img/horizontalicon.svg'
import badgeimage from '../../img/badgeimage.svg'
import severitywanr from '../../img/severitywanr.svg'
import trash from '../../img/trash.svg'
import greendots from '../../img/greendots.svg'
import leftstart from '../../img/leftstart.svg'
import previcon from '../../img/previcon.svg'
import nexticon from '../../img/nexticon.svg'
import endnext from '../../img/endnext.svg'
import previewimage from '../../img/previewimage.png'
import slider1 from '../../img/slider1.png'
import Centralpart from "../centralPart/centralpart";


const LeftPart = () => {
    return (
        <div className="tooltip__app">
            <div className="tooltip__content">
                <div className="splitter_panel tool__main--">
                    <div className="tooltip__preview left_panel">
                        <div className="tool__inner--preview">
                            <div className="progress__tooltip">
                                <div className="active__progress" style={{width: '30%'}}></div>
                            </div>

                            <div className="tool__preview--controls">
                                <div className="controls__preview">
                                    <div className="prev__first">
                                        <div className="buttons__prev">
                                            <a href="#" className="active__buttons" data-prev="preview__slider">
                                                <svg width="18" height="10" viewBox="0 0 18 10" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9 0C5.56091 0 2.44216 1.7536 0.140841 4.60192C-0.0469469 4.83528 -0.0469469 5.16129 0.140841 5.39465C2.44216 8.2464 5.56091 10 9 10C12.4391 10 15.5578 8.2464 17.8592 5.39808C18.0469 5.16472 18.0469 4.83871 17.8592 4.60535C15.5578 1.7536 12.4391 0 9 0ZM9.2467 8.52093C6.96379 8.65477 5.07855 6.90117 5.22215 4.77008C5.33998 3.01304 6.86806 1.58888 8.7533 1.47907C11.0362 1.34523 12.9214 3.09883 12.7778 5.22992C12.6563 6.98353 11.1283 8.40769 9.2467 8.52093ZM9.13256 6.8943C7.90273 6.96637 6.88647 6.02265 6.96747 4.87646C7.03007 3.92931 7.85486 3.16404 8.87113 3.10227C10.101 3.0302 11.1172 3.97392 11.0362 5.12011C10.9699 6.07069 10.1451 6.83596 9.13256 6.8943Z"
                                                        fill="#0E7D7D"/>
                                                </svg>
                                            </a>
                                            <a href="#" className="comment__controls" data-prev="comment__preview">
                                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z"
                                                        fill="white"/>
                                                </svg>

                                                <span>22</span>
                                            </a>
                                            <a href="#" data-prev="tag__preview" data-prev="tag__preview">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.31193 15.6997C7.87938 15.701 7.46432 15.5291 7.15934 15.2224L0.778143 8.84037C0.441398 8.50459 0.268731 8.03809 0.305703 7.56397L0.712979 2.21563C0.771055 1.41117 1.41202 0.771934 2.21664 0.71604L7.56498 0.308765C7.60653 0.299805 7.64888 0.299805 7.69043 0.299805C8.12201 0.300913 8.53569 0.472472 8.84139 0.777132L15.2234 7.15833C15.5291 7.46386 15.7008 7.87833 15.7008 8.31051C15.7008 8.74269 15.5291 9.15716 15.2234 9.46269L9.4637 15.2224C9.15892 15.5289 8.74419 15.7008 8.31193 15.6997ZM7.68961 1.92891L2.33719 2.33618L1.92992 7.6886L8.31193 14.0706L14.0708 8.31173L7.68961 1.92891ZM4.85579 6.48388C4.07857 6.48404 3.40948 5.93516 3.2577 5.17291C3.10592 4.41067 3.51374 3.64735 4.23173 3.34979C4.94973 3.05224 5.77793 3.30331 6.20984 3.94947C6.64174 4.59562 6.55705 5.45689 6.00756 6.00655C5.70278 6.31308 5.28805 6.48496 4.85579 6.48388Z"
                                                        fill="white"/>
                                                </svg>

                                            </a>
                                            <a href="#" data-prev="summary__preview">
                                                <svg width="13" height="16" viewBox="0 0 13 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0044 16.0003L8.89073 12.8875C7.48237 13.8165 5.5994 13.5291 4.53232 12.2223C3.46524 10.9155 3.56025 9.01322 4.75223 7.81922C5.9461 6.62686 7.84873 6.53145 9.15592 7.59838C10.4631 8.66531 10.7507 10.5484 9.8215 11.9568L12.9339 15.0709L12.0044 16.0003ZM7.07752 8.1719C6.13646 8.1713 5.32603 8.83549 5.14184 9.75829C4.95765 10.6811 5.451 11.6055 6.32019 11.9661C7.18937 12.3268 8.19232 12.0233 8.71567 11.2413C9.23902 10.4592 9.13702 9.41641 8.47205 8.75057C8.10317 8.37917 7.601 8.17079 7.07752 8.1719Z"
                                                        fill="white"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M12.3357 9.44755V5.39682C12.3359 5.38959 12.3354 5.38234 12.3341 5.37523C12.3317 5.36846 12.3299 5.3615 12.3287 5.35442C12.3251 5.28671 12.3124 5.2198 12.2909 5.15551L12.2839 5.13546C12.2825 5.13138 12.2811 5.12729 12.2798 5.12322C12.2752 5.1096 12.2706 5.09609 12.2647 5.08304C12.2273 4.99904 12.1751 4.92251 12.1105 4.85714L7.48462 0.231292C7.41926 0.166673 7.34272 0.114431 7.25873 0.0770975C7.24233 0.0686485 7.22532 0.0614328 7.20784 0.0555102L7.18626 0.0485714C7.12169 0.0268285 7.05456 0.0136102 6.98657 0.0092517C6.97873 0.00850207 6.97098 0.00695206 6.96344 0.00462585C6.95548 0.0019217 6.94717 0.000364146 6.93877 0H1.54195C0.690354 0 0 0.690354 0 1.54195V13.8775C0 14.7291 0.690354 15.4195 1.54195 15.4195H6.41099V13.8775H1.54195V1.54195H6.1678V5.39682C6.1678 5.82262 6.51298 6.1678 6.93877 6.1678H10.7936V9.44755H12.3357ZM7.70975 4.62585V2.63211L9.70349 4.62585H7.70975Z"
                                                          fill="white"/>
                                                </svg>

                                            </a>
                                        </div>
                                    </div>
                                    <div className="preview__right">
                                        <a href="#">
                                            <img src={refreshicon} alt="refreshicon"/>
                                        </a>
                                        <a href="#">
                                            <img src={refreshicon2} alt="refreshicon"/>
                                        </a>
                                        <div className="preview__more">
                                            <a href="#">
                                                <img src={controlswhite} alt=""/>
                                            </a>
                                            <div className="more__dropdown">
                                                <ul>
                                                    <li className="droppable__inner">
                                                        <a href="#">Preview origin <span><img src={rightdrop}
                                                                                              alt="dropdown"/></span></a>
                                                        <div className="droppable__sub">
                                                            <ul>
                                                                <li className="check__picker active__picker">
                                                                    <a href="#"><p><span><img src={source1}
                                                                                              alt="source"/></span> Source
                                                                    </p> <p>
                                                                        <input type="radio" checked="" id="check1"
                                                                               name="radio-group"/><label
                                                                        htmlFor="check1"></label>
                                                                    </p></a>
                                                                </li>
                                                                <li className="check__picker">
                                                                    <a href="#"><p><span><img src={source1}
                                                                                              alt="source"/></span> Target
                                                                    </p> <p>
                                                                        <input type="radio" id="check2"
                                                                               name="radio-group"/><label
                                                                        htmlFor="check2"></label></p></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="droppable__inner">
                                                        <a href="#">Panel position <span><img src={rightdrop}
                                                                                              alt="dropdown"/></span></a>
                                                        <div className="droppable__sub ">
                                                            <ul className="position__picker">
                                                                <li className="check__picker active__picker">
                                                                    <a href="#"><p><span><img src={leftsource}
                                                                                              alt="source"/></span> Left
                                                                    </p> <p><input type="radio" checked="" id="check3"
                                                                                   name="radio-gr1" value="left"/><label
                                                                        htmlFor="check3"></label></p></a>
                                                                </li>
                                                                <li className="check__picker">
                                                                    <a href="#"><p><span><img src={rightsourse}
                                                                                              alt="source"/></span> Right
                                                                    </p>
                                                                        <p>
                                                                            <input type="radio" id="check4"
                                                                                   name="radio-gr1"
                                                                                   value="right"/><label
                                                                            htmlFor="check4"></label></p>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="droppable__inner">
                                                        <a href="#">Show <span><img src={rightdrop}
                                                                                    alt="dropdown"/></span></a>
                                                        <div className="droppable__sub ">
                                                            <ul className="show__page">
                                                                <li className="check__picker active__picker">
                                                                    <a href="#"><p><span><img src={horizontalicon}
                                                                                              alt="source"/></span> Page
                                                                        with
                                                                        horizontal thumbnails</p> <p><input type="radio"
                                                                                                            checked=""
                                                                                                            id="check5"
                                                                                                            name="show1"
                                                                                                            value="horizontal"/><label
                                                                        htmlFor="check5"></label></p></a>
                                                                </li>
                                                                <li className="check__picker">
                                                                    <a href="#"><p><span><img src={verticalicon}
                                                                                              alt="source"/></span> Page
                                                                        with
                                                                        vertical thumbnails</p> <p><input type="radio"
                                                                                                          id="check6"
                                                                                                          name="show1"
                                                                                                          value="vertical"/><label
                                                                        htmlFor="check6"></label></p></a>
                                                                </li>
                                                                <li className="check__picker">
                                                                    <a href="#"><p><span></span> Page only</p> <p><input
                                                                        type="radio" id="check7" name="show1"
                                                                        value="page__only"/><label
                                                                        htmlFor="check7"></label>
                                                                    </p></a>
                                                                </li>
                                                                <li className="check__picker">
                                                                    <a href="#"><p><span></span> Thumbnails only</p> <p>
                                                                        <input
                                                                            type="radio" id="check8" name="show1"
                                                                            value="thumbnail__only"/><label
                                                                        htmlFor="check8"></label></p>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tag__errors tag__block" style={{display: "none"}}>
                                <p>Tag errors</p>
                                <div className="tag__table">
                                    <div className="tag__head">
                                        <div className="tag__head--elem">
                                            <p>Severity</p>
                                        </div>
                                        <div className="tag__head--elem">
                                            <p>Message</p>
                                        </div>
                                    </div>
                                    <div className="tag__content--elem">
                                        <div className="content__column">
                                            <img src={badgeimage} alt="badge"/>
                                        </div>
                                        <div className="content__column">
                                            <p>Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf
                                                style=”bidy
                                                text
                                                (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari
                                                “&lt;cf
                                                style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)”
                                                size=”...Tag
                                                pari “&lt;cf style=”bidy text (2)” size=”...</p>
                                        </div>
                                    </div>
                                    <div className="tag__content--elem">
                                        <div className="content__column">
                                            <img src={badgeimage} alt="badge"/>
                                        </div>
                                        <div className="content__column">
                                            <p>Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf
                                                style=”bidy
                                                text
                                                (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari
                                                “&lt;cf
                                                style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)”
                                                size=”...Tag
                                                pari “&lt;cf style=”bidy text (2)” size=”...</p>
                                        </div>
                                    </div>
                                    <div className="tag__content--elem">
                                        <div className="content__column">
                                            <img src={badgeimage} alt="badge"/>
                                        </div>
                                        <div className="content__column">
                                            <p>Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf
                                                style=”bidy
                                                text
                                                (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari
                                                “&lt;cf
                                                style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)”
                                                size=”...Tag
                                                pari “&lt;cf style=”bidy text (2)” size=”...</p>
                                        </div>
                                    </div>
                                    <div className="tag__content--elem">
                                        <div className="content__column">
                                            <img src={badgeimage} alt="badge"/>
                                        </div>
                                        <div className="content__column">
                                            <p>Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf
                                                style=”bidy
                                                text
                                                (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari
                                                “&lt;cf
                                                style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)”
                                                size=”...Tag
                                                pari “&lt;cf style=”bidy text (2)” size=”...</p>
                                        </div>
                                    </div>
                                    <div className="tag__content--elem">
                                        <div className="content__column">
                                            <img src={badgeimage} alt="badge"/>
                                        </div>
                                        <div className="content__column">
                                            <p>Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari “&lt;cf
                                                style=”bidy
                                                text
                                                (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)” size=”...Tag pari
                                                “&lt;cf
                                                style=”bidy text (2)” size=”...Tag pari “&lt;cf style=”bidy text (2)”
                                                size=”...Tag
                                                pari “&lt;cf style=”bidy text (2)” size=”...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="tag__errors summary__block" style={{display: "none"}}>
                                <p>QA summary</p>
                                <div className="tag__table">
                                    <div className="tag__head">
                                        <div className="tag__head--elem">
                                            <p>Severity</p>
                                        </div>
                                        <div className="tag__head--elem">
                                            <p>Message</p>
                                        </div>
                                    </div>
                                    <div className="tag__content--elem">
                                        <div className="content__column">
                                            <img src={severitywanr} alt="badge"/>
                                        </div>
                                        <div className="content__column">
                                            <p>Repeated words 2Repeated words 2Repeated words 2Repeated words 2Repeated
                                                words
                                                2Repeated words 2Repeated words 2Repeated words 2Repeated words
                                                2Repeated
                                                words
                                                2Repeated words 2Repeated words 2Repeated words 2Repeated words
                                                2Repeated
                                                words
                                                2Repeated words 2</p>
                                        </div>
                                    </div>
                                    <div className="tag__content--elem">
                                        <div className="content__column">
                                            <img src={severitywanr} alt="badge"/>
                                        </div>
                                        <div className="content__column">
                                            <p>Missmatched leading white spacesMissmatched leading white
                                                spacesMissmatched
                                                leading
                                                white spacesMissmatched leading white spacesMissmatched leading white
                                                spacesMissmatched leading white spacesMissmatched leading white
                                                spacesMissmatched
                                                leading white spacesMissmatched leading white spacesMissmatched leading
                                                white
                                                spacesMissmatched leading white spacesMissmatched leading white
                                                spacesMissmatched
                                                leading white spacesMissmatched leading white spacesMissmatched leading
                                                white
                                                spacesMissmatched leading white spacesMissmatched leading white
                                                spaces</p>
                                        </div>
                                    </div>
                                    <div className="tag__content--elem">
                                        <div className="content__column">
                                            <img src={severitywanr} alt="badge"/>
                                        </div>
                                        <div className="content__column">
                                            <p>Missmatched trailing punctuationMissmatched trailing
                                                punctuationMissmatched
                                                trailing
                                                punctuationMissmatched trailing punctuationMissmatched trailing
                                                punctuationMissmatched trailing punctuationMissmatched trailing
                                                punctuationMissmatched trailing punctuationMissmatched trailing
                                                punctuationMissmatched trailing punctuationMissmatched trailing
                                                punctuationMissmatched trailing punctuationMissmatched trailing
                                                punctuationMissmatched trailing punctuationMissmatched trailing
                                                punctuationMissmatched trailing punctuationMissmatched trailing
                                                punctuation</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="comments__preview" style={{display: "none"}}>
                                <div className="elem__comment">
                                    <p>SEGMENT 6</p>
                                    <div className="comment__box">
                                        <div className="comment__info">
                                            <a href="#" className="remove__comment"><img src={trash}
                                                                                         alt="trash"/></a>
                                            <div className="comment__head">
                                                <p>For:</p>
                                                <div className="comment__tags">
                                                    <div className="elem__tag">
                                                        <p>Client</p>
                                                    </div>
                                                    <div className="elem__tag">
                                                        <p>Translator</p>
                                                    </div>
                                                    <div className="elem__tag">
                                                        <p>Project manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment__users">
                                            <div className="comment__user--main">
                                                <h6>Justas Jasaitis</h6>
                                                <p>Šis segmentas visiškai neaiškus, todėl, kad neina nieko suprasti, ko
                                                    gero
                                                    yra
                                                    klaida oriiginale, ar galite patikslinti?</p>
                                            </div>
                                            <div className="comment__user--main comment__user--reply editable__comment">
                                                <div className="edit__comment">
                                                    <a href="#"><img src={greendots} alt="greendots"/></a>
                                                    <div className="edit__dropdown">
                                                        <ul>
                                                            <li><a href="#">Edit</a></li>
                                                            <li><a href="#">Delete comment</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <h6>Lukas baranauskas</h6>
                                                <p>Patiksinimas. Patikslinimas. Patikslinimas. Patikslinimas.</p>
                                            </div>
                                        </div>
                                        <div className="comment__reply">
                                            <textarea name="" id="" cols="30" rows="10"
                                                      placeholder="Reply..."></textarea>
                                            <div className="reply__controls">
                                                <div className="reply__controls--wrapper">
                                                    <a href="#" className="cancel__reply">Cancel</a>
                                                    <a href="#" className="reply__submit">REPLY</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="elem__comment">
                                    <p>SEGMENT 6</p>
                                    <div className="comment__box">
                                        <div className="comment__info">
                                            <a href="#" className="remove__comment"><img src={trash}
                                                                                         alt="trash"/></a>
                                            <div className="comment__head">
                                                <p>For:</p>
                                                <div className="comment__tags">
                                                    <div className="elem__tag">
                                                        <p>Client</p>
                                                    </div>
                                                    <div className="elem__tag">
                                                        <p>Translator</p>
                                                    </div>
                                                    <div className="elem__tag">
                                                        <p>Project manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment__users">
                                            <div className="comment__user--main">
                                                <h6>Justas Jasaitis</h6>
                                                <p>Šis segmentas visiškai neaiškus, todėl, kad neina nieko suprasti, ko
                                                    gero
                                                    yra
                                                    klaida oriiginale, ar galite patikslinti?</p>
                                            </div>
                                            <div className="comment__user--main comment__user--reply editable__comment">
                                                <div className="edit__comment">
                                                    <a href="#"><img src={greendots} alt="greendots"/></a>
                                                    <div className="edit__dropdown">
                                                        <ul>
                                                            <li><a href="#">Edit</a></li>
                                                            <li><a href="#">Delete comment</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <h6>Lukas baranauskas</h6>
                                                <p>Patiksinimas. Patikslinimas. Patikslinimas. Patikslinimas.</p>
                                            </div>
                                        </div>
                                        <div className="comment__reply">
                                            <textarea name="" id="" cols="30" rows="10"
                                                      placeholder="Reply..."></textarea>
                                            <div className="reply__controls">
                                                <div className="reply__controls--wrapper">
                                                    <a href="#" className="cancel__reply">Cancel</a>
                                                    <a href="#" className="reply__submit">REPLY</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="elem__comment">
                                    <p>SEGMENT 6</p>
                                    <div className="comment__box">
                                        <div className="comment__info">
                                            <a href="#" className="remove__comment"><img src={trash}
                                                                                         alt="trash"/></a>
                                            <div className="comment__head">
                                                <p>For:</p>
                                                <div className="comment__tags">
                                                    <div className="elem__tag">
                                                        <p>Client</p>
                                                    </div>
                                                    <div className="elem__tag">
                                                        <p>Translator</p>
                                                    </div>
                                                    <div className="elem__tag">
                                                        <p>Project manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment__users">
                                            <div className="comment__user--main">
                                                <h6>Justas Jasaitis</h6>
                                                <p>Šis segmentas visiškai neaiškus, todėl, kad neina nieko suprasti, ko
                                                    gero
                                                    yra
                                                    klaida oriiginale, ar galite patikslinti?</p>
                                            </div>
                                            <div className="comment__user--main comment__user--reply editable__comment">
                                                <div className="edit__comment">
                                                    <a href="#"><img src={greendots} alt="greendots"/></a>
                                                    <div className="edit__dropdown">
                                                        <ul>
                                                            <li><a href="#">Edit</a></li>
                                                            <li><a href="#">Delete comment</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <h6>Lukas baranauskas</h6>
                                                <p>Patiksinimas. Patikslinimas. Patikslinimas. Patikslinimas.</p>
                                            </div>
                                        </div>
                                        <div className="comment__reply">
                                            <textarea name="" id="" cols="30" rows="10"
                                                      placeholder="Reply..."></textarea>
                                            <div className="reply__controls">
                                                <div className="reply__controls--wrapper">
                                                    <a href="#" className="cancel__reply">Cancel</a>
                                                    <a href="#" className="reply__submit">REPLY</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="elem__comment">
                                    <p>SEGMENT 6</p>
                                    <div className="comment__box">
                                        <div className="comment__info">
                                            <a href="#" className="remove__comment"><img src={trash}
                                                                                         alt="trash"/></a>
                                            <div className="comment__head">
                                                <p>For:</p>
                                                <div className="comment__tags">
                                                    <div className="elem__tag">
                                                        <p>Client</p>
                                                    </div>
                                                    <div className="elem__tag">
                                                        <p>Translator</p>
                                                    </div>
                                                    <div className="elem__tag">
                                                        <p>Project manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment__users">
                                            <div className="comment__user--main">
                                                <h6>Justas Jasaitis</h6>
                                                <p>Šis segmentas visiškai neaiškus, todėl, kad neina nieko suprasti, ko
                                                    gero
                                                    yra
                                                    klaida oriiginale, ar galite patikslinti?</p>
                                            </div>
                                            <div className="comment__user--main comment__user--reply editable__comment">
                                                <div className="edit__comment">
                                                    <a href="#"><img src={greendots} alt="greendots"/></a>
                                                    <div className="edit__dropdown">
                                                        <ul>
                                                            <li><a href="#">Edit</a></li>
                                                            <li><a href="#">Delete comment</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <h6>Lukas baranauskas</h6>
                                                <p>Patiksinimas. Patikslinimas. Patikslinimas. Patikslinimas.</p>
                                            </div>
                                        </div>
                                        <div className="comment__reply">
                                            <textarea name="" id="" cols="30" rows="10"
                                                      placeholder="Reply..."></textarea>
                                            <div className="reply__controls">
                                                <div className="reply__controls--wrapper">
                                                    <a href="#" className="cancel__reply">Cancel</a>
                                                    <a href="#" className="reply__submit">REPLY</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="preview__image">
                                <div className="preview__left">
                                    <div className="prev__buttons">
                                        <a href="#" className="start__left disabled__button">
                                            <img src={leftstart} alt="leftstart"/>
                                        </a>
                                        <a href="#" className="prev__button disabled__button">
                                            <img src={previcon} alt="previcon"/>
                                        </a>
                                    </div>
                                    <div className="counter__controls">
                                        <p>Page <span className="current__preview">1</span> of <span
                                            className="all__preview">100</span></p>
                                    </div>
                                    <div className="next__buttons">
                                        <a href="#" className="next__right"><img src={nexticon} alt="nexticon"/></a>
                                        <a href="#" className="end__next"><img src={endnext} alt="endnext"/></a>
                                    </div>
                                </div>
                                <div className="preview__elem preview__empty" data-preview="preview0"
                                     style={{display: "block"}}>
                                    <div className="preview__text">
                                        <p>Lorem, ipsum, dolor.</p>
                                    </div>
                                </div>
                                <div className="preview__elem" data-preview="preview1">
                                    <img src={previewimage} alt="previewimage"/>
                                </div>
                                <div className="preview__elem" data-preview="preview2">
                                    <img src={previewimage} alt="previewimage"/>
                                </div>
                                <div className="preview__elem" data-preview="preview3">
                                    <img src={previewimage} alt="previewimage"/>
                                </div>
                                <div className="preview__elem" data-preview="preview4">
                                    <img src={previewimage} alt="previewimage"/>
                                </div>
                                <div className="preview__elem" data-preview="preview5">
                                    <img src={previewimage} alt="previewimage"/>
                                </div>
                                <div className="preview__elem" data-preview="preview6">
                                    <img src={previewimage} alt="previewimage"/>
                                </div>
                                <div className="preview__elem" data-preview="preview7">
                                    <img src={previewimage} alt="previewimage"/>
                                </div>
                            </div>
                            <div className="preview__slider">
                                <div className="inner__preview--slider">
                                    <div className="elem__slider" data-preview="preview0">
                                        <div className="slider__info">
                                            <p>Some cover</p>
                                        </div>
                                    </div>
                                    <div className="elem__slider" data-preview="preview1">
                                        <div className="slider__info">
                                            <img src={slider1} alt="slider"/>
                                        </div>
                                    </div>
                                    <div className="elem__slider" data-preview="preview2">
                                        <div className="slider__info">
                                            <img src={slider1} alt="slider"/>
                                        </div>
                                    </div>
                                    <div className="elem__slider" data-preview="preview3">
                                        <div className="slider__info">
                                            <img src={slider1} alt="slider"/>
                                        </div>
                                    </div>
                                    <div className="elem__slider" data-preview="preview4">
                                        <div className="slider__info">
                                            <img src={slider1} alt="slider"/>
                                        </div>
                                    </div>
                                    <div className="elem__slider" data-preview="preview5">
                                        <div className="slider__info">
                                            <img src={slider1} alt="slider"/>
                                        </div>
                                    </div>
                                    <div className="elem__slider" data-preview="preview6">
                                        <div className="slider__info">
                                            <img src={slider1} alt="slider"/>
                                        </div>
                                    </div>
                                    <div className="elem__slider" data-preview="preview7">
                                        <div className="slider__info">
                                            <img src={slider1} alt="slider"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Centralpart/>
            </div>
        </div>
    );
};

export default LeftPart;